import "./App.css";
import Header from "./components/Header.jsx";
import Items from "./components/Items";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Basket from "./components/Basket";

function App() {
  return (
    <BrowserRouter>
      <section className="App">
        <Header />
        <Nav />
        <Routes>
          {/* <Route path="/" element={<Items />} /> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </section>
    </BrowserRouter>
  );
}

export default App;
