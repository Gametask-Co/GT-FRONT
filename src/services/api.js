import axios from "axios";

const api = axios.create({
  baseURL: "https://gametask-api.herokuapp.com",
});

export default api;
