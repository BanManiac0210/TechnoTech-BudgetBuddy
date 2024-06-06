import axiosClient from "../utils/axiosClient";

const getTags = async () => {
  return await axiosClient.get("tags");
};
const getTagsByID = async (tagId) => {
  return await axiosClient.get(`tags/${tagId}`);
}
const createTag = async (data) => {
  return await axiosClient.post("tags", data);
};
const updateTag = async (id, data) => {
  return await axiosClient.patch(`tags?id=${id}`, data);
};
const deleteTag = async (id) => {
  return await axiosClient.delete(`tags?id=${id}`);
};
const getTagsByUser = async (userID) => {
  return await axiosClient.get(`tags/user/${userID}`)
}
export { getTags, createTag, updateTag, deleteTag, getTagsByID, getTagsByUser};
