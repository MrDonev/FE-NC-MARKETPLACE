import { listNewItem } from '../Assets/api';
import { useState } from 'react';
const ListItem = () => {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [itemAdded, setItemAdded] = useState({});
  function addListing(formObject) {
    const item_name = formObject[0].value;
    const description = formObject[1].value;
    const img_url = formObject[2].value;
    const price = formObject[3].value;
    const category_name = formObject[4].value;

    listNewItem(item_name, description, img_url, price, category_name)
      .then((newItem) => {
        setIsItemAdded(true);
        setItemAdded(newItem)
      })
      .catch((err) => {
        console.dir(err);
      });
  }
  return isItemAdded === true ? (
    <div key={itemAdded.item.item_name} className="itemCard">
      <section className="itemImage">
        <img src={itemAdded.item.img_url} alt="item_image" />
      </section>
      <section className="itemText">
        <p>Item: {itemAdded.item.item_name}</p>
        <p>Description: {itemAdded.item.description}</p>
        <p>Price: {itemAdded.item.price} £</p>
        <p>Category: {itemAdded.item.category_name}</p>
      </section>
    </div>
  ) : (
    <form
      className="listingItem"
      onSubmit={(event) => {
        event.preventDefault();
        addListing(event.target);
      }}
    >
      <label>List an item</label>
      <input type="text" placeholder="Name"></input>
      <input type="text" placeholder="Description"></input>
      <input type="text" placeholder="Image url"></input>
      <input type="text" placeholder="Price"></input>
      <input type="text" placeholder="Category"></input>
      <input type="submit" value="List Item"></input>
    </form>
  );
};

export default ListItem;
