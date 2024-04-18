import React, { useState, useEffect } from "react";
import{ useNavigate } from "react-router-dom";
import "../styles/registro.css";
import { Link } from "react-router-dom";

function Registro(){

    const [result, setResult] = useState ([]);
    const [dataToInsert, setDataToInsert] = useState({
    nome: "",
    email: "",
    senha: ""
    });
    const [redirected, setRedirected ] = useState(false);
    
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:3000")
            .then((res) => res.json())
            .then((data) => {
                setResult(data);
            
                // Procura o item com o mesmo ProductID que o pathname.
                const foundItem = data.find(
                (item) => window.location.pathname === `/modify/${item.id}`
                );
    
                if (foundItem) {
                setDataToInsert((prevState) => ({
                ...prevState,
                ...foundItem,
        }));
    } else {
            // Se não encontrar o item, redireciona para a página principal.
            if (!redirected) {
                setRedirected(true);
                navigate("/Registro");
             }
        }   
    })
    .catch((err) => { 
      console.error(err);
        });
    },[]);

    // Envia as informações para o backend quando o botão de enviar é clicado.
    const handleSubmit = (e) => {
        const foundItem = result.find(
    (item) => window.location.pathname === `/modify/${item.id}`
    );
    if (foundItem) {
      fetch("http://localhost:3000", {
        method: "PUT",
        body: JSON.stringify(dataToInsert),
        headers: {"Content-Type": "application/json"},
        });
        navigate("/Registro")
        } else {
            fetch("http://localhost:3000", {
            method: "POST",
            body: JSON.stringify(dataToInsert),
            headers: {"Content-Type": "application/json"},
            });
        }
    };
    // Armazena as informações no estado conforme são digitados.
    const handleChange = (e) => {
        setDataToInsert({
        ...dataToInsert,
        [e.target.name]: e.target.value,
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
                <p class="p">Registre-se:</p>    
            </div>  
   
                <form onSubmit={handleSubmit}>
                    <div class="div1">
                        
                    <p class="category1">Nome:</p>
                    <input className="name-inp"
                        type="text"
                        value={dataToInsert.nome}
                        name="nome"
                        onChange={handleChange}
                        placeholder="Nome"
                        required
                        autoComplete="none"        
                />
                </div>
                
                <div class="div2">
                <p class="category2">E-mail:</p>
                <input className="email-inp"
                    type="text"
                    value={dataToInsert.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="email"
                    required
                    autoComplete="none"        
                />
                </div>
                <div class="div3">
                <p class="category2">Senha:</p>
                <input className="senha-inp"
                    type="text"
                    value={dataToInsert.senha}
                    name="senha"
                    onChange={handleChange}
                    placeholder="senha"
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
                        <Link to ="/">
                        <button className="form_button2">Continuar</button>
                        </Link>
                    </div>
                </div>
                <div class="txt2">
                    <p>Já tem uma conta?</p>
                </div>
                <div class="href">
                    <Link to="/">
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