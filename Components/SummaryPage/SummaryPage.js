import React from "react";

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { dateConflictDetector } from "../dateConflictDetector";
import { AnswerContext } from "../AnswerContext";
import { theme } from "../theme";
import { SummaryBubble } from "../SummaryBubble";
import Icon from "react-native-vector-icons/FontAwesome5";
import { setObjectValue, getMyObject } from "../storage";

const Item = ({ title }) => <View style={styles.item}>{title}</View>;

export const SummaryPage = (props) => {
  const {
    state,
    name,
    actions: { getUser },
  } = React.useContext(AnswerContext);
  const { navigation } = props;

  const checkConflict = dateConflictDetector(state);
  console.log(checkConflict.length, "length");
  console.log(checkConflict, "check");
  console.log(name, "Name");

  const onSubmitClicked = () => {
    setObjectValue(state, name).then(() => navigation.navigate("ResultPage"));
  };

  const renderItem = ({ item }) => <Item title={item} />;

  const DATA = [
    checkConflict.length > 0 && (
      <View style={styles.bubbleContainer}>
        <View style={styles.warningContainer}>
          <Icon
            name="exclamation"
            size={30}
            color={theme.background.backgroundColor}
          />
        </View>
        <Text style={styles.warningText}>
          There is a conflict with your dates, please double check your dates!
        </Text>
      </View>
    ),
    <SummaryBubble
      state={state}
      question="second"
      navigation={navigation}
      title="Study Period"
      page="StudyQuestionFirst"
    />,
    <SummaryBubble
      state={state}
      question="fourth"
      navigation={navigation}
      title="Work Period"
      page="WorkQuestionFirst"
    />,
    <SummaryBubble
      state={state}
      question="fifth"
      navigation={navigation}
      title="PR date"
      isResident={true}
      page="PrQuestion"
    />,
    <SummaryBubble
      state={state}
      question="seventh"
      navigation={navigation}
      title="Travels"
      isTravel={true}
      page="TravelLogFirstQuestion"
    />,
  ];
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={() => Math.random()}
        />
      </View>

      {checkConflict.length > 0 || !state.fifth.answer ? (
        <View style={styles.buttonContainer}>
          <View style={styles.disabledContainer}>
            <Text style={styles.disabled}>Submit</Text>
          </View>
        </View>
      ) : (
        <TouchableOpacity
          onPress={onSubmitClicked}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: theme.background,

  item: { marginVertical: 12 },

  bubbleContainer: {
    marginLeft: 30,
    padding: 15,
    borderRadius: 10,
    height: "auto",
    backgroundColor: "lightgray",
    width: Dimensions.get("window").width - 60,
  },

  warningText: {
    color: theme.background.backgroundColor,
    textAlign: "center",
    marginTop: 15,
  },

  warningContainer: {
    alignItems: "center",
  },
  button: theme.button,
  buttonContainer: {
    ...theme.buttonContainer,
    height: 60,
    alignItems: "center",
  },
  disabled: { color: "gray", fontSize: 22 },
  buttonText: { color: theme.background.backgroundColor, fontSize: 22 },
});
