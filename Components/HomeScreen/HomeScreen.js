import React from "react";
import { getMyObject } from "../storage";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  Dimensions,
} from "react-native";
import { AnswerContext } from "../AnswerContext";
import { theme } from "../theme";
import { getAllKeys } from "../storage";
import { UserList } from "../UserList";

export const HomeScreen = ({ navigation }) => {
  const {
    state,
    name,
    setName,
    users,
    setUsers,
    shouldFetch,
    actions: { getUser, resetState },
  } = React.useContext(AnswerContext);

  const startQuestionnaire = () => {
    console.log(state, "home");
    resetState();
    navigation.navigate("StudyQuestionFirst");
  };

  React.useEffect(() => {
    getAllKeys().then((data) => setUsers(data));
  }, [shouldFetch]);

  const onUserClicked = (user) => {
    getMyObject(user)
      .then((data) => getUser(data))
      .then(() => {
        setName(user);
        navigation.navigate("SummaryPage");
      });
  };
  console.log(users, "users");
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <Image
          style={styles.canadaFlag}
          source={require("../../Images/canada_flag.jpg")}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          To start, please enter the name (or nickname) and tap start button
        </Text>
      </View>
      <View style={styles.startContainer}>
        <TextInput style={styles.input} onChangeText={setName} value={name} />
        <View style={styles.button}>
          <Button
            title="Start"
            onPress={startQuestionnaire}
            color={theme.questionText.color}
          />
        </View>
      </View>
      <UserList onUserClicked={onUserClicked} users={users} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.backgroundColor,
    alignItems: "center",
  },
  canadaFlag: { width: 330, height: 150 },
  flagContainer: {
    padding: 2,
    borderRadius: 10,
    height: "auto",
    backgroundColor: "white",
    marginTop: 30,
    width: Dimensions.get("window").width - 60,
    alignItems: "center",
    justifyContent: "center",
  },
  button: { ...theme.button, width: 80 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    width: 240,
    borderColor: theme.background.backgroundColor,
  },
  infoContainer: {
    ...theme.bubbleContainer,
    width: Dimensions.get("window").width - 60,
    marginLeft: 0,
    marginTop: 30,
  },
  infoText: { textAlign: "center" },

  startContainer: {
    ...theme.bubbleContainer,
    width: Dimensions.get("window").width - 60,
    marginLeft: 0,
    marginTop: 30,
    alignItems: "center",
  },
});
