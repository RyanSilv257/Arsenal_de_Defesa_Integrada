
import'../styles/lanternas.css';
import  produto1 from "../Lanternas/solaris.jpg"
import  produto2 from "../Lanternas/blitz.jpg"
import  produto3 from "../Lanternas/corvus.jpg"
import  produto4 from "../Lanternas/scott.jpg"
import  produto5 from "../Lanternas/storm.jpg"
import  produto6 from "../Lanternas/sigma.jpg"
import  produto7 from "../Lanternas/sirius.jpg"
import  produto8 from "../Lanternas/Lanterna de Cabeça Multifuncional Invictus Atlas 600 Lúmens.jpg"

/*---------------------------------------------------------------------------------------*/
function Lanternas(){
    return(
        <>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" type="text/css" href="lanternas.css"/>
    <title>Lanternas</title>
    <header>
    <div class='sub-div'>
        <div class='sub-title'>
            <h1 id='title1'>LANTERNAS</h1>
            <hr />
        </div>
     </div>   
    </header>
    <section>
        <div class="product">
            <img src={produto1} alt="Acessório de caça 1"/>
            <h2>Lanterna Tática Solaris 2000 Lúmens</h2>
            <p>R$409,00</p>
            <button>Adicionar ao carrinho</button>
        </div>

        <div class="product">
            <img src={produto2} alt="Acessório de caça 2"/>
            <h2>Lanterna Blitz PRO 550 Lúmens</h2>
            <p>R$ 499,00</p>
            <button>Adicionar ao carrinho</button>
        </div>

        <div class="product">
            <img src={produto3} alt="Acessório de caça 3"/>
            <h2>Lanterna Corvus U2 300 Lúmens</h2>
            <p>Preço: R$ 205,00</p>
            <button>Adicionar ao carrinho</button>
        </div>

        <div class="product">
            <img src={produto4} alt="Acessório de caça 4"/>
            <h2>Lanterna Scott T6 280 Lúmens</h2>
            <p>Preço: R$229,00</p>
            <button>Adicionar ao carrinho</button>
        </div>

    <div class="product">
        <img src={produto5} alt="Acessório de caça 4"/>
        <h2>Lanterna Storm T6 280 Lúmens</h2>
        <p>Preço: R$165,00</p>
        <button>Adicionar ao carrinho</button>
    </div>

<div class="product">
    <img src={produto6} alt="Acessório de caça 4"/>
    <h2>Lanterna Tática Sigma 1000 Lúmens</h2>
    <p>Preço: R$255,00</p>
    <button>Adicionar ao carrinho</button>
</div>

<div class="product">
    <img src={produto7} alt="Acessório de caça 4"/>
    <h2>Lanterna Tática Sirius 800 Lúmens</h2>
    <p>Preço: R$309,99</p>
    <button>Adicionar ao carrinho</button>
</div>

<div class="product">
    <img src={produto8} alt="Acessório de caça 4"/>
    <h2>Lanterna de Cabeça Multifuncional Invictus Atlas 600 Lúmens</h2>
    <p>Preço: R$289,00</p>
    <button>Adicionar ao carrinho</button>
</div>

    </section>
        </>
    )
}

export default Lanternas
