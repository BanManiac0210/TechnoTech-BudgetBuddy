import axios from "axios";
console.log("process.env.API_BASE_URL", process.env.API_BASE_URL);
const instance = axios.create({
  baseURL: "https://technotech-vk4d.onrender.com",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});
instance.interceptors.response.use((response) => {
  return response.data;
});
export default instance;
