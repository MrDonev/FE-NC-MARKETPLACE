import axios from "axios";
export const database = axios.create({
  baseURL: "https://nc-marketplace-app.herokuapp.com/api/",
});

export const patchKudos = (username, kudos_inc) => {
  return database.patch(`users/${username}`, { kudos_inc }).then((res) => {
    return res.data;
  });
};

export const getBasket = (username) => {
  return database.get(`users/${username}/basket`).then((res) => {
    return res.data;
  });
};

export const addToBasket = (item_id, username) => {
  return database.post(`users/${username}/basket`, { item_id }).then((res) => {
    return res.data;
  });
};

export const deleteFromBasket = (item_id, username) => {
  return database.delete(`users/${username}/basket/${item_id}`).then((res) => {
    console.log(res);
    return res.data;
  });
};
