import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api/planets/",
});

export default api;