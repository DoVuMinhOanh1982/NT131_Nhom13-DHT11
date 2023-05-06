import axios from "axios";

const instance = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  baseURL: "http://192.168.43.91:8090",
  timeout: 10000,
  withCredentials: true,
  credentials: "same-origin",
});

export default instance;
