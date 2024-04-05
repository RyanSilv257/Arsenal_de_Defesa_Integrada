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
            <img src='/logo_header.png' class='header_img'></img>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li id='armas' class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Armas</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Acessórios</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Cutelaria</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Vestuário</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Lanternas</a>
                </li>
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Nossas Licenças</a>
                </li>
                <li id="navdrop" class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Privacidade</a></li>
                    <li><a class="dropdown-item" href="#">Contato</a></li>
                </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        <div>
        </div>
    </header>
    </>
        
    )
}

export default Header;