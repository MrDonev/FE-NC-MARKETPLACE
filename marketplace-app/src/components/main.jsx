import { useState } from "react";
const Main = () => {
  const [listOfAllItems, setListOfAllItems] = useState([]);
  fetch("https://nc-marketplace-app.herokuapp.com/api/Items")
    .then((items) => {
      return items.json();
    })
    .then((items) => {
      console.log(items);
    });
};

export default Main;
