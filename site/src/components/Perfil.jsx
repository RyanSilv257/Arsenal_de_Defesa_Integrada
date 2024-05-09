import React, { useState, useEffect } from 'react';

const Perfil = () => {
    const [usuario, setUser] = useState(null);

    useEffect(() => {
        // Fetch user profile data when component mounts
        fetch('http://localhost:3001/session', { credentials: 'include' })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                setUser(data.usuario);
            })
            .catch(error => {
                console.error('Error fetching profile:', error);
            });
    }, []); // Empty dependency array ensures effect runs only once

    return (
        <div>
            <h1>Profile</h1>
            {usuario ? (
                <div>
                    <p>Username: {usuario.nome}</p>
                    <p>Email: {usuario.email}</p>
                    {/* Add more user information here */}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Perfil;