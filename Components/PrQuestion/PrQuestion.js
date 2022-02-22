import React from "react";
import { StyleSheet, Text, View, Button, Platform } from "react-native";
import { DateLogTemplate } from "../DateLogTemplate";
import { AnswerContext } from "../AnswerContext";
import DateTimePicker from "@react-native-community/datetimepicker";
import { theme } from "../theme";

export const PrQuestion = (props) => {
  const {
    state,
    actions: { fifthQuestion },
  } = React.useContext(AnswerContext);
  const { navigation } = props;

  const [date, setDate] = React.useState(new Date());

  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(!show);
  };
  const confirmOnPress = () => {
    fifthQuestion({ from: date });
    setShow(false);
  };
  const cancelOnPress = () => {
    setDate(new Date());
    setShow(false);
  };
  console.log(state, "valla son");

  return (
    <DateLogTemplate question={state.fifth.question}>
      <View style={styles.datePickerContainer}>
        <View style={styles.dateContainer}>
          <View style={{ ...styles.button, width: 80, left: "10%" }}>
            <Button
              onPress={showDatepicker}
              mode="contained"
              title="From"
              color={theme.questionText.color}
            />
          </View>
          <View>
            <Text
              style={{ color: theme.background.backgroundColor, fontSize: 20 }}
            >{`${date.getDate()}-${
              date.getMonth() + 1
            }-${date.getFullYear()}`}</Text>
          </View>
        </View>

        <View>
          {show && (
            <>
              <DateTimePicker
                value={date}
                mode="date"
                is24Hour={true}
                display="inline"
                onChange={onChange}
                style={{ height: 320, width: "auto" }}
              />
              <View style={styles.confirmCancelContainer}>
                <View style={styles.button}>
                  <Button
                    title="Cancel"
                    onPress={cancelOnPress}
                    color={theme.questionText.color}
                  />
                </View>
                <View style={{ ...styles.button, width: 90 }}>
                  <Button
                    title="Confirm"
                    onPress={confirmOnPress}
                    color={theme.questionText.color}
                  />
                </View>
              </View>
            </>
          )}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button
            onPress={() => navigation.navigate("TravelLogFirstQuestion")}
            mode="contained"
            title="Next >"
            color={theme.questionText.color}
          />
        </View>
      </View>
    </DateLogTemplate>
  );
};

const styles = StyleSheet.create({
  datePickerContainer: theme.datePickerContainer,
  button: theme.button,
  buttonContainer: theme.buttonContainer,
  confirmCancelContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
