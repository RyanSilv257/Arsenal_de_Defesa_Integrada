import React, { useState } from "react";
import "../styles/registro.css";
import { Link } from "react-router-dom";

function Registro(){

    const [showInput, setShowInput] = useState(false);
  
    const handleCheckboxChange = (e) => {
      setShowInput(e.target.checked);
    };
  

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [porte, setPorte] = useState('');
    const [porteDate, setPorteDate] = useState('');
    
    const handleBirthdateChange = (event) => {
        let formattedBirthdate = event.target.value
            .replace(/\D/g, '') 
            .replace(/(\d{2})(\d)/, '$1/$2') 
            .replace(/(\d{2})(\d)/, '$1/$2'); 
    

        const [day, month, year] = formattedBirthdate.split('/').map(Number);
    

        const maxDay = 31;
        const maxMonth = 12;
        const maxYear = 2023;
    
        if (day > maxDay || month > maxMonth || year > maxYear) {
            alert('Data de nascimento inválida');
            return;
        }

    
        setDataNasc(formattedBirthdate);
    };

    const handlePorteDateChange = (event) => {
        let formattedPorteDate = event.target.value
            .replace(/\D/g, '') 
            .replace(/(\d{2})(\d)/, '$1/$2') 
            .replace(/(\d{2})(\d)/, '$1/$2'); 
    

        const [day, month] = formattedPorteDate.split('/').map(Number);
    

        const maxDay = 31;
        const maxMonth = 12;
    
        if (day > maxDay || month > maxMonth) {
            alert('Data de validade do porte inválida');
            return;
        }

    
        setPorteDate(formattedPorteDate);
    };

    const handleRegistro = (e) => {
        e.preventDefault(); 

        

        fetch('http://localhost:3001/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                senha: senha,
                dataNasc: dataNasc,
                porte: porte,
                porteDate: porteDate
            }),
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {
                if (data.message === "Usuário cadastrado com sucesso!") {
                    alert(data.message);
                    window.location.href = "http://localhost:3000/Login";
                }
            })
            .catch(err => {
                console.error('Erro ao tentar fazer o registro:', err);
                alert('Erro ao tentar fazer o registro. Por favor, tente novamente.');
            });

    }


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

                    <p class="category1">Nome:*</p>
                    <input className="name-inp"
                        type="text"
                        value={nome}
                        name="nome"
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Nome (obrigatório)"
                        required
                        autoComplete="none"        
                />
                </div>
                <div class="div1">
                <p class="category">E-mail:*</p>
                <input className="email-inp"
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email (obrigatório)"
                    required
                    autoComplete="none"        
                />
                </div>
                <div class="div1">
                <p class="category">Senha:*</p>
                <input className="senha-inp"
                    type="password"
                    value={senha}
                    name="senha"
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder="Senha (obrigatório)"
                    required
                    autoComplete="none"        
                />
                </div>
                <div class="div1">
                <p class="category">Data de nascimento:*</p>
                <input className="senha-inp"
                    value={dataNasc}
                    name="date"
                    onChange={handleBirthdateChange}
                    placeholder="Data de nascimento (obrigatório)"
                    maxLength="10"
                    required
                    autoComplete="none"        
                />
                </div>

                <div class="div3">
                <input
                type="checkbox"
                onChange={handleCheckboxChange}
                id="registro-check"
                />
                <label for="registro-check">Possui registro de porte de armas?</label>
                </div>
                {showInput && (

                <div id="porte" class="div1">
                <p class="category">Nº do registro do porte:*</p>
                <input className="senha-inp"
                    value={porte}
                    name="porte"
                    max="9999999999"
                    onChange={(e) => {
                        const maxLength = 10; // Maximum length allowed
                        let value = e.target.value;
                        if (value.length > maxLength) {
                          value = value.slice(0, maxLength); // Truncate the value if it exceeds maxLength
                        }
                        setPorte(value)
                    }}
                    type="number"
                    placeholder="Nº do registro"
                    required
                    autoComplete="none"        
                />

                <p class="category">Validade do Porte:*</p>
                <input className="senha-inp"
                    value={porteDate}
                    name="porteDate"
                    onChange={handlePorteDateChange}
                    placeholder="Data da validade"
                    maxLength="10"
                    required
                    autoComplete="none"        
                />
                </div>  
                
                )}

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
                <p class ="content-txt4">Formas de pagamento aceitas: cartões de crédito 
                (Visa, MasterCard, Elo e American Express), cartões de débito (Visa e Elo), Boleto e Pix.</p>
            </div>
                
            </form>
        </div>
        </>
    )
};

export default Registro;