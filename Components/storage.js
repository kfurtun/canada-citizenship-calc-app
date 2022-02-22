import AsyncStorage from "@react-native-async-storage/async-storage";

export const setObjectValue = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("key", jsonValue);
  } catch (e) {
    // save error
  }

  console.log("Set.");
};

export const getMyObject = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("key");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // read error
    console.log("error");
  }

  console.log("Get.");
};
