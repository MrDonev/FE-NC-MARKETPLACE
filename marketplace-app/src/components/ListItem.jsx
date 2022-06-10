const ListItem = () => {
  return (
    <form className="listingItem">
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
