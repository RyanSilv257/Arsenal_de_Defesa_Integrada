const sqlite3 =  require("sqlite3").verbose();
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())


const db = new sqlite3.Database("arsenaltest.db", (err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("Conexão estabelecida com sucesso.");
    }
});

db.run(
    `CREATE TABLE IF NOT EXISTS "usuario" (
        "id"	INTEGER,
        "nome"	TEXT NOT NULL,
        "email"	INTEGER NOT NULL,
        "senha"	TEXT NOT NULL,
        "idade" INTEGER NOT NULL,
        PRIMARY KEY("id" AUTOINCREMENT)
    )`
)

app.get('/', (req, res) => {
    res.json({ message: "Backend is up and running!" });
});

// Rota para checar login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ message: "Email e senha são obrigatórios." });
    }

    const sql = "SELECT * FROM usuario WHERE email = ? AND senha = ?";
    db.all(sql, [email, senha], (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: "Ocorreu um erro ao autenticar o usuário." });
        }

        if (result.length > 0) {
            return res.status(200).json({ message: "Login realizado com sucesso!" });
        } else {
            return res.status(401).json({ message: "Email ou senha incorretos." });
        }
    });
});

// Rota para cadastrar um novo usuário
app.post('/registro', (req, res) => {
    const { nome, email, senha, idade } = req.body;
    const sql = "INSERT INTO usuario (nome, email, senha, idade) VALUES (?, ?, ?, ?)";
    db.run(sql, [nome, email, senha, idade], (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar usuário:', err);
            res.status(500).json({ message: "Erro ao cadastrar usuário." });
        } else {
            console.log('Usuário cadastrado com sucesso!');
            res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
        }
    });
});





app.listen(3001 , () => console.log('Escutando no port 3001'))
