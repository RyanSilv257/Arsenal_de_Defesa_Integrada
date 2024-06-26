import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
    return(
    <>

    <header> 
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <Link to="/">
            <img src='/logo_header2.png' class='header_img'></img>
            </Link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li id='armas' class="nav-item">
                <Link to="/Armas">
                <a class="nav-link active" aria-current="page" href="">Armas</a>
                </Link>
                </li>
                <li class="nav-item">
                <Link to ="/Acessorios">
                <a class="nav-link active" aria-current="page" href="">Acessórios</a>
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/Cutelaria">
                <a class="nav-link active" aria-current="page" href="#">Cutelaria</a>
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/Vestuario">
                <a class="nav-link active" aria-current="page" href="#">Vestuário</a>
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/Lanternas">
                <a class="nav-link active" aria-current="page" href="#">Lanternas</a>
                </Link>
                </li>
                <li class="nav-item">
                <Link to="/MaisVendidos">
                <a class="nav-link active" aria-current="page" href="#">Mais Vendidos</a>
                </Link>
                </li>
                <li id="navdrop" class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img class='navimg' src="menu.png"></img>
                </a>
                <ul class="dropdown-menu">
                    <li><Link to="/Privacidade"><a class="dropdown-item" href="#">Privacidade</a></Link></li>
                    <li><Link to="/Contato"><a class="dropdown-item" href="#">Contato</a></Link>
                    </li>
                    <li><Link to="/Sobre"><a class="dropdown-item" href="#">Sobre</a></Link>
                    </li>
                    <li><Link to="/licensas"><a class="dropdown-item" href="#">Nossas Licenças</a></Link>
                    </li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>

        <div class='subnavbar'>
            <form>
                <input class="pesquisar" type="text" placeholder="Pesquisar"/>
            </form>
            <div class='sub-items'>
                <Link to="/Carrinho">
                <a href="#">
                <img class="cart" src='carrinho.png'></img>
                </a>
                </Link>
                <Link to="/Perfil">
                <a href="#">
                <img class=" user-img" src='usuario.png'></img>
                </a>
                </Link>
            </div>
        </div>
    </header>
    </>
        
    )
}

export default Header;