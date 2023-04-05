import axios from "axios";

export default axios.create({
  headers: { "Content-Type": "application/json" },
  baseURL: "http://localhost:19000/",
  timeout: 10000,
});
