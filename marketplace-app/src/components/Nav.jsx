import { Link } from "react-router-dom";
import Profile from "./Profile";
import { useEffect, useState } from "react";
import Items from "./Items";

const Nav = () => {
  const [category, setCategory] = useState();
  const [option, setoption] = useState();

  return (
    <>
      <section className="Nav">
        <h3>Available categories:</h3>
        <section className="categories">
        <Link to='/'>All items</Link>
        <Link to='/Electronics'>Electronics</Link>
        <Link to='/Clothing'>Clothing</Link>
        <Link to='/Household'>Household</Link>
        </section>
      </section>
    </>
  );
};

export default Nav;
