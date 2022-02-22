import React from "react";

import { Text } from "react-native";

import { AnswerContext } from "../AnswerContext";
import { QuestionsTemplate } from "../QuestionsTemplate/QuestionsTemplate";
import { theme } from "../theme";

export const StudyQuestionFirst = ({ navigation, route }) => {
  const {
    state,
    actions: { firstQuestion },
  } = React.useContext(AnswerContext);

  return (
    <QuestionsTemplate
      question={firstQuestion}
      navigation={navigation}
      nextQuestion="StudyQuestionSecond"
      skipQuestion="WorkQuestionFirst"
    >
      {state.first.question}
    </QuestionsTemplate>
  );
};
