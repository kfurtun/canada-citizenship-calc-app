import React from "react";
import { View, Platform, Button, StyleSheet, Text } from "react-native";
// import { Button } from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import { theme } from "../theme";
import moment from "moment";

export const DatePicker = (props) => {
  const {
    date,
    setDate,
    showFrom,
    setShowFrom,
    showTo,
    setShowTo,
    title,
    state,
    question,
    setShow,
  } = props;

  const isShow = title === "from" ? showFrom : showTo;
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date[title];
    if (title === "from") {
      setShowFrom(Platform.OS === "ios");
    } else {
      setShowTo(Platform.OS === "ios");
    }

    setDate({
      ...date,
      [title]: currentDate,
    });
  };

  const showDatepicker = () => {
    if (title === "from") {
      setShowFrom(!showFrom);

      if (showTo === true) {
        setShowTo(false);
      }
    } else {
      setShowTo(!showTo);

      if (showFrom === true) {
        setShowFrom(false);
      }
    }
  };

  if (showFrom || showTo || !state[question].answer) {
    setShow(false);
  } else {
    setShow(true);
  }

  const confirmOnPress = () => {
    if (title === "from") {
      setShowFrom(!showFrom);
      setDate({ ...date, from: date.from });
    } else {
      setShowTo(!showTo);
      setDate({ ...date, to: date.to });
    }
  };
  const cancelOnPress = () => {
    if (title === "from") {
      setShowFrom(!showFrom);
      setDate({ ...date, from: date.from });
    } else {
      setShowTo(!showTo);
      setDate({ ...date, to: date.to });
    }
  };

  return (
    <>
      <View style={styles.dateContainer}>
        <View
          style={{
            ...styles.button,
            width: 80,
            left: "10%",
          }}
        >
          <Button
            onPress={showDatepicker}
            mode="contained"
            title={title.charAt(0).toUpperCase() + title.slice(1)}
            color={theme.questionText.color}
          />
        </View>
        <View>
          <Text
            style={{ color: theme.background.backgroundColor, fontSize: 20 }}
          >
            {moment(date[title]).format("DD/MMM/YYYY")}
          </Text>
        </View>
      </View>

      <View>
        {isShow && (
          <>
            <View>
              <DateTimePicker
                value={date[title]}
                mode="date"
                display="inline"
                onChange={onChange}
                style={{ height: 320, width: "auto" }}
              />
            </View>

            <View style={styles.confirmCancelContainer}>
              <View style={styles.button}>
                <Button
                  title="Cancel"
                  onPress={cancelOnPress}
                  color={theme.questionText.color}
                />
              </View>
              <View style={styles.button}>
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
    </>
  );
};

const styles = StyleSheet.create({
  confirmCancelContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  button: {
    borderRadius: 10,
    height: 40,
    backgroundColor: theme.background.backgroundColor,
  },

  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
