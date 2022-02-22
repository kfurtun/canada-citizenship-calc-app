import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { theme } from "../theme";
import moment from "moment";

const Item = ({ title }) => (
  <View style={styles.details}>
    <Text>{title}</Text>
  </View>
);

export const SummaryBubble = (props) => {
  const { state, question, navigation, title, isResident, isTravel, page } =
    props;

  let DATA = [];
  if (state[question].answer) {
    DATA = [...Object.values(state[question].answer)];
    console.log(DATA, "data");
  }

  const renderItem = ({ item, index }) => {
    if (isResident) {
      return (
        <Item title={`${moment(item).format("DD/MMM/YYYY")}`} key={index} />
      );
    } else if (isTravel) {
      return (
        <Item
          title={`${moment(item.from).format("DD/MMM/YYYY")}-${moment(
            item.to
          ).format("DD/MMM/YYYY")}-${item.destination}`}
          key={index}
        />
      );
    } else {
      return (
        <Item
          title={`${moment(item.from).format("DD/MMM/YYYY")}-${moment(
            item.to
          ).format("DD/MMM/YYYY")}`}
          key={index}
        />
      );
    }
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate(page)}>
      <View style={styles.bubbleContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{title}</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={() => Math.random()}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bubbleContainer: {
    marginLeft: 30,
    padding: 15,
    borderRadius: 10,
    height: "auto",
    backgroundColor: "white",
    width: Dimensions.get("window").width - 60,
  },

  header: {
    color: theme.background.backgroundColor,
    marginBottom: 2,
  },
  headerContainer: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: theme.background.backgroundColor,
    marginBottom: 10,
  },
  details: { marginBottom: 10 },
});
