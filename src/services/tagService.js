import axiosClient from "../utils/axiosClient";

const getTags = async () => {
  return await axiosClient.get("tags");
};
const createTag = async () => {
  return await axiosClient.post("tags");
};
const updateTag = async (id, data) => {
  return await axiosClient.patch(`tags?id=${id}`, data);
};
const deleteTag = async (id) => {
  return await axiosClient.delete(`tags?id=${id}`);
};
export { getTags, createTag, updateTag, deleteTag };
