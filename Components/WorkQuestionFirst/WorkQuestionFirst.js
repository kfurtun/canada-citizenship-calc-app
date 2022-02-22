import React from "react";
import { Text } from "react-native";
import { QuestionsTemplate } from "../QuestionsTemplate/QuestionsTemplate";
import { theme } from "../theme";

import { AnswerContext } from "../AnswerContext";

export const WorkQuestionFirst = ({ navigation }) => {
  const {
    state,
    actions: { thirdQuestion },
  } = React.useContext(AnswerContext);
  return (
    <QuestionsTemplate
      question={thirdQuestion}
      navigation={navigation}
      nextQuestion="WorkQuestionSecond"
      skipQuestion="PrQuestion"
    >
      {state.third.question}
    </QuestionsTemplate>
  );
};
