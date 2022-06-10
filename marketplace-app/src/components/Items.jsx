import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { database } from "../Assets/api";

const Items = () => {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [listOfAllItems, setListOfAllItems] = useState([]);
  useEffect(() => {
    database
      .get("/items", {
        params: {
          category_name: category,
        },
      })
      .then((res) => {
        setListOfAllItems(res.data.items);
      });
  }, [category]);

  return (
    <section className="Main">
      {!listOfAllItems.length && loading === true ? (
        <p>...Loading</p>
      ) : (
        <ul className="allItemsList">
          {listOfAllItems.map((item) => {
            return (
              <div key={item.item_name} className="itemCard">
                <section className="itemImage">
                  <img src={item.img_url} alt="item_image" />
                </section>
                <section className="itemText">
                  <p>Item: {item.item_name}</p>
                  <p>Description: {item.description}</p>
                  <p>Price: {item.price} £</p>
                  <p>Category: {item.category_name}</p>
                  <section className="buttonSection">
                    <button>Add to basket</button>
                    <button>Purchase</button>
                  </section>
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
