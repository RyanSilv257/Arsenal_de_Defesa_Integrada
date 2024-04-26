import'../styles/geral.css';
import  produto1 from "../Produtos/PISTOLA TAURUS 838C CALIBRE .380ACP.jpeg"
import  produto2 from "../Produtos/bolsa1.jpg"
import  produto3 from "../Produtos/RIFLE .22 SEMIAUTOMÁTICO TACTICAL CORONHA TÁTICA EM POLIPROPILENO PRETA- CBC R$3.652,00.jpeg"
import  produto4 from "../Produtos/Lanterna de Choque - Defesa Pessoal 800 TYPE.jpeg"
import  produto5 from "../Produtos/Faca Armada NTK Tático Empunhadura Soco-inglês Militar Caça R$ 208,90.jpeg"
import  produto6 from "../Produtos/Spray Para Defesa Pessoal Poly Defensor 50g.jpeg"
import  produto7 from "../Produtos/REVÓLVER RT066 TAURUS CAL 357MAG.jpeg"
import  produto8 from "../Produtos/Carabina Winchester 22 Modelo 70 Featherweight Compact MID Calibre 22-250 R$2,890.00.jpeg"
import  produto9 from "../Produtos/REVÓLVER RT066 TAURUS CAL 357MAG.jpeg"
import  produto10 from "../Produtos/ESPINGARDA CBC PUMP MILITARY 3.0 19POL CAL 12.jpeg"
import  produto11 from "../Produtos/PISTOLA TAURUS TH380 CALIBRE .380ACP.jpeg"
import  produto12 from "../Produtos/PISTOLA TAURUS TS9C GRAPHENE.jpeg"
import { Link } from 'react-router-dom';
/*_____________________________________________________________________________________________________*/
function MaisVendidos(){
    return(
        <>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" type="text/css" href="geral.css"/>
    <title>Armas</title>
    <header>
    <div class='sub-div'>
        <div class='sub-title'>
            <h1 id='title1'>MAIS VENDIDOS</h1>
            <hr />
        </div>
     </div>   
    </header>
    
    <section>
        <div class="product">
            <img src={produto1} alt="Acessório de caça 1"/>
            <h2>PISTOLA TAURUS 838C CALIBRE .380ACP</h2>
            <p>R$8.089,90</p>
            <Link to="/Produto">
            <button>Adicionar ao carrinho</button>
            </Link>
        </div>
{ /*____________________________________________2____________________________________________________________*/ }
        <div class="product">
            <img src={produto2} alt="Acessório de caça 2"/>
            <h2>Bolsa de Ombro Defender Rapina Militar - Verde Oliva</h2>
            <p>R$257,00</p>
            <button>Adicionar ao carrinho</button>
        </div>
 { /*___________________________________________3_____________________________________________________________*/ }
        <div class="product">
            <img src={produto3} alt="Acessório de caça 3"/>
            <h2>RIFLE .22 SEMIAUTOMÁTICO TACTICAL CORONHA TÁTICA EM POLIPROPILENO PRETA- CBC</h2>
            <p>R$3.652,00</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________4____________________________________________________________*/ }
        <div class="product">
            <img src={produto4} alt="Acessório de caça 4"/>
            <h2>Lanterna de Choque - Defesa Pessoal 800 TYPE</h2>
            <p>R$109,00</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________5____________________________________________________________*/ }
    <div class="product">
        <img src={produto5} alt="Acessório de caça 5"/>
        <h2>Faca Armada NTK Tático Empunhadura Soco-inglês Militar Caça</h2>
        <p>R$208,90</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*____________________________________________6____________________________________________________________*/ }
    <div class="product">
        <img src={produto6} alt="Acessório de caça 6"/>
        <h2>Spray Para Defesa Pessoal Poly Defensor 50g</h2>
        <p>R$105,00</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*____________________________________________7____________________________________________________________*/ }
    <div class="product">
        <img src={produto7} alt="Acessório de caça 7"/>
        <h2>REVÓLVER RT066 TAURUS CAL 357MAG</h2>
        <p>R$5.099,00</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________8___________________________________________________________*/ }
    <div class="product">
        <img src={produto8} alt="Acessório de caça 8"/>
        <h2>ACAGALA Bússola multifuncional de sobrevivência</h2>
        <p>R$159,00</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________9___________________________________________________________*/ }
    <div class="product">
        <img src={produto9} alt="Acessório de caça 9"/>
        <h2>Carabina Winchester 22 Modelo 70 Featherweight Compact MID Calibre 22-250</h2>
        <p>R$2,890.00</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________10___________________________________________________________*/ }
    <div class="product">
        <img src={produto10} alt="Acessório de caça 10"/>
        <h2>ESPINGARDA CBC PUMP MILITARY 3.0 19POL CAL 12</h2>
        <p>R$8.299,90</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________11___________________________________________________________*/ }
    <div class="product">
        <img src={produto11} alt="Acessório de caça 11"/>
        <h2>PISTOLA TAURUS TH380 CALIBRE .380ACP</h2>
        <p>R$8.149,90</p>
        <button>Adicionar ao carrinho</button>
    </div>
    { /*_____________________________________________12___________________________________________________________*/ }
    <div class="product">
        <img src={produto12} alt="Acessório de caça 12"/>
        <h2>PISTOLA TAURUS TS9C GRAPHENE</h2>
        <p>R$9.549,00</p>
        <button>Adicionar ao carrinho</button>
    </div>
    </section>
        </>
    )
}

export default MaisVendidos