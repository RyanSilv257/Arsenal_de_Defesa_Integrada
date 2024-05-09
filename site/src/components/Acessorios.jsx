import'../styles/geral.css';
import  produto30 from "../Produtos/Colete Tático Modular Presilhas WWART AERO Preto R$ 389,00.jpeg"
import  produto31 from "../Produtos/Paracord Planet Certificado de Paracord Tipo III Mil-C-5040 R$109,99.jpeg"
import  produto32 from "../Produtos/Spray Para Defesa Pessoal Poly Defensor 50g.jpeg"
import  produto33 from "../Produtos/ACAGALA Bússola multifuncional de sobrevivência R$159,00.jpeg"
import  produto34 from "../Produtos/8252710 PORTA PENTE CARREGADOR DUPLO FOBUS TAURUS .380, .40 E 9MM R$ 139,99.jpeg"
import  produto35 from "../Produtos/ÓCULOS SOLAR TÁTICO FOCUS - COYOTE R$ 229,00.jpeg"
import  produto36 from "../Produtos/Lanterna Choque Taser Defesa Pessoal Portátil 928 Type Recarregavel.jpeg"
import  produto37 from "../Produtos/Lanterna de Choque - Defesa Pessoal 800 TYPE.jpeg"
import  produto38 from "../Produtos/FOREGRIP TÁTICO ROTATIVO BIPÉ T-POD-G2 - FABDEFENSE® R$ 900,00.jpeg"
import  produto39 from "../Produtos/Red Dot Frenzy-S 1x17x24 MIC - Vector Optics.jpeg"
import  produto40 from "../Produtos/Ferramenta multiuso tática Spor TAG em aço inox R$ 62,90.jpeg"
import  produto41 from "../Produtos/Cinto Tático Bélica (Fivela em Polímero) - Preto R$ 188,10.jpeg"
import { Link } from 'react-router-dom';
/*_____________________________________________________________________________________________________*/
function Acessorios(){
    return(
        <>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" type="text/css" href="geral.css"/>
    <title>Lanternas</title>
    <header>
    <div class='sub-div'>
        <div class='sub-title'>
            <h1 id='title1'>ACESSÓRIOS</h1>
            <hr />
        </div>
     </div>   
    </header>
    
    <section>
        <div class="product">
            <img src={produto30} alt="Acessório de caça 1"/>
            <h2>Colete Tático Modular Presilhas WWART AERO Preto</h2>
            <p>R$389,00</p>
            <Link to="/Produto">
            <button>Adicionar ao carrinho</button>
            </Link>
        </div>
{ /*____________________________________________2____________________________________________________________*/ }
        <div class="product">
            <img src={produto31} alt="Acessório de caça 2"/>
            <h2>Paracord Planet Certificado de Paracord Tipo III Mil-C-5040</h2>
            <p>R$109,99</p>
            <Link to="/Produto">
            <button>Adicionar ao carrinho</button>
            </Link>
        </div>
 { /*___________________________________________3_____________________________________________________________*/ }
        <div class="product">
            <img src={produto32} alt="Acessório de caça 3"/>
            <h2>Spray Para Defesa Pessoal Poly Defensor 50g</h2>
            <p>R$105,00</p>
            <Link to="/produto2">
            <button>Adicionar ao carrinho</button>
            </Link>
        </div>
{ /*____________________________________________4____________________________________________________________*/ }
        <div class="product">
            <img src={produto33} alt="Acessório de caça 4"/>
            <h2>ACAGALA Bússola multifuncional de sobrevivência</h2>
            <p>R$159,00</p>
            <Link to="/Produto">
            <button>Adicionar ao carrinho</button>
            </Link>
        </div>
{ /*____________________________________________5____________________________________________________________*/ }
    <div class="product">
        <img src={produto34} alt="Acessório de caça 5"/>
        <h2>8252710 PORTA PENTE CARREGADOR DUPLO FOBUS TAURUS .380, .40 E 9MM</h2>
        <p>R$139,99</p>
        <Link to="/Produto">
        <button>Adicionar ao carrinho</button>
        </Link>
    </div>
{ /*____________________________________________6____________________________________________________________*/ }
    <div class="product">
        <img src={produto35} alt="Acessório de caça 6"/>
        <h2>ÓCULOS SOLAR TÁTICO FOCUS - COYOTE</h2>
        <p>R$229,00</p>
        <Link to="/Produto">
            <button>Adicionar ao carrinho</button>
        </Link>
    </div>
{ /*____________________________________________7____________________________________________________________*/ }
    <div class="product">
        <img src={produto36} alt="Acessório de caça 7"/>
        <h2>Lanterna Choque Taser Defesa Pessoal Portátil 928 Type Recarregavel</h2>
        <p>R$119,00</p>
        <Link to="/Produto">
            <button>Adicionar ao carrinho</button>
        </Link>
    </div>
{ /*____________________________________________8____________________________________________________________*/ }
    <div class="product">
        <img src={produto37} alt="Acessório de caça 8"/>
        <h2>Lanterna de Choque - Defesa Pessoal 800 TYPE</h2>
        <p>R$109,00</p>
        <Link to="/Produto">
            <button>Adicionar ao carrinho</button>
        </Link>
    </div>
{ /*____________________________________________9____________________________________________________________*/ }
    <div class="product">
        <img src={produto38} alt="Acessório de caça 8"/>
        <h2>FOREGRIP TÁTICO ROTATIVO BIPÉ T-POD-G2 - FABDEFENSE®</h2>
        <p>R$900,00</p>
        <Link to="/Produto">
            <button>Adicionar ao carrinho</button>
        </Link>
    </div>
{ /*____________________________________________10____________________________________________________________*/ }
    <div class="product">
        <img src={produto39} alt="Acessório de caça 8"/>
        <h2>Red Dot Frenzy-S 1x17x24 MIC - Vector Optics</h2>
        <p>R$2.081,70</p>
        <Link to="/Produto">
            <button>Adicionar ao carrinho</button>
        </Link>
    </div>
{ /*_____________________________________________11___________________________________________________________*/ }
    <div class="product">
        <img src={produto40} alt="Acessório de caça 8"/>
        <h2>Ferramenta multiuso tática Spor TAG em aço inox</h2>
        <p>R$62,90</p>
        <Link to="/Produto">
            <button>Adicionar ao carrinho</button>
        </Link>
    </div>
{ /*_____________________________________________12___________________________________________________________*/ }
    <div class="product">
        <img src={produto41} alt="Acessório de caça 8"/>
        <h2>Cinto Tático Bélica (Fivela em Polímero) - Preto</h2>
        <p>R$188,10</p>
        <Link to="/Produto">
            <button>Adicionar ao carrinho</button>
        </Link>
    </div>

    </section>
        </>
    )
}

export default Acessorios
