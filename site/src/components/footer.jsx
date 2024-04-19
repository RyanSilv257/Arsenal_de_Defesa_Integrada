import '../styles/footer.css'

function Footer(){
    return (
        <>
        <footer>
            <div class="top-bar">
                <p class="content-txt1" >ADI</p>
                <img class="content-img" src="/logo_header2.png"/>
                <p class="content-txt2">Arsenal de Defesa Integrada</p>
            </div>
            <div class="low-bar">
                <p>CNPJ: 27.779.008/0001-54.</p>
                <p>TEL: (32) 96025-3648.</p>
                <p>ADI (Arsenal de Defesa Integrada )<br/>  ADIarsenal.com.br, Inc. ou suas  © 2024.</p>
            </div>
            <div class="low-bar2">
                <p class ="content-txt3">Rua Acutirembiú,Jardim São Sebastião,<br/> São Paulo, SP,<br/> CEP: 08041-090.</p>
                <img class="content-img2" src="/18.png" alt="Proíbido para menores de 18 anos." />
            </div>
            <div class="low-bar3">
                <p class ="content-txt3">Formas de pagamento aceitas: cartões de crédito 
                (Visa, MasterCard, Elo e American Express), cartões de débito (Visa e Elo), Boleto e Pix.</p>
            </div>
        </footer> 
        </>
    )
}

export default Footer;