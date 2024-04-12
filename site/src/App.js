import logo from './logo_header.png';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Armas from './components/Armas';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <>
    <Header />

    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap')
      </style>
    </head>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Armas" element={<Armas />}/>
      </Routes>

    <Footer />
    </>
  );
}

export default App;
