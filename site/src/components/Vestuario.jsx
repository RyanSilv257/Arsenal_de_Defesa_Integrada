import'../styles/acessorios.css';
import  produto1 from "../Produtos/CALÇA CARGO VERDE MILITAR.jpeg"
import  produto2 from "../Produtos/CALÇA TÁTICA MASCULINA COYOTE.jpeg"
import  produto3 from "../Produtos/COMBAT SHIRT WOODLAND ALPHA BRAVO.jpeg"
import  produto4 from "../Produtos/CANIVETE TÁTICO MILITAR LANTERNA PEDERNEIRA BORLOV NAUTIKA AÇO INOX SOBREVIVENCIA R$ 88,26.jpeg"
import  produto5 from "../Produtos/CANIVETE TÁTICO MILITAR SEMI AUTOMÁTICO XD-13 R$ 167,87.jpeg"
import  produto6 from "../Produtos/Canivete Tático Shark Green Militar Original Invictus R$118,90.jpeg"
import  produto7 from "../Produtos/CANIVETE TORO SOCO INGLÊS TÁTICO NAUTIKA R$ 147,00.jpeg"
import  produto8 from "../Produtos/Ferramenta multiuso tática Spor TAG em aço inox R$ 62,90.jpeg"
/*_____________________________________________________________________________________________________*/
function Vestuario(){
    return(
        <>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" type="text/css" href="acessorios.css"/>
    <title>Lanternas</title>
    <header>
    <div class='sub-div'>
        <div class='sub-title'>
            <h1 id='title1'>VESTUÁRIO</h1>
            <hr />
        </div>
     </div>   
    </header>
    
    <section>
        <div class="product">
            <img src={produto1} alt="Acessório de caça 1"/>
            <h2>CALÇA CARGO VERDE MILITAR</h2>
            <p>R$199,90</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________2____________________________________________________________*/ }
        <div class="product">
            <img src={produto2} alt="Acessório de caça 2"/>
            <h2>CALÇA TÁTICA MASCULINA COYOTE</h2>
            <p>R$199,90</p>
            <button>Adicionar ao carrinho</button>
        </div>
 { /*___________________________________________3_____________________________________________________________*/ }
        <div class="product">
            <img src={produto3} alt="Acessório de caça 3"/>
            <h2>COMBAT SHIRT WOODLAND ALPHA BRAVO</h2>
            <p>R$149,00</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________4____________________________________________________________*/ }
        <div class="product">
            <img src={produto4} alt="Acessório de caça 4"/>
            <h2>CANIVETE TÁTICO MILITAR LANTERNA PEDERNEIRA BORLOV NAUTIKA AÇO INOX SOBREVIVENCIA</h2>
            <p>R$88,26</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________5____________________________________________________________*/ }
    <div class="product">
        <img src={produto5} alt="Acessório de caça 5"/>
        <h2>CANIVETE TÁTICO MILITAR SEMI AUTOMÁTICO XD-13</h2>
        <p>R$167,87</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*____________________________________________6____________________________________________________________*/ }
    <div class="product">
        <img src={produto6} alt="Acessório de caça 6"/>
        <h2>Canivete Tático Shark Green Militar Original Invictus R$118,90</h2>
        <p>R$118,90</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*____________________________________________7____________________________________________________________*/ }
    <div class="product">
        <img src={produto7} alt="Acessório de caça 7"/>
        <h2>CANIVETE TORO SOCO INGLÊS TÁTICO NAUTIKA R$ 147,00.jpeg</h2>
        <p>R$147,00</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________8___________________________________________________________*/ }
    <div class="product">
        <img src={produto8} alt="Acessório de caça 8"/>
        <h2>Ferramenta multiuso tática Spor TAG em aço inox</h2>
        <p>R$62,90</p>
        <button>Adicionar ao carrinho</button>
    </div>
    </section>
        </>
    )
}

export default Vestuario
