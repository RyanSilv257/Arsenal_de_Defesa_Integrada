import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/perfil.css";


const Perfil = () => {
    const [usuario, setUser] = useState(null);

    useEffect(() => {
        // Fetch user profile data when component mounts
        fetch('http://localhost:3001/session', { credentials: 'include' })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .then(data => {
                setUser(data.usuario);
            })
            .catch(error => {
                console.error('Error fetching profile:', error);
                window.location.href= '/Login'
            });
    }, []); // Empty dependency array ensures effect runs only once



    return (
        <>
        <div>
            {usuario ? ( 
                
                <>
                <div class='profile-div'>
                <div class="usr-title">
                <hr/>
                <h1>Perfil de Usuário</h1>
                <hr/>
                </div>
                <img id='profile-img' src="perfil.png"/>
                <div>
                    <div class="fields">
                    <p>Nome: {usuario.nome}</p>
                    <hr/>
                    <p>Email: {usuario.email}</p>
                    <hr/>
                    <p>Data de Nascimento: {usuario.dataNasc}</p>
                    <hr />
                    <p>Cpf: {usuario.cpf}</p>
                    <hr/>
                    <p>Telefone: {usuario.telefone}</p>
                    <hr/>
                    <p>Porte: {usuario.porte || 'Não informado'}</p>
                    <hr/>
                    <p>Validade do porte: {usuario.porteDate || 'Não informado'}</p>
                    <hr class="usr-hr"/>
                    </div>
                    <Link to="/UpdateData"><button class="edit-btn">Editar dados</button></Link>
                <div>
                    <Link to="/"><button class="home-btn">Voltar ao início</button></Link>
                    <Link to="/Logout"><button class="logout-btn">Sair da conta</button></Link>
                </div>
                </div>
                </div>
                </>
            ) : (
                <p>Redirecionando para o Login...</p>
            )}
        </div>

        </>
    );
};

export default Perfil;