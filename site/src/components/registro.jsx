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
                <div class="">
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
                <div class="btn-s">
                    <Link to="/">
                <button className="form_button2"a href="#">Voltar ao ínicio</button>
                    </Link>
                <button className="form_button">Continuar</button>
                </div>
                <div class="txt2">
                    <p>Já tem uma conta?</p>
                </div>
                <div class="href">
                    <a href="#">Entrar</a>
                </div>
                <hr />

            
                
            </form>
        </div>
        </>
    )


}

export default Registro;