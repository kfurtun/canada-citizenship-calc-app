import React from "react";

import { Text } from "react-native";

import { AnswerContext } from "../AnswerContext";
import { QuestionsTemplate } from "../QuestionsTemplate/QuestionsTemplate";
import { theme } from "../theme";

export const TravelLogFirstQuestion = ({ navigation, route }) => {
  const {
    state,
    actions: { sixthQuestion },
  } = React.useContext(AnswerContext);

  return (
    <QuestionsTemplate
      question={sixthQuestion}
      navigation={navigation}
      nextQuestion="TravelLogSecondQuestion"
      skipQuestion="SummaryPage"
    >
      {state.sixth.question}
    </QuestionsTemplate>
  );
};
