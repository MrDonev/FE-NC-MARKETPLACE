import { useContext, useEffect, useState } from 'react';
import { getOrders } from '../Assets/api';
import { UserContext } from '../Assets/usercontext';

const Orders = () => {
  const user = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    console.log(`in useffect`);
    if (user.user.username) {
      getOrders(user.user.username).then((orders) => {
        setOrders(orders.items);
      });
    }
  }, []);
  console.log(`in orders`);
  return (
    <section className="Main">
      {!orders.length ? (
        <p>...Loading</p>
      ) : (
        <ul className="allItemsList">
          {orders.map((item) => {
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
                  <section className="buttonSection"></section>
                </section>
              </div>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Orders;
