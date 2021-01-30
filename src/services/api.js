import axios from "axios";

const api = axios.create({
  baseURL: "https://gametask-api.devops.ifrn.edu.br",
});

export default api;
