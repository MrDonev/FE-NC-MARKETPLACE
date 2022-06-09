import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <section className="Header">
      <h1>D & T`s marketplace</h1>
      <section className="headerLinks">
        <Link to={'/'}>Home</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/basket'}>Basket</Link>
      </section>
    </section>
  );
};

export default Header;
