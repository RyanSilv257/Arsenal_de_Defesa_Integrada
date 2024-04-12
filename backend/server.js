const http = require("http");
const { parse } = require("path");
const sqlite3 =  require("sqlite3").verbose();

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
        PRIMARY KEY("id" AUTOINCREMENT)
    )`
)

const search = (callback)=>{
    db.all("SELECT * FROM usuario", (err, rows)=>{
        if(err){
            console.error(err);
        }else{
            callback(rows);
        }
    });
};

const insertData = db.prepare(
    `INSERT INTO usuario (nome, email, senha) 
    VALUES(?, ?, ?)`,
    (err)=>{
        if(err){
            console.error(err);
        }else{
            console.log("Dados inseridos com sucesso");
        }
    }
);

const server = http.createServer((req, res)=>{
    // Para permitir os CORS e que não tenha problemas neste exemplo.
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    // Retorna todas informações para o servidor.
    search((result)=>{
        res.write(JSON.stringify(result));
        res.end();
    });



    if(req.method == "POST"){
        let body = "";
        // Recebe as informações enviadas para o servidor.
        req.on("data", (chunk)=>{
            body += chunk;
        });
        req.on("end", ()=>{
            // Converte as informações.
            const parsedBody = JSON.parse(body);
            console.log(parsedBody);
            // Usa a consulta preparada para inserir os dados recebidos do Frontend.
            insertData.run(
                parsedBody.nome,
                parsedBody.email,
                parsedBody.senha
            );
            console.log("Dados criados com sucesso.")
        });
    

}});



const port = 3000;
server.listen(port);
console.log(`Servidor escutando no porto ${port}`);