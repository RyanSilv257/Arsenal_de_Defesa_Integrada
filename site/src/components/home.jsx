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
                <img src="home/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img src="home/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img src="home/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img src="home/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img src="home/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
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
                <img src="home/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a>
            <a href='#'>
            <div class='item'>
                <img src="home/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img src="home/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img src="home/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img src="home/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a><a href='#'>
            <div class='item'>
                <img src="home/PISTOLA_TAURUS.jpg" alt=''/>
                <p>Pistola Taurus TH380 Calibre .380ACP</p>
            </div>
            </a>


        </div>
    </div>
</div>
<div class="link-for-products">
        <a class="" href="#">veja mais.</a>
    </div>
</>
    );
}

export default Home;
