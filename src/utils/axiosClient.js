import axios from "axios";
console.log("process.env.API_BASE_URL", process.env.API_BASE_URL);
const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.response.use((response) => {
  return response.data;
});
export default instance;
