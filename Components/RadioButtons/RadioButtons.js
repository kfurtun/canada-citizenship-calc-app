import React from "react";

import { StyleSheet, View, TextInput, Button } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";

import { theme } from "../theme";

export const RadioButtons = (props) => {
  const { question, navigation, route, nextQuestion, skipQuestion } = props;

  const radioButtonsData = [
    {
      id: "1",
      label: "Yes",
      value: "yes",
      size: 30,
      color: theme.background.backgroundColor,
      onPress: () => navigation.navigate(nextQuestion),
      labelStyle: {
        fontSize: 30,
        color: theme.background.backgroundColor,
      },
      containerStyle: {
        backgroundColor: theme.radioButtonColor,
        height: 60,
        borderRadius: 10,
        justifyContent: "center",
        marginRight: 30,
        width: 100,
      },
    },
    {
      id: "2",
      label: "No",
      value: "no",
      color: theme.background.backgroundColor,
      size: 30,
      onPress: () => navigation.navigate(skipQuestion),
      labelStyle: { color: theme.background.backgroundColor, fontSize: 30 },
      containerStyle: {
        backgroundColor: theme.radioButtonColor,
        height: 60,
        borderRadius: 10,
        justifyContent: "center",

        width: 100,
      },
    },
  ];

  const [radioButtons, setRadioButtons] = React.useState(radioButtonsData);
  const onPressRadioButton = (radioButtonsArray) => {
    const selection = radioButtonsArray.filter(
      (button) => button.selected === true
    );
    question(selection[0].value);
  };

  return (
    <View style={styles.container}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
});
