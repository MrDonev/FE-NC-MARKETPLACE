<<<<<<< HEAD
import "./App.css";
import Main from "./components/Main";

=======
import './App.css';
import Header from './components/Header.jsx';
import Main from './components/Main';
import Nav from './components/Nav';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './components/Profile';
>>>>>>> 5f558012b1efe5c6a7653c85aeb4e6b04975eeb8
function App() {
  return (
    <BrowserRouter>
    <section className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      <Nav />
    </section>
    </BrowserRouter>
  );
}

export default App;
