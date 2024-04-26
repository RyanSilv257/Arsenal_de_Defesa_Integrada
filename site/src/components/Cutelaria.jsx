import'../styles/geral.css';
import  produto13 from "../Produtos/Machado Tático.jpeg"
import  produto14 from "../Produtos/Canivete suiço tatico multifuncional.jpeg"
import  produto15 from "../Produtos/Canivete Tático Militar Camuflado R$ 149,00.jpeg"
import  produto16 from "../Produtos/CANIVETE TÁTICO MILITAR LANTERNA PEDERNEIRA BORLOV NAUTIKA AÇO INOX SOBREVIVENCIA R$ 88,26.jpeg"
import  produto17 from "../Produtos/CANIVETE TÁTICO MILITAR SEMI AUTOMÁTICO XD-13 R$ 167,87.jpeg"
import  produto18 from "../Produtos/Canivete Tático Shark Green Militar Original Invictus R$118,90.jpeg"
import  produto19 from "../Produtos/CANIVETE TORO SOCO INGLÊS TÁTICO NAUTIKA R$ 147,00.jpeg"
import  produto20 from "../Produtos/Ferramenta multiuso tática Spor TAG em aço inox R$ 62,90.jpeg"
import  produto21 from "../Produtos/Faca Armada NTK Tático Empunhadura Soco-inglês Militar Caça R$ 208,90.jpeg"

/*_____________________________________________________________________________________________________*/
function Cutelaria(){
    return(
        <>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" type="text/css" href="geral.css"/>
    <title>Cutelaria</title>
    <header>
    <div class='sub-div'>
        <div class='sub-title'>
            <h1 id='title1'>CUTELARIA</h1>
            <hr />
        </div>
     </div>   
    </header>
    
    <section>
        <div class="product">
            <img src={produto13} alt="Acessório de caça 1"/>
            <h2>Machado Tático</h2>
            <p>R$197,00</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________2____________________________________________________________*/ }
        <div class="product">
            <img src={produto14} alt="Acessório de caça 2"/>
            <h2>Canivete suiço tatico multifuncional</h2>
            <p>$179,90</p>
            <button>Adicionar ao carrinho</button>
        </div>
 { /*___________________________________________3_____________________________________________________________*/ }
        <div class="product">
            <img src={produto15} alt="Acessório de caça 3"/>
            <h2>Canivete Tático Militar Camuflado</h2>
            <p>R$149,00</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________4____________________________________________________________*/ }
        <div class="product">
            <img src={produto16} alt="Acessório de caça 4"/>
            <h2>CANIVETE TÁTICO MILITAR LANTERNA PEDERNEIRA BORLOV NAUTIKA AÇO INOX SOBREVIVENCIA</h2>
            <p>R$88,26</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________5____________________________________________________________*/ }
    <div class="product">
        <img src={produto17} alt="Acessório de caça 5"/>
        <h2>CANIVETE TÁTICO MILITAR SEMI AUTOMÁTICO XD-13</h2>
        <p>R$167,87</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*____________________________________________6____________________________________________________________*/ }
    <div class="product">
        <img src={produto18} alt="Acessório de caça 6"/>
        <h2>Canivete Tático Shark Green Militar Original Invictus R$118,90</h2>
        <p>R$118,90</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*____________________________________________7____________________________________________________________*/ }
    <div class="product">
        <img src={produto19} alt="Acessório de caça 7"/>
        <h2>CANIVETE TORO SOCO INGLÊS TÁTICO NAUTIKA R$ 147,00.jpeg</h2>
        <p>R$147,00</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________8___________________________________________________________*/ }
    <div class="product">
        <img src={produto20} alt="Acessório de caça 8"/>
        <h2>Ferramenta multiuso tática Spor TAG em aço inox</h2>
        <p>R$62,90</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________9___________________________________________________________*/ }
    <div class="product">
        <img src={produto21} alt="Acessório de caça 8"/>
        <h2>Faca Armada NTK Tático Empunhadura Soco-inglês Militar Caça</h2>
        <p>R$208,90</p>
        <button>Adicionar ao carrinho</button>
    </div>
    </section>
        </>
    )
}

export default Cutelaria