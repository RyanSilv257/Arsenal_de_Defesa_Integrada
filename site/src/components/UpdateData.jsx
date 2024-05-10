import React, { useState, useEffect } from 'react';
import "../styles/update.css"

function UpdateData() {
    const [usuario, setUsuario] = useState('');
    const [id, setUser] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [porte, setPorte] = useState('');
    const [porteDate, setPorteDate] = useState('');



    useEffect(() => {
        fetch('http://localhost:3001/session', {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => {
            setUser(data.usuario.id);
            setUsuario(data.usuario)
        })
        .catch(error => {
            console.error('Error fetching profile:', error);
        });
}, []);

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
    const handleCpf = (event) => {
        let formattedCpf = event.target.value
            .replace(/\D/g, '') 
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1-$2');
        
            setCpf(formattedCpf);
    };
    
    const handleTelefone = (event) => {
        let formattedTelefone = event.target.value
            .replace(/\D/g, '') 
            .replace(/(\d{2})(\d)/, '(+$1) $2')
            .replace(/(\d{2})(\d)/, '$1 $2')
            .replace(/(\d{5})(\d)/, '$1-$2');
    
        setTelefone(formattedTelefone);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const updatedFields = {};

        if (nome !== usuario.nome) updatedFields.nome = nome || usuario.nome;
        if (email !== usuario.email) updatedFields.email = email || usuario.email;
        if (senha !== usuario.senha) updatedFields.senha = senha || usuario.senha;
        if (dataNasc !== usuario.dataNasc) updatedFields.dataNasc = dataNasc ||  usuario.dataNasc;
        if (cpf !== usuario.cpf) updatedFields.cpf = cpf || usuario.cpf;
        if (telefone !== usuario.telefone) updatedFields.telefone = telefone ||  usuario.telefone;
        if (porte !== usuario.porte) updatedFields.porte = porte || usuario.porte;
        if (porteDate !== usuario.porteDate) updatedFields.porteDate =  porteDate || usuario.porteDate;
        
        fetch('http://localhost:3001/UpdateData', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    ...updatedFields
                    // nome: nome,
                    // email: email,
                    // senha: senha,
                    // dataNasc: dataNasc,
                    // cpf: cpf,
                    // telefone: telefone,
                    // porte: porte,
                    // porteDate: porteDate
                }),
                credentials: 'include'
            })

            .then(response =>  response.json())
            .then(data => {
                if (data.message === "Dados do usuário atualizados com sucesso") {
                    alert(data.message);
                    setTimeout(() => {
                        window.location.href = '/Perfil';
                    }, 700);
                }
            })
            .catch(err => {
                console.error('Erro ao tentar atualizar dados:', err);
                alert('Erro ao tentar atualizar dados. Por favor, tente novamente.');
            });
    };

    return (
        <>
        <div>
            {usuario ? (
                <>
        <div class="updt-maindiv">
            <h2 class="updt-title">Atualizar Dados do Usuário</h2>
            <form onSubmit={handleSubmit}>
            <div class="updtform-div">
            <div class="div1">

            <p class="category1">Nome:</p>
            <input className="name-inp"
                type="text"
                value={nome || (usuario && usuario.nome)}
                name="nome"
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome (obrigatório)"
                required
                autoComplete="none"        
            />
            </div>
            <div class="div1">
            <p class="category">E-mail:</p>
            <input className="email-inp"
                type="email"
                value={email || (usuario && usuario.email)}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email (obrigatório)"
                required
                autoComplete="none"        
            />
            </div>
            <div class="div1">
            <p class="category">Senha:</p>
            <input className="senha-inp"
                type="password"
                value={senha || (usuario && usuario.senha)}
                name="senha"
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Senha (obrigatório)"
                required
                autoComplete="none"        
            />
            </div>
            <div class="div1">
            <p class="category">Data de nascimento:</p>
            <input className="senha-inp"
                value={dataNasc || (usuario && usuario.dataNasc)}
                name="date"
                onChange={handleBirthdateChange}
                placeholder="Data de nascimento (obrigatório)"
                maxLength="10"
                required
                autoComplete="none"        
            />
            </div>
            <div class="div1">
            <p class="category">Cpf:</p>
            <input className="senha-inp"
                value={cpf || (usuario && usuario.cpf)}
                name="cpf"
                onChange={handleCpf}
                maxLength="14"
                placeholder="Cpf (obrigatório)"
                required
                autoComplete="none"        
            />
            </div>
            <div class="div1">
            <p class="category">Nº de Telefone:</p>
            <input className="senha-inp"
                value={telefone || (usuario && usuario.telefone)}
                name="telefone"
                onChange={handleTelefone}
                maxLength="19"
                placeholder="Telefone (obrigatório)"
                required
                autoComplete="none"        
            />
            </div>

            <div id="porte" class="div1">
                <p class="category">Nº do registro do porte:</p>
                <input className="senha-inp"
                    value={porte || (usuario && usuario.porte)}
                    name="porte"
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
                    autoComplete="none"        
                />

                <p class="category">Validade do Porte:</p>
                <input className="senha-inp"
                    value={porteDate || (usuario && usuario.porteDate)}
                    name="porteDate"
                    onChange={handlePorteDateChange}
                    placeholder="Data da validade"
                    maxLength="10"
                    autoComplete="none"        
                />
                </div>
                <button className="form_button2 updt-btn" type="submit">Atualizar Dados</button>
            </div>
            </form>
        </div>
            </>
            ) : (
                <p>...</p>
            )}
        </div>
        </>
    );
}

export default UpdateData;