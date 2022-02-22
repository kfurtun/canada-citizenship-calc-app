import React from "react";
import { setObjectValue, getMyObject } from "../storage";

export const AnswerContext = React.createContext(null);
const initialState = {
  first: {
    question: "Have you ever been in Canada with study permit?",
    answer: null,
  },
  second: {
    question:
      " Please select the dates while you were or are studying in Canada",
    answer: null,
  },
  third: {
    question: "Have you ever been in Canada with work permit?",
    answer: null,
  },
  fourth: {
    question:
      " Please select the dates while you were or are working in Canada",
    answer: null,
  },
  fifth: {
    question:
      "Please enter the date when you have become permanent resident of Canada",
    answer: null,
  },
  sixth: {
    question:
      "Have you ever travelled outside of Canada while you are a permanent resident of Canada?",
    answer: null,
  },
  seventh: {
    question:
      "Please enter all your international travels while you are a permanent resident of Canada",
    answer: null,
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "first-question":
      return { ...state, first: { ...state.first, answer: action.answer } };
    case "second-question":
      return {
        ...state,
        second: {
          ...state.second,
          answer: { ...state.second.answer, [action.key]: action.answer },
        },
      };
    case "third-question":
      return { ...state, third: { ...state.third, answer: action.answer } };
    case "fourth-question":
      return {
        ...state,
        fourth: {
          ...state.fourth,
          answer: { ...state.fourth.answer, [action.key]: action.answer },
        },
      };
    case "fifth-question":
      return { ...state, fifth: { ...state.fifth, answer: action.answer } };
    case "sixth-question":
      return { ...state, sixth: { ...state.sixth, answer: action.answer } };
    case "seventh-question":
      return {
        ...state,
        seventh: {
          ...state.seventh,
          answer: { ...state.seventh.answer, [action.key]: action.answer },
        },
      };
    case "delete-row":
      return delete state[action.key].answer[index];
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
}
export const AnswerProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  //   React.useEffect(async () => {
  //     const result = await getMyObject();
  //     if (!result) {
  //       await setObjectValue(initialState);
  //     }

  //     console.log(result, "result");
  //   }, [state]);

  const firstQuestion = (answer) => {
    dispatch({ type: "first-question", answer });
  };
  const secondQuestion = (answer, key) => {
    dispatch({ type: "second-question", answer, key });
  };

  const thirdQuestion = (answer) => {
    dispatch({ type: "third-question", answer });
  };

  const fourthQuestion = (answer, key) => {
    dispatch({ type: "fourth-question", answer, key });
  };

  const fifthQuestion = (answer) => {
    dispatch({ type: "fifth-question", answer });
  };

  const sixthQuestion = (answer) => {
    dispatch({ type: "sixth-question", answer });
  };
  const seventhQuestion = (answer, key) => {
    dispatch({ type: "seventh-question", answer, key });
  };
  const deleteRow = (answer, key, index) => {
    dispatch({ type: "delete-row", answer, key, index });
  };

  const [studyIndex, setStudyIndex] = React.useState(0);
  const [workIndex, setWorkIndex] = React.useState(0);
  const [travelIndex, setTravelIndex] = React.useState(0);
  return (
    <AnswerContext.Provider
      value={{
        state,
        actions: {
          firstQuestion,
          secondQuestion,
          deleteRow,
          thirdQuestion,
          fourthQuestion,
          fifthQuestion,
          sixthQuestion,
          seventhQuestion,
        },
        studyIndex,
        setStudyIndex,
        workIndex,
        setWorkIndex,
        travelIndex,
        setTravelIndex,
      }}
    >
      {children}
    </AnswerContext.Provider>
  );
};
