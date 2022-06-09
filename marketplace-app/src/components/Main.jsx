import { useState, useEffect } from 'react';
import axios from 'axios';
const allItemsAPI = axios.create({
  baseURL: 'https://nc-marketplace-app.herokuapp.com/api/',
});
const Main = () => {
  const [listOfAllItems, setListOfAllItems] = useState([]);
  useEffect(() => {
    allItemsAPI.get('/items').then((res) => {
      setListOfAllItems(res.data.items);
    });
  }, []);
  return (
    <section className='Main'>{!listOfAllItems.length ? <></> :
      <ul className='allItemsList'>
        {listOfAllItems.map((item) => {
          return (
            <div>
              <img src={item.img_url} alt="item_image" />
              <li>Item:{item.item_name}</li>
              <li>Description:{item.description}</li>
              <li>Price: {item.price}</li>
            </div>
          );
        })}
      </ul>
      }
    </section>
  );
};

export default Main;
