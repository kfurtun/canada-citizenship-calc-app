import React from "react";

import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";

export const HomeScreen = ({ navigation }) => {
  const startQuestionnaire = () => {
    navigation.navigate("StudyQuestionFirst");
  };
  return (
    <View style={styles.container}>
      <View style={styles.flagContainer}>
        <Image
          style={styles.canadaFlag}
          source={require("../../Images/kindpng_1313928.png")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Start questionnaire"
          onPress={startQuestionnaire}
        ></Button>
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  canadaFlag: { width: 300, height: 150 },
  flagContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: { flex: 1 },
});
