import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login(){

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleLogin = (e) => {
        e.preventDefault(); // Evitar o comportamento padrão de envio do formulário

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
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
                console.error('Erro ao tentar fazer login:', err);
                alert('Erro ao tentar fazer login. Por favor, tente novamente.');
            });
    };

    return(
        <>

        <div class="main-div">
            <div class="t-bar">
                <p class="logo-txt1" >ADI</p>
                <img class="img-hd" src="/logo_header2.png"/>
                <p class="logo-txt2">Arsenal de Defesa Integrada</p>
            </div>  
            <div class="txt1">
                <h1 class="p">Entrar:</h1>    
            </div>


            <form onSubmit={handleLogin}
            >
                <div class="div1">
                <p class="category1">Email:</p>
            <input className="email-inp"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            </div>
                <div class="div3">
                <p class="category">Senha:</p>
            <input className="senha-inp"
            type="password"
            name="senha"
            placeholder="Senha"
            required
            value={senha} 
            onChange={(e) => setSenha(e.target.value)}
            />
            </div>
            <div class="cnt">
            <div class="btn-s">
                        <Link to="/">
                        <button className="form_button1">Voltar ao ínicio</button>
                        </Link>
            </div>
            <div class="btn-1">
            <button className="form_button2" type="submit">
            Log in
            </button>
            </div>
            </div>
            <div class="txt2">
                    <p>Não tem uma conta?</p>
                </div>
                <div class="href">
                    <Link to="/registro">
                        <a class="ent">Registre-se</a>
                    </Link>
                </div>
            </form>
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
        </div>

        </>
    )
}

export default Login;