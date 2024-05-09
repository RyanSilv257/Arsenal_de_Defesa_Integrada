import React, { useState, useEffect } from 'react';

const Logout = () => {

    useEffect(() => {
        // Fetch user profile data when component mounts
        fetch('http://localhost:3001/logout', { credentials: 'include' })
            .then(response => {
                if (response.ok) {
                    alert("Sessão encerrada.")
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 800);
                } else {
                    throw new Error('Network response was not ok.');
                }
            })
            .catch(error => {
                console.error('Erro terminando a sessão', error);
            });
    }, []);
}

export default Logout;