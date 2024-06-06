import axiosClient from "../utils/axiosClient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
//singletion pattern
const registerAccount = async (data) => {
  return await axiosClient.post("users", data);
};
const loginAccount = async (username, password) => {
  return await axiosClient.get(
    `users/login?username=${username}&password=${password}`
  );
};
const getUserInfo = async (id) => {
  if (id === "") {
    id = "ALL";
  }
  return await axiosClient.get(`users?id=${id}`);
};
const updateUserInfo = async (id, data) => {
  return await axiosClient.patch(`users?id=${id}`, data);
};

const getBalanceAccount = async (userId) => {
  return await axiosClient.get(`users/balanceAccount?userId=${userId}`);
};

const getUserFromStorage = async () => {
  try {
    const user = await AsyncStorage.getItem("User");
    if (!user) {
      const navigation = useNavigation();
      navigation.navigate("Login");
    }
    return JSON.parse(user);
  } catch (error) {
    console.log(error);
  }
};
const setUserToStorage = async (user) => {
  // console.log("user", user);
  const userDataString = JSON.stringify(user);
  await AsyncStorage.setItem("User", userDataString);
};
export {
  registerAccount,
  loginAccount,
  getUserInfo,
  updateUserInfo,
  getBalanceAccount,
  getUserFromStorage,
  setUserToStorage,
};
