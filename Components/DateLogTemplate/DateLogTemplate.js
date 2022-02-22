import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { theme } from "../theme";

export const DateLogTemplate = (props) => {
  const { children, question } = props;

  return (
    <View style={styles.container}>
      <View style={styles.question}>
        <Text style={styles.text}>{question}</Text>
      </View>

      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.background.backgroundColor },
  question: {
    marginLeft: 30,
    marginTop: 50,
    padding: 15,
    borderRadius: 10,
    height: "auto",
    backgroundColor: "white",
    width: Dimensions.get("window").width - 60,
  },
  text: {
    color: theme.background.backgroundColor,
    fontSize: 24,
    textAlign: "center",
  },
});
