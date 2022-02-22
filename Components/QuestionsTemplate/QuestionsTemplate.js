import React from "react";

import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import { RadioButtons } from "../RadioButtons";
import { theme } from "../theme";

export const QuestionsTemplate = ({
  children,
  question,
  navigation,
  nextQuestion,
  skipQuestion,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={styles.text}>{children}</Text>
      </View>
      <RadioButtons
        question={question}
        navigation={navigation}
        nextQuestion={nextQuestion}
        skipQuestion={skipQuestion}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.backgroundColor,
  },
  question: {
    marginLeft: 30,
    marginTop: 50,
    padding: 15,
    borderRadius: 10,
    height: "auto",
    backgroundColor: "white",
    width: Dimensions.get("window").width - 60,
  },
  text: {
    color: theme.background.backgroundColor,
    fontSize: 24,
    textAlign: "center",
  },
});
