const sqlite3 =  require("sqlite3").verbose();
const express = require('express')
const cors = require('cors')
const session = require('express-session');
const SQLiteStore = require('connect-sqlite3')(session);

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
  }))

app.use(express.json());


const sessionOptions = {
    secret: '1263498712364981235482',
    resave: false,
    saveUninitialized: true,
    store: new SQLiteStore({
        db: 'session.db',
        table: 'sessions'
    })
};

app.use(session(sessionOptions));

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
        "email"	TEXT NOT NULL,
        "senha"	TEXT NOT NULL,
        "dataNasc" INTEGER NOT NULL,
		"cpf" INTEGER NOT NULL,
		"telefone" INTEGER NOT NULL,
        "porte" INTEGER,
        "porteDate" INTEGER,
        PRIMARY KEY("id" AUTOINCREMENT)
    )`
)

app.get('/', (res) => {
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
            const usuario = result[0];
            req.session.usuario = usuario;
            console.log("User data stored in session:", usuario);
            return res.status(200).json({ message: "Login realizado com sucesso!" });
        } else {
            return res.status(401).json({ message: "Email ou senha incorretos." });
        }
    });
});

// Rota para cadastrar um novo usuário
app.post('/registro', (req, res) => {
    const { nome, email, senha, dataNasc, cpf, telefone, porte, porteDate } = req.body;
    const sql = "INSERT INTO usuario (nome, email, senha, dataNasc, cpf, telefone, porte, porteDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.run(sql, [nome, email, senha, dataNasc, cpf, telefone, porte, porteDate], (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar usuário:', err);
            res.status(500).json({ message: "Erro ao cadastrar usuário." });
        } else {
            console.log('Usuário cadastrado com sucesso!');
            res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
        }
    });
});

app.get('/security', (req, res) => {
    if (req.session.usuario) {
        console.log("Está logado");
        setTimeout(() => {
        window.location.href = '/Perfil';
        }, 1000)
    } else {
        window.location.href = '/Login';
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Erro terminando a sessão:', err);
        } else {
            res.sendStatus(200);
        }
    });
});

app.get('/session', (req, res) => {
    if (req.session && req.session.usuario) {
        res.json({ usuario: req.session.usuario });
    } else {
        res.status(401).json({ error: 'Não está logado' });
    }
});


// Rota para modificar dados
app.put('/UpdateData', (req, res) => {
    if (!req.session.usuario) {
        return res.status(401).json({ error: 'Não está logado' });
    }

    const { id, nome, email, senha, dataNasc, cpf, telefone, porte, porteDate } = req.body;

    const sql = `UPDATE usuario 
                 SET nome = ?, email = ?, senha = ?, dataNasc = ?, cpf = ?, telefone = ?, porte = ?, porteDate = ? 
                 WHERE id = ?`;

    db.run(sql, [nome, email, senha, dataNasc, cpf, telefone, porte, porteDate, id], (err) => {
        if (err) {
            console.error('Error updating user data:', err);
            return res.status(500).json({ error: 'Erro interno do servidor' });
        }
        res.json({ message: 'Dados do usuário atualizados com sucesso' });
    });
});

app.listen(3001 , () => console.log('Escutando no port 3001'))
