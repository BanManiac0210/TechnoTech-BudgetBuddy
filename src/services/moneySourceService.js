import axiosClient from "../utils/axiosClient";

const getMoneySources = async () => {
  return await axiosClient.get("moneySources");
};
const createMoneySource = async (data) => {
  return await axiosClient.post("moneySources", data);
};
const updateMoneySource = async (id, data) => {
  return await axiosClient.patch(`moneySources?id=${id}`, data);
};
const deleteMoneySource = async (id) => {
  return await axiosClient.delete(`moneySources?id=${id}`);
};

const getMoneySourceByType = async (userId) => {
  return await axiosClient.get(`moneySources/byType?userId=${userId}`);
};

const getDetailMoneySourceById = async (id, userId) => {
  return await axiosClient.get(
    `moneySources/detail?userId=${userId}&moneySourceId=${id}`
  );
};

export {
  getMoneySources,
  createMoneySource,
  updateMoneySource,
  deleteMoneySource,
  getMoneySourceByType,
  getDetailMoneySourceById,
};
