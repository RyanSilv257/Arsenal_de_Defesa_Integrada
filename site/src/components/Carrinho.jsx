import react from "react";
import "../styles/Carrinho.css";


function Carrinho () {
  return(
    <>
      <div class="body__Cart">
        <div class="lic-title sobre-title">
          <hr />
          <h1 class="">Carrinho</h1>
          <hr />
        </div>
        <div class="Section">
          <div class="Pbd1">
            <img class="Psell1" src="Produtos/pistola-stoeger-str9-9mm.jpg" alt=''/>
            <p>PISTOLA TAURUS stoeger str9 9mm</p>
            <p >R$8.089,90</p>
            <button class="Exclude">Excluir</button>
          </div>
          <div class="Pbd1">
          <img class="Psell1" src="Produtos/RIFLE .22 SEMIAUTOMÁTICO TACTICAL CORONHA TÁTICA EM POLIPROPILENO PRETA- CBC R$3.652,00.jpeg" alt=''/>
            <p>Rifle.22 Tactical Coronha Tática CBC</p>
            <p >R$3.652,00</p>
            <button class="Exclude">Excluir</button>
          </div>
          <div class="Pbd1">
            <img class="Psell1" src="../Produtos/Spray Para Defesa Pessoal Poly Defensor 50g.jpeg"alt=''/>
            <p>Spray Para Defesa Pessoal Poly Defensor 50g</p>
            <p >R$105,00</p>
            <button class="Exclude">Excluir</button>
          </div>
          
        </div>
        <div class="sct_fn">
        
          <h1>TOTAL: R$11846,90</h1>
         
          <button class="FC">Finalizar compra</button>
          
        </div>
      </div>

    </>
  )
}

export default Carrinho;