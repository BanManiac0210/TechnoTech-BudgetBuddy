import axiosClient from "../utils/axiosClient";

const getLogs = async () => {
  return await axiosClient.get("historyLog");
};
const getLogsByID = async (userID) => {
  return await axiosClient.get(`historyLog/by-user-id?userId=${userID}`);
};
const insertLogs = async (data) => {
  return await axiosClient.post("historyLog", data);
};
const updateLogs = async (id, data) => {
  return await axiosClient.patch(`historyLog?id=${id}`, data);
};
const deleteLogs = async (id) => {
  return await axiosClient.delete(`historyLog?id=${id}`);
};

const getLogByMonth = async (month, year, userId) => {
  return await axiosClient.get(
    `historyLog/by-month?month=${month}&year=${year}&userId=${userId}`
  );
};

const chartTypeByMonth = async (month, year, type, userId) => {
  return await axiosClient.get(
    `historyLog/data-for-chart?month=${month}&year=${year}&type=${type}&userId=${userId}`
  );
};

export {
  getLogs,
  insertLogs,
  updateLogs,
  deleteLogs,
  getLogByMonth,
  chartTypeByMonth,
  getLogsByID
};
