import axios from "axios";
export const database = axios.create({
  baseURL: "https://nc-marketplace-app.herokuapp.com/api/",
});
