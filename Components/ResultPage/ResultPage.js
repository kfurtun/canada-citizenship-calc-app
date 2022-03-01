import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { AnswerContext } from "../AnswerContext";
import { calculationResult } from "./resultCalculations";
import { theme } from "../theme";
import Icon from "react-native-vector-icons/MaterialIcons";

export const ResultPage = (props) => {
  const {
    state,
    actions: { resetState },
    setName,
    setShouldFetch,
    shouldFetch,
  } = React.useContext(AnswerContext);
  const { navigation } = props;

  const result = calculationResult(state);

  const text = {
    success:
      "Congratulations! You are eligible to apply for a Canadian Citizenship",
    fail: "You are not eligible to be able to apply for a Canadian Citizenship. Please see the information below!",
  };
  return (
    <View style={styles.container}>
      <View style={{ ...styles.bubbleContainer, marginBottom: 30 }}>
        {result.eligibility ? (
          <View style={{ alignItems: "center" }}>
            <Icon
              name="celebration"
              size={60}
              color={theme.background.backgroundColor}
              style={{ marginBottom: 20 }}
            />
            <Text style={styles.resultText}>{text.success}</Text>
          </View>
        ) : (
          <View style={{ alignItems: "center" }}>
            <Icon
              name="sentiment-dissatisfied"
              size={60}
              color={theme.background.backgroundColor}
              style={{ marginBottom: 20 }}
            />
            <Text style={styles.resultText}>{text.fail}</Text>
          </View>
        )}
      </View>
      {!result.eligibility && (
        <View style={styles.bubbleContainer}>
          <Text
            style={{ ...styles.infoText, marginBottom: 10 }}
          >{`· Remaining days for citizenship: ${result.remainingDays} days`}</Text>
          <Text
            style={{ ...styles.infoText, marginBottom: 10 }}
          >{`· Eligible days to date: ${Math.round(
            result.PR + result.sumStudyWork
          )} days`}</Text>
          <Text
            style={styles.infoText}
          >{`· Anticipated eligibility date: ${result.eligibilityDate}`}</Text>
        </View>
      )}
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            resetState();
            setName("");
            setShouldFetch(!shouldFetch);
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: theme.background,
  bubbleContainer: theme.bubbleContainer,
  resultText: {
    color: theme.background.backgroundColor,
    textAlign: "center",
    fontSize: 25,
  },
  infoText: { fontSize: 16 },
  buttonContainer: {
    ...theme.buttonContainer,
    height: 60,
    alignItems: "center",
  },
  buttonText: { color: theme.background.backgroundColor, fontSize: 22 },
});
