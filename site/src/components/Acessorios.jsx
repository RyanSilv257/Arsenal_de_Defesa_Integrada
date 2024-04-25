import'../styles/acessorios.css';
import  produto1 from "../Produtos/Colete Tático Modular Presilhas WWART AERO Preto R$ 389,00.jpeg"
import  produto2 from "../Produtos/Paracord Planet Certificado de Paracord Tipo III Mil-C-5040 R$109,99.jpeg"
import  produto3 from "../Produtos/Spray Para Defesa Pessoal Poly Defensor 50g.jpeg"
import  produto4 from "../Produtos/ACAGALA Bússola multifuncional de sobrevivência R$159,00.jpeg"
import  produto5 from "../Produtos/8252710 PORTA PENTE CARREGADOR DUPLO FOBUS TAURUS .380, .40 E 9MM R$ 139,99.jpeg"
import  produto6 from "../Produtos/ÓCULOS SOLAR TÁTICO FOCUS - COYOTE R$ 229,00.jpeg"
import  produto7 from "../Produtos/Lanterna Choque Taser Defesa Pessoal Portátil 928 Type Recarregavel.jpeg"
import  produto8 from "../Produtos/Lanterna de Choque - Defesa Pessoal 800 TYPE.jpeg"
import  produto9 from "../Produtos/FOREGRIP TÁTICO ROTATIVO BIPÉ T-POD-G2 - FABDEFENSE® R$ 900,00.jpeg"
import  produto10 from "../Produtos/Red Dot Frenzy-S 1x17x24 MIC - Vector Optics.jpeg"
import  produto11 from "../Produtos/Ferramenta multiuso tática Spor TAG em aço inox R$ 62,90.jpeg"
import  produto12 from "../Produtos/Cinto Tático Bélica (Fivela em Polímero) - Preto R$ 188,10.jpeg"
/*_____________________________________________________________________________________________________*/
function Acessorios(){
    return(
        <>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" type="text/css" href="acessorios.css"/>
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
            <img src={produto1} alt="Acessório de caça 1"/>
            <h2>Colete Tático Modular Presilhas WWART AERO Preto</h2>
            <p>R$389,00</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________2____________________________________________________________*/ }
        <div class="product">
            <img src={produto2} alt="Acessório de caça 2"/>
            <h2>Paracord Planet Certificado de Paracord Tipo III Mil-C-5040</h2>
            <p>R$109,99</p>
            <button>Adicionar ao carrinho</button>
        </div>
 { /*___________________________________________3_____________________________________________________________*/ }
        <div class="product">
            <img src={produto3} alt="Acessório de caça 3"/>
            <h2>Spray Para Defesa Pessoal Poly Defensor 50g</h2>
            <p>R$105,00</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________4____________________________________________________________*/ }
        <div class="product">
            <img src={produto4} alt="Acessório de caça 4"/>
            <h2>ACAGALA Bússola multifuncional de sobrevivência</h2>
            <p>R$159,00</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________5____________________________________________________________*/ }
    <div class="product">
        <img src={produto5} alt="Acessório de caça 5"/>
        <h2>8252710 PORTA PENTE CARREGADOR DUPLO FOBUS TAURUS .380, .40 E 9MM</h2>
        <p>R$139,99</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*____________________________________________6____________________________________________________________*/ }
    <div class="product">
        <img src={produto6} alt="Acessório de caça 6"/>
        <h2>ÓCULOS SOLAR TÁTICO FOCUS - COYOTE</h2>
        <p>R$229,00</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*____________________________________________7____________________________________________________________*/ }
    <div class="product">
        <img src={produto7} alt="Acessório de caça 7"/>
        <h2>Lanterna Choque Taser Defesa Pessoal Portátil 928 Type Recarregavel</h2>
        <p>R$119,00</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*____________________________________________8____________________________________________________________*/ }
    <div class="product">
        <img src={produto8} alt="Acessório de caça 8"/>
        <h2>Lanterna de Choque - Defesa Pessoal 800 TYPE</h2>
        <p>R$109,00</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*____________________________________________9____________________________________________________________*/ }
    <div class="product">
        <img src={produto9} alt="Acessório de caça 8"/>
        <h2>FOREGRIP TÁTICO ROTATIVO BIPÉ T-POD-G2 - FABDEFENSE®</h2>
        <p>R$900,00</p>
         <button>Adicionar ao carrinho</button>
    </div>
{ /*____________________________________________10____________________________________________________________*/ }
    <div class="product">
        <img src={produto10} alt="Acessório de caça 8"/>
        <h2>Red Dot Frenzy-S 1x17x24 MIC - Vector Optics</h2>
        <p>R$2.081,70</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________11___________________________________________________________*/ }
    <div class="product">
        <img src={produto11} alt="Acessório de caça 8"/>
        <h2>Ferramenta multiuso tática Spor TAG em aço inox</h2>
        <p>R$62,90</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________12___________________________________________________________*/ }
    <div class="product">
        <img src={produto12} alt="Acessório de caça 8"/>
        <h2>Cinto Tático Bélica (Fivela em Polímero) - Preto</h2>
        <p>R$188,10</p>
        <button>Adicionar ao carrinho</button>
    </div>

    </section>
        </>
    )
}

export default Acessorios
