import React from "react";
import { setObjectValue, getMyObject, getAllKeys, clearAll } from "../storage";
import { initialState } from "../initialState";

export const AnswerContext = React.createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "first-question":
      return { ...state, first: { ...state.first, answer: action.answer } };
    case "second-question":
      return {
        ...state,
        second: {
          ...state.second,
          answer: {
            ...state.second.answer,
            [parseInt(state.second.index) + 1]: action.answer,
          },
          index: parseInt(state.second.index) + 1,
        },
      };
    case "third-question":
      return { ...state, third: { ...state.third, answer: action.answer } };
    case "fourth-question":
      return {
        ...state,
        fourth: {
          ...state.fourth,
          answer: {
            ...state.fourth.answer,
            [parseInt(state.fourth.index) + 1]: action.answer,
          },
          index: parseInt(state.fourth.index) + 1,
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
          answer: {
            ...state.seventh.answer,
            [parseInt(state.seventh.index) + 1]: action.answer,
          },
          index: parseInt(state.seventh.index) + 1,
        },
      };
    case "reset-state":
      return initialState;
    case "get-user":
      return action.userData;

    case "delete-row":
      return {
        ...state,
        [action.question]: {
          ...state[action.question],
          answer: action.data,
          index: parseInt(state[action.question].index) - 1,
        },
      };
    default:
      throw new Error(`Unrecognized action: ${action.type}`);
  }
}
export const AnswerProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const [name, setName] = React.useState("");
  const [users, setUsers] = React.useState([]);
  const [shouldFetch, setShouldFetch] = React.useState(false);

  // React.useEffect(() => {
  //   clearAll();
  // }, []);

  const firstQuestion = (answer) => {
    dispatch({ type: "first-question", answer });
  };
  const secondQuestion = (answer) => {
    dispatch({ type: "second-question", answer });
  };

  const thirdQuestion = (answer) => {
    dispatch({ type: "third-question", answer });
  };

  const fourthQuestion = (answer) => {
    dispatch({ type: "fourth-question", answer });
  };

  const fifthQuestion = (answer) => {
    dispatch({ type: "fifth-question", answer });
  };

  const sixthQuestion = (answer) => {
    dispatch({ type: "sixth-question", answer });
  };
  const seventhQuestion = (answer) => {
    dispatch({ type: "seventh-question", answer });
  };

  const resetState = () => {
    dispatch({ type: "reset-state" });
  };

  const getUser = (userData) => {
    dispatch({ type: "get-user", userData });
  };
  const deleteRow = (data, question) => {
    dispatch({ type: "delete-row", data, question });
  };

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
          resetState,
          getUser,
        },
        shouldFetch,
        setShouldFetch,
        name,
        setName,
        users,
        setUsers,
      }}
    >
      {children}
    </AnswerContext.Provider>
  );
};
