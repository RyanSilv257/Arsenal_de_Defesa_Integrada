import React, { useState, useEffect } from "react";
import{ useNavigate } from "react-router-dom";


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
        <div class="main.div">
            <div class="">
            <p class="content-txt" >ADI</p>
                <img class="content-img2" src="/logo_header2.png"/>
                <p class="content-txt">Arsenal de Defesa Integrada</p>
            </div>    
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        value={dataToInsert.nome}
                        name="nome"
                        onChange={handleChange}
                        placeholder="Nome"
                        required
                        autoComplete="none"        
                />
                <input 
                    type="text"
                    value={dataToInsert.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="email"
                    required
                    autoComplete="none"        
                />
                <input 
                    type="text"
                    value={dataToInsert.senha}
                    name="senha"
                    onChange={handleChange}
                    placeholder="senha"
                    required
                    autoComplete="none"        
                />
                <button className="form_button">Save</button>
                
            </form>
        </div>
        </>
    )


}

export default Registro;