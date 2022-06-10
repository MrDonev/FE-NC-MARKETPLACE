import axios from "axios";
export const database = axios.create({
  baseURL: "https://nc-marketplace-app.herokuapp.com/api/",
});

export const patchKudos=(username,kudos_inc)=>{
  return database.patch(`users/${username}`,{kudos_inc}).then((res)=>{
    return res.data
  })
}