import { useState, useEffect } from "react";
import axios from "axios";
const allItemsAPI = axios.create({
  baseURL: "https://nc-marketplace-app.herokuapp.com/api/",
});
const Items = ({ option }) => {
  const [listOfAllItems, setListOfAllItems] = useState([]);
  useEffect(() => {
    allItemsAPI.get("/items").then((res) => {
      setListOfAllItems(res.data.items);
    });
  }, []);
  console.log(option);
  return (
    <section className="Main">
      {!listOfAllItems.length ? (
        <></>
      ) : (
        <ul className="allItemsList">
          {listOfAllItems.map((item) => {
            return (
              <div key={item.item_name}>
                <img src={item.img_url} alt="item_image" />
                <p>Item:{item.item_name}</p>
                <p>Description:{item.description}</p>
                <p>Price: {item.price}</p>
                <p>category:{item.category_name}</p>
                <section className="buttonSection">
                  <button onclick="">Add to basket</button>
                  <button>Purchase</button>
                </section>
              </div>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Items;
