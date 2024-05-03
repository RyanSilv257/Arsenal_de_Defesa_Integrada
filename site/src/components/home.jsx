import "../styles/home.css";
import"../components/produto.jsx";
import { Link } from "react-router-dom";


function Home(){
    return(
<>
<div class='main-div'>
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="carrossel.jpeg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img src="carrossel2.png" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img src="carrossel3.png" class="d-block w-100" alt="..."/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
    </div>
    <div class="bg">
        
    <div class='sub-div'>
        <div class='sub-title'>
        <h1 id='title1'>MAIS VENDIDOS</h1>
        <hr />
        </div>
    
        <div class='items-div'>


        <Link to="/Produto">
        <a href='#'>
            <div class='item'>
                <img class="products" src="Produtos/pistola-stoeger-str9-9mm.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
        </a>
        </Link>
{ /*_____________________________________________2___________________________________________________________*/ }
        <Link to="/Produto">          
            <a href='#'>
            <div class='item'>
                <img class ="products" src="Produtos/bolsa1.jpg" alt=''/>
                <p>Bolsa Tática Guerrilha</p>
            </div>
            </a>
            </Link>
{ /*_____________________________________________3___________________________________________________________*/ }
            <Link to="/Produto">
            <a href='#'>
            <div class='item'>
                <img class ="products" src="Produtos/Machado Tático.jpeg" alt=''/>
                <p>Machado Tático AXEL</p>
            </div>
            </a>
            </Link>
{ /*_____________________________________________4___________________________________________________________*/ }
            <Link to="/Produto">
            <a href='#'>
            <div class='item'>
                <img class ="products" src="Produtos/MUNIÇÃO 9MM LUGER ETOG 124GR TREINA.jpeg" alt=''/>
                <p>Munição 9MM Luger Etog 124GR Treina</p>
            </div>
            </a>
            </Link>
{ /*_____________________________________________5___________________________________________________________*/ }
            <Link to="/Produto">
            <a href='#'>
            <div class='item'>
                <img class="products" src="Produtos/REVÓLVER RT 065 TAURUS CAL 357 MAG.jpeg" alt=''/>
                <p>Revólver RT 065 Taurus CAL 357 MAG</p>
            </div>
            </a>
            </Link>
{ /*_____________________________________________6___________________________________________________________*/ }
            <Link to="/Produto">
            <a href='#'>
            <div class='item'>
                <img class ="products"src="Produtos/MUNIÇÃO CBC .357 MAGNUM POLYMATCH 158GR.jpeg" alt=''/>
                <p>Munição CBC.357 Magnum Polymach 158GR</p>
            </div>
            </a>
            </Link>

        </div>
    </div>
{ /*_____________________________________________7___________________________________________________________*/ }
    <div class="link-for-products">
        <Link to ="/MaisVendidos">
            <a class="" href="#">veja mais.</a>
        </Link>
    </div>
    <div class='sub-div'>
        <div class='sub-title2'>
        <h1 id='title1'>PROMOÇÕES</h1>
        <hr id='title2'/>
        </div>
    
        <div class='items-div'>
            <a href='#'>
            <div class='item'>
                <img class="products" src="Produtos/ESPINGARDA CBC PUMP MILITARY 3.0 19POL CAL 12.jpeg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a>
            <a href='#'>
            <div class='item'>
                <img class="products " src="Produtos/ÓCULOS SOLAR TÁTICO FOCUS - COYOTE R$ 229,00.jpeg" alt=''/>
                <p>ÓCULOS SOLAR TÁTICO FOCUS - COYOTE</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img src="Produtos/REVÓLVER RT066 TAURUS CAL 357MAG.jpeg" alt=''/>
                <p>Revólver RT 066 Taurus Cal 357Mag
                </p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img class="products"src="Produtos/RIFLE CBC PUMP ACTION GALERY CAL 22LR CORONHA DE MADEIRA.jpeg" alt=''/>
                <p>Rifle CBC Pump Action Galery Cal 22LR</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img class="products" src="Produtos/RIFLE .22 SEMIAUTOMÁTICO TACTICAL CORONHA TÁTICA EM POLIPROPILENO PRETA- CBC R$3.652,00.jpeg" alt=''/>
                <p>Rifle.22 Tactical Coronha Tática CBC</p>
            </div>
            </a><a href='#'>
            <div class='item'> 
                <img class="products" src="Produtos/Red Dot Frenzy-S 1x17x24 MIC - Vector Optics.jpeg" alt=''/>
                <p>Red Dot Vector 1x17x24 MIC</p>
            </div>
            </a>


        </div>
    </div>
    <div class="link-for-products">
        <Link to ="MaisVendidos">
        <a class="" href="#">veja mais.</a>
        </Link>
    </div>
    </div>
</div>

</>
    );
}

export default Home;
