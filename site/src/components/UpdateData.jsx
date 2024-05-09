// updatedata.jsx

import React, { useState, useEffect } from 'react';

function UpdateData() {
    const [user, setUserData] = useState({
        id: '', 
        nome: '',
        email: '',
        senha: '',
        dataNasc: '',
        cpf: '',
        telefone: '',
        porte: '',
        porteDate: ''
    });



    useEffect(() => {
        // Fetch session ID from backend or wherever it's stored
        fetchSessionId();
    }, []);

    const fetchSessionId = async () => {
        try {
            // Fetch session ID from backend endpoint
            const response = await fetch('http://localhost:3001/session', {
                method: 'GET',
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('Erro ao obter o ID da sessão');
            }

            const data = await response.json();

            // Set session ID in state
            setUserData(prevState => ({
                ...prevState,
                id: data.usuario.id // Assuming the session object has an 'id' property
            }));
        } catch (error) {
            console.error(error.message);
            // Handle error as needed
        }
    };




    const handleChange = e => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/UpdateData', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!response.ok) {
                throw new Error('Erro ao atualizar os dados do usuário');
            }

            alert('Dados do usuário atualizados com sucesso');
            // Handle success as needed
        } catch (error) {
            console.error(error.message);
            alert('Erro ao atualizar os dados do usuário');
            // Handle error as needed
        }
    };

    return (
        <div>
            <h2>Atualizar Dados do Usuário</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="nome" value={user.nome} onChange={handleChange} placeholder="Nome" required />
                <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="E-mail" required />
                {/* Add other input fields for other user data */}
                <button type="submit">Atualizar Dados</button>
            </form>
        </div>
    );
}

export default UpdateData;