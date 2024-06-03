import axiosClient from "../utils/axiosClient";

//singletion pattern
const registerAccount = async (data) => {
  return await axiosClient.post("/users", data);
};
const loginAccount = async (data) => {
  return await axiosClient.get("/users/login", data);
};
const getUserInfo = async () => {
  return await axiosClient.get("/users");
};
const updateUserInfo = async (data) => {
  return await axiosClient.patch("/users", data);
};

const getBalanceAccount = async (userId) => {
  return await axiosClient.get(`users/balanceAccount?userId=${userId}`);
};

export {
  registerAccount,
  loginAccount,
  getUserInfo,
  updateUserInfo,
  getBalanceAccount,
};
