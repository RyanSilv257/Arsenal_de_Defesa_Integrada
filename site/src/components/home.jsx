import "../styles/home.css";

function Home(){
    return(
<>
<div class='main-div'>
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
        <div class="carousel-item active">
        <img src="carrossel.png" class="d-block w-100" alt="..."/>
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
        <a href='#'>
            <div class='item'>
                <img src="home/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img class ="products" src="Produtos/bolsa1.jpg" alt=''/>
                <p>Bolsa Tática Guerrilha</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img class ="products" src="Produtos/Machado Tático.jpeg" alt=''/>
                <p>Machado Tático AXEL</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img class ="products" src="Produtos/MUNIÇÃO 9MM LUGER ETOG 124GR TREINA.jpeg" alt=''/>
                <p>Munição 9MM Luger Etog 124GR Treina</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img class="products" src="Produtos/REVÓLVER RT 065 TAURUS CAL 357 MAG.jpeg" alt=''/>
                <p>Revólver RT 065 Taurus CAL 357 MAG</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img class ="products"src="Produtos/MUNIÇÃO CBC .357 MAGNUM POLYMATCH 158GR.jpeg" alt=''/>
                <p>Munição CBC.357 Magnum Polymach 158GR</p>
            </div>
            </a>


        </div>
    </div>
    <div class="link-for-products">
        <a class="" href="#">veja mais.</a>
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
                <img class="products " src="Produtos/Capacete Tático cobertura Completa R$330,82.jpeg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img src="home/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img class="products"src="produtos/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img class="products" src="Produtos/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a><a href='#'>
            <div class='item'> 
                <img class="products" src="Produtos/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a>


        </div>
    </div>
    <div class="link-for-products">
        <a class="" href="#">veja mais.</a>
    </div>
    </div>
</div>

</>
    );
}

export default Home;
