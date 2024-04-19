import React, { useState } from "react";


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
            <form onSubmit={handleLogin}
            >
            <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <input
            type="password"
            name="senha"
            placeholder="senha"
            required
            value={senha} 
            onChange={(e) => setSenha(e.target.value)}
            />
            <button type="submit">
            Log in
            </button>
            </form>
        </>
    )
}

export default Login;