
import'../styles/geral.css';
import  produto22 from "../Lanternas/solaris.jpg"
import  produto23 from "../Lanternas/blitz.jpg"
import  produto24 from "../Lanternas/corvus.jpg"
import  produto25 from "../Lanternas/scott.jpg"
import  produto26 from "../Lanternas/storm.jpg"
import  produto27 from "../Lanternas/sigma.jpg"
import  produto28 from "../Lanternas/sirius.jpg"
import  produto29 from "../Lanternas/Lanterna de Cabeça Multifuncional Invictus Atlas 600 Lúmens.jpg"

/*---------------------------------------------------------------------------------------*/
function Lanternas(){
    return(
        <>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="stylesheet" type="text/css" href="geral.css"/>
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
            <img src={produto22} alt="Acessório de caça 1"/>
            <h2>Lanterna Tática Solaris 2000 Lúmens</h2>
            <p>R$409,00</p>
            <button>Adicionar ao carrinho</button>
        </div>

        <div class="product">
            <img src={produto23} alt="Acessório de caça 2"/>
            <h2>Lanterna Blitz PRO 550 Lúmens</h2>
            <p>R$ 499,00</p>
            <button>Adicionar ao carrinho</button>
        </div>

        <div class="product">
            <img src={produto24} alt="Acessório de caça 3"/>
            <h2>Lanterna Corvus U2 300 Lúmens</h2>
            <p>Preço: R$ 205,00</p>
            <button>Adicionar ao carrinho</button>
        </div>

        <div class="product">
            <img src={produto25} alt="Acessório de caça 4"/>
            <h2>Lanterna Scott T6 280 Lúmens</h2>
            <p>Preço: R$229,00</p>
            <button>Adicionar ao carrinho</button>
        </div>

    <div class="product">
        <img src={produto26} alt="Acessório de caça 4"/>
        <h2>Lanterna Storm T6 280 Lúmens</h2>
        <p>Preço: R$165,00</p>
        <button>Adicionar ao carrinho</button>
    </div>

<div class="product">
    <img src={produto27} alt="Acessório de caça 4"/>
    <h2>Lanterna Tática Sigma 1000 Lúmens</h2>
    <p>Preço: R$255,00</p>
    <button>Adicionar ao carrinho</button>
</div>

<div class="product">
    <img src={produto28} alt="Acessório de caça 4"/>
    <h2>Lanterna Tática Sirius 800 Lúmens</h2>
    <p>Preço: R$309,99</p>
    <button>Adicionar ao carrinho</button>
</div>

<div class="product">
    <img src={produto29} alt="Acessório de caça 4"/>
    <h2>Lanterna de Cabeça Multifuncional Invictus Atlas 600 Lúmens</h2>
    <p>Preço: R$289,00</p>
    <button>Adicionar ao carrinho</button>
</div>

    </section>
        </>
    )
}

export default Lanternas
