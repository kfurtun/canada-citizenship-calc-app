import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
} from "react-native";
import { DateLogTemplate } from "../DateLogTemplate";
import { theme } from "../theme";
import { DatePicker } from "../DatePicker";
import { AnswerContext } from "../AnswerContext";
import { DateRangeDetails } from "../DateRangeDetails";

export const StudyQuestionSecond = (props) => {
  const {
    state,
    actions: { secondQuestion },
    // studyIndex,
    // setStudyIndex,
  } = React.useContext(AnswerContext);

  const { navigation } = props;

  const [date, setDate] = React.useState({
    from: new Date(),
    to: new Date(),
  });

  const [showFrom, setShowFrom] = React.useState(false);
  const [showTo, setShowTo] = React.useState(false);

  const [show, setShow] = React.useState(false);

  const onAddClick = () => {
    setShow(true);

    secondQuestion({
      from: date.from,
      to: date.to,
    });
    // setStudyIndex(studyIndex + 1);
  };

  console.log(state, "state");

  return (
    <DateLogTemplate question={state.second.question}>
      <View>
        {!showTo && (
          <View style={styles.datePickerContainer}>
            <DatePicker
              title="from"
              date={date}
              setDate={setDate}
              showFrom={showFrom}
              setShowFrom={setShowFrom}
              showTo={showTo}
              setShowTo={setShowTo}
              state={state}
              question="second"
              show={show}
              setShow={setShow}
            />
          </View>
        )}
        {!showFrom && (
          <View style={styles.datePickerContainer}>
            <DatePicker
              title="to"
              date={date}
              setDate={setDate}
              showFrom={showFrom}
              setShowFrom={setShowFrom}
              showTo={showTo}
              setShowTo={setShowTo}
              state={state}
              question="second"
              show={show}
              setShow={setShow}
            />
          </View>
        )}
      </View>

      {!showFrom && !showTo && (
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              disabled={date.from > date.to ? true : false}
              onPress={onAddClick}
              mode="contained"
              title="Add"
              color={theme.questionText.color}
            />
          </View>
          <View style={styles.button}>
            <Button
              onPress={() => navigation.navigate("WorkQuestionFirst")}
              mode="contained"
              title="Next >"
              color={theme.questionText.color}
            />
          </View>
        </View>
      )}

      <View style={{ marginTop: 10 }}>
        {show && (
          <DateRangeDetails state={state.second.answer} question="second" />
        )}
      </View>
    </DateLogTemplate>
  );
};

const styles = StyleSheet.create({
  button: theme.button,
  buttonContainer: theme.buttonContainer,
  datePickerContainer: theme.datePickerContainer,
});
