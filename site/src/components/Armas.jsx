import'../styles/geral.css';
import  produto1 from "../Produtos/PISTOLA TAURUS 838C CALIBRE .380ACP.jpeg"
import  produto2 from "../Produtos/PISTOLA STOEGER STR9 CAL 9MM.jpeg"
import  produto3 from "../Produtos/RIFLE .22 SEMIAUTOMÁTICO TACTICAL CORONHA TÁTICA EM POLIPROPILENO PRETA- CBC R$3.652,00.jpeg"
import  produto4 from "../Produtos/REVÓLVER RT 065 TAURUS CAL 357 MAG.jpeg"
import  produto5 from "../Produtos/RIFLE CBC PUMP ACTION GALERY CAL 22LR CORONHA DE MADEIRA.jpeg"
import  produto6 from "../Produtos/Canivete Tático Shark Green Militar Original Invictus R$118,90.jpeg"
import  produto7 from "../Produtos/CANIVETE TORO SOCO INGLÊS TÁTICO NAUTIKA R$ 147,00.jpeg"
import  produto8 from "../Produtos/Ferramenta multiuso tática Spor TAG em aço inox R$ 62,90.jpeg"
/*_____________________________________________________________________________________________________*/
function Armas(){
    return(
        <>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" type="text/css" href="geral.css"/>
    <title>Armas</title>
    <header>
    <div class='sub-div'>
        <div class='sub-title'>
            <h1 id='title1'>ARMAMENTO</h1>
            <hr />
        </div>
     </div>   
    </header>
    
    <section>
        <div class="product">
            <img src={produto1} alt="Acessório de caça 1"/>
            <h2>PISTOLA TAURUS 838C CALIBRE .380ACP</h2>
            <p>R$8.089,90</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________2____________________________________________________________*/ }
        <div class="product">
            <img src={produto2} alt="Acessório de caça 2"/>
            <h2>PISTOLA STOEGER STR9 CAL 9MM</h2>
            <p>R$8.559,00</p>
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
            <h2>REVÓLVER RT 065 TAURUS CAL 357 MAG</h2>
            <p>R$4590,00</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________5____________________________________________________________*/ }
    <div class="product">
        <img src={produto5} alt="Acessório de caça 5"/>
        <h2>RIFLE CBC PUMP ACTION GALLERY CAL 22LR CORONHA DE MADEIRA</h2>
        <p>R$5.849,90</p>
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

export default Armas