import React from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { DateLogTemplate } from "../DateLogTemplate";
import { AnswerContext } from "../AnswerContext";
import { theme } from "../theme";
import { DatePicker } from "../DatePicker";

import { DateRangeDetails } from "../DateRangeDetails";

const Item = ({ title }) => {
  return <View>{title}</View>;
};

export const TravelLogSecondQuestion = (props) => {
  const {
    state,
    actions: { seventhQuestion },
    // travelIndex,
    // setTravelIndex,
  } = React.useContext(AnswerContext);

  const { navigation } = props;

  const [date, setDate] = React.useState({
    from: new Date(),
    to: new Date(),
  });

  const [text, onChangeText] = React.useState("");

  const [showFrom, setShowFrom] = React.useState(false);
  const [showTo, setShowTo] = React.useState(false);

  const [show, setShow] = React.useState(false);

  const onAddClick = () => {
    setShow(true);

    seventhQuestion({
      from: date.from,
      to: date.to,
      destination: text,
    });
    // setTravelIndex(travelIndex + 1);
    onChangeText("");
  };

  const renderItem = ({ item }) => <Item title={item} />;
  const DATA = [
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
            question="seventh"
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
            question="seventh"
            show={show}
            setShow={setShow}
          />
        </View>
      )}
      {!showFrom && !showTo && (
        <View style={styles.datePickerContainer}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Destination"
            placeholderTextColor={theme.background.backgroundColor}
          />
        </View>
      )}

      {!showFrom && !showTo && (
        <>
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
                onPress={() => navigation.navigate("SummaryPage")}
                mode="contained"
                title="Next >"
                color={theme.questionText.color}
              />
            </View>
          </View>
        </>
      )}
    </View>,
    <View style={{ marginTop: 10 }}>
      {show && (
        <DateRangeDetails
          state={state.seventh.answer}
          destination={true}
          question="seventh"
        />
      )}
    </View>,
  ];

  return (
    <DateLogTemplate question={state.seventh.question}>
      <FlatList data={DATA} renderItem={renderItem} />
    </DateLogTemplate>
  );
};

const styles = StyleSheet.create({
  button: theme.button,
  buttonContainer: theme.buttonContainer,
  datePickerContainer: theme.datePickerContainer,
  input: {
    height: 40,
    alignSelf: "center",
    borderWidth: 2,
    padding: 10,
    borderColor: theme.background.backgroundColor,
    color: theme.background.backgroundColor,
    width: 290,
  },
});
