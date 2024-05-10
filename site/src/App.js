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
import Cutelaria from './components/Cutelaria';
import Vestuario from './components/Vestuario';
import Sobre from './components/Sobre';
import Privacidade from './components/Privacidade';
import Produto from './components/produto';
import Produto2 from './components/produto2';
import Produto3 from './components/produto3';
import Produto4 from './components/produto4';
import Produto5 from './components/produto5';
import Produto6 from './components/produto6';
import MaisVendidos from './components/MaisVendidos';
import Contato from './components/Contato';
import Perfil from './components/Perfil';
import Logout from './components/Logout';
import UpdateData from './components/UpdateData';
import { Routes, Route } from 'react-router-dom';
import Promo from './components/promo';
import Carrinho from './components/Carrinho';


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
        <Route path="/Sobre" element={<><Header/><Sobre /><Footer /></>}/>
        <Route path="/Privacidade" element={<><Header /><Privacidade /><Footer /></>}/>
        <Route path="/Produto" element={<><Header /><Produto /><Footer /></>}/>
        <Route path="/Produto2" element={<><Header /><Produto2 /><Footer /></>}/>
        <Route path="/Produto3" element={<><Header /><Produto3 /><Footer /></>}/>
        <Route path="/Produto4" element={<><Header /><Produto4 /><Footer /></>}/>
        <Route path="/Produto5" element={<><Header /><Produto5 /><Footer /></>}/>
        <Route path="/Produto6" element={<><Header /><Produto6 /><Footer /></>}/>
        <Route path="/MaisVendidos" element={<><Header /><MaisVendidos /><Footer /></>}/>
        <Route path="/Promo" element={<><Header /><Promo /><Footer /></>}/>
        <Route path="/Contato" element={<><Header /><Contato/><Footer /></>}/>
        <Route path="/Perfil" element={<><Header /><Perfil/><Footer /></>}/>
        <Route path="/Logout" element={<><Logout /></>}/>
        <Route path="/UpdateData" element={<><Header /><UpdateData/><Footer /></>}/>
        <Route path="/Carrinho" element={<><Header /><Carrinho /><Footer />  </>}/>
      </Routes>

    </>
  );
}

export default App;
