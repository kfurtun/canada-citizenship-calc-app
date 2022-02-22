import React from "react";

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
} from "react-native";
import { dateConflictDetector } from "../dateConflictDetector";
import { AnswerContext } from "../AnswerContext";
import { theme } from "../theme";
import { SummaryBubble } from "../SummaryBubble";
import Icon from "react-native-vector-icons/FontAwesome5";

const Item = ({ title }) => <View style={styles.item}>{title}</View>;

export const SummaryPage = (props) => {
  const { state } = React.useContext(AnswerContext);
  const { navigation } = props;

  const checkConflict = dateConflictDetector(state);
  console.log(checkConflict.length, "length");
  console.log(checkConflict, "check");

  const renderItem = ({ item }) => <Item title={item} />;

  const DATA = [
    checkConflict.length > 0 && (
      <View style={styles.bubbleContainer}>
        <View style={styles.warningContainer}>
          <Icon
            name="exclamation"
            size={30}
            color={theme.background.backgroundColor}
          />
        </View>
        <Text style={styles.warningText}>
          There is a conflict with your dates, please double check your dates!
        </Text>
      </View>
    ),
    <SummaryBubble
      state={state}
      question="second"
      navigation={navigation}
      title="Study Period"
      page="StudyQuestionFirst"
    />,
    <SummaryBubble
      state={state}
      question="fourth"
      navigation={navigation}
      title="Work Period"
      page="WorkQuestionFirst"
    />,
    <SummaryBubble
      state={state}
      question="fifth"
      navigation={navigation}
      title="PR date"
      isResident={true}
      page="PrQuestion"
    />,
    <SummaryBubble
      state={state}
      question="seventh"
      navigation={navigation}
      title="Travels"
      isTravel={true}
      page="TravelLogFirstQuestion"
    />,
  ];
  return (
    <View style={styles.container}>
      <View>
        <FlatList data={DATA} renderItem={renderItem} />
      </View>

      <View>
        {checkConflict.length > 0 ? (
          <>
            <Button title="Submit" disabled={true} />
          </>
        ) : (
          <View>
            <Button
              title="Submit"
              onPress={() => navigation.navigate("ResultPage")}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { ...theme.background },

  item: { marginVertical: 12 },

  bubbleContainer: {
    marginLeft: 30,
    padding: 15,
    borderRadius: 10,
    height: "auto",
    backgroundColor: "lightgray",
    width: Dimensions.get("window").width - 60,
  },

  warningText: {
    color: theme.background.backgroundColor,
    textAlign: "center",
    marginTop: 15,
  },

  warningContainer: {
    alignItems: "center",
  },
});
