import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useState } from "react";
import Items from "./Items";

const Nav = () => {
  const [category, setCategory] = useState();
  const [option, setoption] = useState();
  const assortCategory = () => {
    console.log(option);
  };

  return (
    <>
      <section className="Nav">
        <h2>Nav</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            assortCategory(option);
          }}
        >
          <label> Sort by Category</label>
          <select
            onChange={(event) => {
              setoption(event.target.value);
            }}
          >
            <option value="Electronics">Electronics</option>
            <option value="Household">Household</option>
            <option value="Clothing">Clothing</option>
          </select>
          <button type="submit">Select</button>
        </form>
      </section>
      <Items option={option} />
    </>
  );
};

export default Nav;
