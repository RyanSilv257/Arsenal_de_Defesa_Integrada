const sqlite3 =  require("sqlite3").verbose();
const express = require('express')
const cors = require('cors')
const session = require('express-session');
const cookieParser = require('cookie-parser'); // Add cookie-parser
const SQLiteStore = require('connect-sqlite3')(session);

const app = express()

app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
  }))
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware


const sessionOptions = {
    secret: '1263498712364981235482',
    cookie: { maxAge: 30000 },
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
    const { nome, email, senha, dataNasc, porte, porteDate } = req.body;
    const sql = "INSERT INTO usuario (nome, email, senha, dataNasc, porte, porteDate) VALUES (?, ?, ?, ?, ?, ?)";
    db.run(sql, [nome, email, senha, dataNasc, porte, porteDate], (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar usuário:', err);
            res.status(500).json({ message: "Erro ao cadastrar usuário." });
        } else {
            console.log('Usuário cadastrado com sucesso!');
            res.status(200).json({ message: "Usuário cadastrado com sucesso!" });
        }
    });
});

app.get('/logout', (req, res) => {
    req.session = {};
    res.status(200).json({ message: "Sessão encerrada com sucesso." });
});
  
app.get('/profile', (req, res) => {
    if (req.session.usuario) {
        console.log('User data from session:', req.session.usuario);
        return res.status(200).json({ message: "sim" });
    } else {
        return res.status(401).json({ message: "nao" });
    }
});

app.get('/session', (req, res) => {
    res.json({ usuario: req.session.usuario });
    console.log(req.session.usuario)
});


app.listen(3001 , () => console.log('Escutando no port 3001'))
