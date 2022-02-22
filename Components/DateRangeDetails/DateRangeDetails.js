import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import moment from "moment";
import { theme } from "../theme";
import { AnswerContext } from "../AnswerContext";

import Icon from "react-native-vector-icons/FontAwesome";

export const DateRangeDetails = (props) => {
  const deleteAction = React.useContext(AnswerContext);
  const { state, destination } = props;

  const handleClick = (item) => {
    const index = copiedData.indexOf(item);
    console.log(index, "index");
  };

  const copiedData = [...Object.values(state)];
  console.log(state, "seventh");
  copiedData.sort((a, b) => {
    if (b.from === a.from) {
      return new Date(b.to) - new Date(a.to);
    } else {
      return new Date(b.from) - new Date(a.from);
    }
  });

  const Item = ({ title }) => {
    return (
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemText}>
            {moment(title.from).format("DD/MMM/YYYY")}-
            {moment(title.to).format("DD/MMM/YYYY")}
          </Text>
          {destination && (
            <Text style={styles.destination}>{title.destination}</Text>
          )}
        </View>

        <TouchableOpacity onPress={() => console.log("zaa")}>
          <View>
            <Icon
              name="trash"
              size={24}
              color={theme.background.backgroundColor}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const DATA = [...copiedData];

  const renderItem = ({ item }) => <Item title={item} />;
  console.log(DATA, "data");

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={() => Math.random()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    height: 40,
    borderColor: theme.questionText.color,
    width: 80,
  },

  container: {
    marginLeft: 30,
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    height: "auto",
    backgroundColor: "white",
    width: Dimensions.get("window").width - 60,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  date: { height: 40, justifyContent: "center" },

  itemContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },

  itemText: {
    fontSize: 20,
    color: theme.background.backgroundColor,
    width: 255,
  },

  destination: {
    fontSize: 16,
  },
});
