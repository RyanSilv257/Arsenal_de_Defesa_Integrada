import React, { useState } from "react";
import "../styles/registro.css";
import { Link } from "react-router-dom";

function Registro(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleRegistro = (e) => {
        e.preventDefault(); // Evitar o comportamento padrão de envio do formulário

        fetch('http://localhost:3001/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);
                }
            })
            .catch(err => {
                console.error('Erro ao tentar fazer o registro:', err);
                alert('Erro ao tentar fazer o registro. Por favor, tente novamente.');
            });
    };


    return (
        <>
        <div class="main-div">
            <div class="t-bar">
                <p class="logo-txt1" >ADI</p>
                <img class="img-hd" src="/logo_header2.png"/>
                <p class="logo-txt2">Arsenal de Defesa Integrada</p>
            </div>  
            <div class="txt1">
                <h1 class="p">Registre-se:</h1>    
            </div>  
   
            <form onSubmit={handleRegistro}>
                    <div class="div1">

                    <p class="category1">Nome:</p>
                    <input className="name-inp"
                        type="text"
                        value={nome}
                        name="nome"
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome"
                        required
                        autoComplete="none"        
                />
                </div>
                <div class="div2">
                <p class="category">E-mail:</p>
                <input className="email-inp"
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    autoComplete="none"        
                />
                </div>
                <div class="div3">
                <p class="category">Senha:</p>
                <input className="senha-inp"
                    type="password"
                    value={senha}
                    name="senha"
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Senha"
                    required
                    autoComplete="none"        
                />
                </div>
                <div class="cnt">
                    <div class="btn-s">
                        <Link to="/">
                        <button className="form_button1">Voltar ao ínicio</button>
                        </Link>
                    </div>
                    <div class="btn-l">
                        <button type="submit" className="form_button2">Confirmar</button>
                    </div>
                </div>
                <div class="txt2">
                    <p>Já tem uma conta?</p>
                </div>
                <div class="href">
                    <Link to="/Login">
                        <a class="ent">Entrar</a>
                    </Link>
                </div>
               
                <div class="hr">
                <hr />
                </div>

                <div class="low-b4r">
                <p>CNPJ: 27.779.008/0001-54.</p>
                <p>TEL: (32) 96025-3648.</p>
                <p>ADI (Arsenal de Defesa Integrada )<br/>  ADIarsenal.com.br, Inc. ou suas  © 2024.</p>
            </div>
            <div class="low-b4r2">
                <p class ="content-txt3">Rua Acutirembiú,Jardim São Sebastião,<br/> São Paulo, SP,<br/> CEP: 08041-090.</p>
                <img class="content-img2" src="/18.png" alt="Proíbido para menores de 18 anos." />
            </div>
            <div class="low-b4r3">
                <p class ="content-txt3">Formas de pagamento aceitas: cartões de crédito 
                (Visa, MasterCard, Elo e American Express), cartões de débito (Visa e Elo), Boleto e Pix.</p>
            </div>
                
            </form>
        </div>
        </>
    )


}

export default Registro;