import logo from './logo_header.png';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Armas from './components/Armas';
import Registro from './components/registro';
import Login from './components/login';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <>

    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')
      </style>
    </head>
      <Routes>
        <Route path="/" element={<><Header /><Home /><Footer /></>}/>
        <Route path="/Armas" element={<><Header /><Armas /><Footer /></>}/>
        <Route path="/Registro" element={<Registro />}/>
        <Route path="/Login" element={<Login />}/>
      </Routes>

    </>
  );
}

export default App;
