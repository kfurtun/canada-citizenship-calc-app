import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { theme } from "../theme";
import Icon from "react-native-vector-icons/FontAwesome";
import { removeValue } from "../storage";
import { AnswerContext } from "../AnswerContext";

export const UserList = (props) => {
  const { users, onUserClicked } = props;
  const { shouldFetch, setShouldFetch } = React.useContext(AnswerContext);

  const onDeleteClicked = (item, e) => {
    e.preventDefault();
    removeValue(item);
    setShouldFetch(!shouldFetch);
  };

  const Item = ({ item }) => {
    return (
      <View style={styles.historyContainer}>
        <TouchableOpacity onPress={() => onUserClicked(item)}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>{item}</Text>
            <TouchableOpacity onPress={(e) => onDeleteClicked(item, e)}>
              <Icon
                name="trash"
                size={24}
                color={theme.background.backgroundColor}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem = ({ item }) => {
    return <Item item={item} />;
  };

  return (
    <>
      {users.length > 0 && (
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>History</Text>
          </View>

          <FlatList
            data={users}
            renderItem={renderItem}
            keyExtractor={() => Math.random()}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...theme.bubbleContainer,
    width: Dimensions.get("window").width - 60,
    marginLeft: 0,
    marginTop: 30,
  },
  historyContainer: { marginBottom: 10 },
  text: { textDecorationLine: "underline", fontSize: 20 },
  header: {
    color: theme.background.backgroundColor,
    marginBottom: 2,
    fontSize: 20,
  },
  headerContainer: {
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderBottomColor: theme.background.backgroundColor,
    marginBottom: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
});
