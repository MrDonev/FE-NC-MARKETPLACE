import "./App.css";
import Header from "./components/Header.jsx";
import Items from "./components/Items";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Basket from "./components/Basket";
import Users from "./components/users";
import { UserContext } from "./Assets/usercontext";
import { useState } from "react";
import ListItem from "./components/ListItem";

function App() {
  const [user, setUser] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <section className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Items />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/:category" element={<Items />} />
            <Route path="/users" element={<Users />} />
            <Route path="/listItem" element={<ListItem />} />
          </Routes>
        </section>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
