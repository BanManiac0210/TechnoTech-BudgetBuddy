import axiosClient from "../utils/axiosClient";

const getLogs = async () => {
  return await axiosClient.get("/logs");
};
const insertLogs = async (data) => {
  return await axiosClient.post("/logs", data);
};
const updateLogs = async (id, data) => {
  return await axiosClient.patch(`/logs?id=${id}`, data);
};
const deleteLogs = async (id) => {
  return await axiosClient.delete(`/logs?id=${id}`);
};

export { getLogs, insertLogs, updateLogs, deleteLogs };
