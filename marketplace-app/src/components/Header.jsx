import { Link } from "react-router-dom";
const Header = () => {
  return (
    <section className="Header">
      <h1>Header</h1>
      <Link to={'/profile'}>Profile</Link>
    </section>
  );
};

export default Header;
