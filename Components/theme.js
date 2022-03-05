import { Dimensions } from "react-native";

export const theme = {
  background: {
    width: "100%",
    height: "100%",
    paddingTop: 45,
    backgroundColor: "#B22221",
  },

  questionText: {
    fontSize: 35,
    textAlign: "center",
    color: "#F8F8FF",
  },

  radioButtonColor: "#F8F8FF",

  buttonContainer: {
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

  datePickerContainer: {
    marginLeft: 30,
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    height: "auto",

    backgroundColor: "white",
    width: Dimensions.get("window").width - 60,
  },

  button: {
    borderRadius: 10,
    height: 40,
    backgroundColor: "#B22222",
    minWidth: 80,
  },

  bubbleContainer: {
    marginLeft: 30,
    padding: 15,
    borderRadius: 10,
    height: "auto",
    backgroundColor: "white",
    width: Dimensions.get("window").width - 60,
  },
};
