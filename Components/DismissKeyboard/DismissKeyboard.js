import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

export const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View>{children}</View>
  </TouchableWithoutFeedback>
);
