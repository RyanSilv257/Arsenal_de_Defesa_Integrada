import '../styles/produto.css'
import React, { useState } from 'react';
import StarRating from './StarRating';
import Modal from './Modal';



    function Produto4 (){
        const [isModalOpen, setIsModalOpen] = useState(false);

        const toggleModal = () => {
            setIsModalOpen(!isModalOpen);
        };
    
        return (
            <>
        <div class="content-bd">
        <hr/>
        <h1>Produtos</h1>
        <hr/>
        </div>
        <div class="pdt-maindiv">
            <div class="pdt-1">
                <img class="pdt-img" src="Produtos/RIFLE .22 SEMIAUTOMÁTICO TACTICAL CORONHA TÁTICA EM POLIPROPILENO PRETA- CBC R$3.652,00.jpeg" alt="" />
                <h1 class="pdt-price">R$3.652,00</h1>
                <p class ="pdt-sub">ou em até 10 vezes sem juros</p>
            </div>
            <div class="pdt-2">
                <h1 class="pdt-name">RIFLE .22 SEMIAUTOMÁTICO TACTICAL CORONHA TÁTICA EM POLIPROPILENO PRETA- CBC</h1>
                <button class ="buy">Comprar</button>
            </div>
        </div>
        <div class="content-dcp">
            <div class="content-description">
                <h1 class="dcpt">Descrição do produto:</h1>
                <p class="dect">Esta 9mm disparada por Striker vem <br />com recursos que você esperaria de uma pistola<br />
                que custa o dobro. <br />Seu trilho integrado, segurança interna, <br />
                liberação de magazine reversível, <br />
                serrilhados deslizantes otimizados, <br />
                sistema de visão de três pontos e ergonomia <br />
                aprimorada fornecem desempenho e conforto consistentes.</p>
                <br />
                <br />
                A renomada pistola Stoeger STR9, <br />
                calibre 9mm, <br />
                é reconhecida por sua excelência em qualidade e confiabilidade. <br />
                Seu design ergonômico proporciona conforto durante o manuseio, <br />
                enquanto os controles ambidestros garantem <br />
                acessibilidade para usuários destros e canhotos. <p />
                
            </div>
            <div class="content-ft">
                <h1>Ficha Técnica:</h1>
                <p>Comprimento total da arma: 189mm. <br />

                    <br />
                    Quantidade de canos: 1.  <br />
                    <br />
                    Peso: 750g. <br />
                    <br />
                    Capacidade do carregador: 15.</p>
                    <h2>Deixe sua avalição:</h2>
                    <div class="stars">
                        <StarRating />
                    </div>
                    <textarea class="" id="" cols="30" rows="5" placeholder='Deixe sua opinão:'></textarea>
                    <button className="btnOpenModal" onClick={toggleModal}>Enviar</button>
                    
                    
            </div>
        </div>
        </>
        )
            }
        

export default Produto4;