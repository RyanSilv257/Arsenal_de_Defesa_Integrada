import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contato(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');
    
    const handleContato = (e) => {
        e.preventDefault(); 

        fetch('http://localhost:3001/contato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                mensagem: mensagem,
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.message) {
                    alert(data.message);
                }
            })
            .catch(err => {
                console.error('Erro ao tentar enviar mensagem:', err);
                alert('Erro ao enviar mensagem. Por favor, tente novamente.');
            });
    };

    return (
        <>
            <div className="main-div">
                <div className="t-bar">
                    <p className="logo-txt1">ADI</p>
                    <img className="img-hd" src="/logo_header2.png" alt="Logo" />
                    <p className="logo-txt2">Arsenal de Defesa Integrada</p>
                </div>  
                <div className="txt1">
                    <h1 className="p">Contate-nos:</h1>    
                </div>  
                <form onSubmit={handleContato}>
                    <div className="div1">
                        <p className="category1">Nome:</p>
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
                    <div className="div2">
                        <p className="category">E-mail:</p>
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
                    <div className="div3">
                        <p className="category">Mensagem:</p>
                        <textarea className="mensagem-inp"
                            value={mensagem}
                            name="mensagem"
                            onChange={(e) => setMensagem(e.target.value)}
                            placeholder="Mensagem"
                            required
                            autoComplete="none"        
                        />
                    </div>
                    <div className="cnt">
                        <div className="btn-s">
                            <Link to="/">
                                <button className="form_button1">Voltar ao ínicio</button>
                            </Link>
                        </div>
                        <div className="btn-l">
                            <button type="submit" className="form_button2">Confirmar</button>
                        </div>
                    </div>
                </form>
                <div className="href">
                    <Link to="/Login">
                        <p className="ent">Entrar</p>
                    </Link>
                </div>
                <div className="hr">
                    <hr />
                </div>
                <div className="low-b4r">
                    <p>CNPJ: 27.779.008/0001-54.</p>
                    <p>TEL: (32) 96025-3648.</p>
                    <p>ADI (Arsenal de Defesa Integrada )<br/>  ADIarsenal.com.br, Inc. ou suas  © 2024.</p>
                </div>
                <div className="low-b4r2">
                    <p className ="content-txt3">Rua Acutirembiú,Jardim São Sebastião,<br/> São Paulo, SP,<br/> CEP: 08041-090.</p>
                    <img className="content-img2" src="/18.png" alt="Proíbido para menores de 18 anos." />
                </div>
                <div className="low-b4r3">
                    <p className ="content-txt4">Formas de pagamento aceitas: cartões de crédito 
                    (Visa, MasterCard, Elo e American Express), cartões de débito (Visa e Elo), Boleto e Pix.</p>
                </div>
            </div>
        </>
    );
}

export default Contato;
