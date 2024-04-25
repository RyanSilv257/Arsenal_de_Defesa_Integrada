import'../styles/geral.css';
import  produto1 from "../Produtos/CALÇA CARGO VERDE MILITAR.jpeg"
import  produto2 from "../Produtos/CALÇA TÁTICA MASCULINA COYOTE.jpeg"
import  produto3 from "../Produtos/COMBAT SHIRT WOODLAND ALPHA BRAVO.jpeg"
import  produto4 from "../Produtos/Jaqueta Militar m65.jpeg"
import  produto5 from "../Produtos/CALÇA TÁTICA MASCULINA WOODLAND.jpeg"
import  produto6 from "../Produtos/Jaqueta Jeans Militar Masculina Com Zíper, Jaqueta Bomber R$ 193.jpg"
import  produto7 from "../Produtos/Jaqueta Tática Raptor Tan - Evo Tactical Militar Camping R$ 376.jpg"
import  produto8 from "../Produtos/Gandola Assault Jaqueta Militar Mult. Black R$ 179.jpg"
import  produto9 from "../Produtos/Luva Tática Oficial Militar Em Couro Legítimo R$ 79.jpg"
import  produto10 from "../Produtos/Luva Bunker Invictus - Tática Militar Profissional.JPG R$ 266.jpg"
import  produto11 from "../Produtos/Luvas Tatica Militar Airsoft Paintball Meio Dedo Microfibra R$64.jpg"
import  produto12 from "../Produtos/Calça Masculina Tática Militares À Prova Dágua R$ 137.jpg"

/*_____________________________________________________________________________________________________*/
function Vestuario(){
    return(
        <>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" type="text/css" href="geral.css"/>
    <title>Vestuário</title>
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
            <h2>Jaqueta Militar m65</h2>
            <p>R$318,00</p>
            <button>Adicionar ao carrinho</button>
        </div>
{ /*____________________________________________5____________________________________________________________*/ }
    <div class="product">
        <img src={produto5} alt="Acessório de caça 5"/>
        <h2>CALÇA TÁTICA MASCULINA WOODLAND</h2>
        <p>R$199,90</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*____________________________________________6____________________________________________________________*/ }
    <div class="product">
        <img src={produto6} alt="Acessório de caça 6"/>
        <h2>Jaqueta Jeans Militar Masculina Com Zíper, Jaqueta Bomber</h2>
        <p>R$193,00</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*____________________________________________7____________________________________________________________*/ }
    <div class="product">
        <img src={produto7} alt="Acessório de caça 7"/>
        <h2>Jaqueta Tática Raptor Tan - Evo Tactical Militar Camping</h2>
        <p>R$376,00</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________8___________________________________________________________*/ }
    <div class="product">
        <img src={produto8} alt="Acessório de caça 8"/>
        <h2>Gandola Assault Jaqueta Militar Mult. Black</h2>
        <p>R$179,00</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________9___________________________________________________________*/ }
    <div class="product">
        <img src={produto9} alt="Acessório de caça 9"/>
        <h2>Luva Tática Oficial Militar Em Couro Legítimo</h2>
        <p>R$79,90</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________10___________________________________________________________*/ }
    <div class="product">
        <img src={produto10} alt="Acessório de caça 10"/>
        <h2>Luva Bunker Invictus - Tática Militar Profissional</h2>
        <p>R$266,00</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________11___________________________________________________________*/ }
    <div class="product">
        <img src={produto11} alt="Acessório de caça 11"/>
        <h2>Luvas Tatica Militar Airsoft Paintball Meio Dedo Microfibra</h2>
        <p>R$64,90</p>
        <button>Adicionar ao carrinho</button>
    </div>
{ /*_____________________________________________12___________________________________________________________*/ }
    <div class="product">
        <img src={produto12} alt="Acessório de caça 12"/>
        <h2>Calça Masculina Tática Militares À Prova Dágua</h2>
        <p>R$137,90</p>
        <button>Adicionar ao carrinho</button>
    </div>
    </section>
        </>
    )
}

export default Vestuario
