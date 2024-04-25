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
import Lanternas from './components/Lanternas';
import Acessorios from './components/Acessorios';
import Licensas from './components/licensas';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <>

    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')
        background-color: red;
      </style>
    </head>
      <Routes>
        <Route path="/" element={<><Header /><Home /><Footer /></>}/>
        <Route path="/Armas" element={<><Header /><Armas /><Footer /></>}/>
        <Route path="/Registro" element={<Registro />}/>
        <Route path="/Login" element={<Login />}/>
        <Route path="/Lanternas" element={<><Header /><Lanternas /><Footer /></>}/>
        <Route path="/Acessorios" element={<><Header /><Acessorios /><Footer /></>}/>
        <Route path="/Cutelaria" element={<><Header /><Cutelaria /><Footer /></>}/>
        <Route path="/Vestuario" element={<><Header /><Vestuario /><Footer /></>}/>
        <Route path="/Licensas" element={<><Header /><Licensas /><Footer /></>}/>
      </Routes>

    </>
  );
}

export default App;
