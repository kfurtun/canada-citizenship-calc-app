import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnswerContext } from "../AnswerContext";
import moment from "moment";

export const ResultPage = (props) => {
  const { state } = React.useContext(AnswerContext);

  let sumStudy = 0;
  let sumWork = 0;
  let sumStudyWork = 0;
  let PR = 0;
  let travel = 0;
  const dayToMsConst = 86400000;

  const calculateDifference = (question) => {
    let sum = 0;
    Object.values(question).map((answer) => {
      sum += (answer.to - answer.from) / dayToMsConst;
    });

    return sum;
  };

  if (state.second.answer) {
    sumStudy = calculateDifference(state.second.answer);
  }
  if (state.fourth.answer) {
    sumWork = calculateDifference(state.fourth.answer);
  }
  if (state.seventh.answer) {
    travel = calculateDifference(state.seventh.answer);
  }

  if ((sumStudy + sumWork) / 2 > 365) {
    sumStudyWork = 365;
  } else {
    sumStudyWork = sumStudy + sumWork;
  }

  PR = (new Date() - state.fifth.answer.from) / dayToMsConst;

  const remainingDays = Math.round(1095 - PR - sumStudyWork + travel);
  const eligibilityDate = moment(
    Date.now() +
      Math.round(1095 - PR - sumStudyWork + travel) * 24 * 60 * 60 * 1000
  ).format("DD/MMM/YYYY");

  if (PR + sumStudyWork - travel > 1095) {
    console.log("Congrats");
  } else {
    console.log(`${remainingDays} days more to go`);
  }
  return (
    <View>
      <Text>{`${Math.round(
        1095 - PR - sumStudyWork + travel
      )} days more to go. Your eligibility date is ${eligibilityDate}`}</Text>
    </View>
  );
};
