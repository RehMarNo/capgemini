const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let pg = require('pg');
let consString = process.env.DATABASE_URL;
 /* 'postgres://kzeqcqfacerjqk:0ab70a2436d1b4e380cc1391f9741d48ba160dba664d0fa87a5b960ba6446548@ec2-107-22-238-112.compute-1.amazonaws.com:5432/d6drlldgcaivkq' */

const pool = new pg.Pool({connectionString: consString, ssl: {rejectUnauthorized: false}})

/* 
CREATE TABLE usuarios (email varchar(50), senha varchar(200), perfil varchar(15))
*/

app.get('/', (req, res) => {
    pool.connect((err, client) => {
        if(err) {
            return res.status(401).send(err.message)
        }
        res.status(200).send('Conected')
        
    })
})

app.get('/criarTabela', (req, res) => {
    pool.connect((err, client) => {
        if(err) {
            return res.status(401).send('errooooo')
        }
        client.query('CREATE TABLE usuarios (email varchar(50), senha varchar(200), perfil varchar(15))', (error, result) => {
            if (error) {
                return res.status(403).send('Failed in creating table')
            }
            res.status(200).send(result.rows)
        })
        
    })
})

/* ${req.body.email}, ${req.body.senha}, ${req.body.perfil} */

app.post('/usuarios', (req, res) => {
    pool.connect((err, client) => {
        client.query('SELECT * FROM usuarios WHERE email = $1', [req.body.email], (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }

            if (result.rowCount > 0) {
                return res.status(403).send('User already exists')
            }

            client.query(`INSERT INTO usuarios (email, senha, perfil) VALUES($1, $2, $3)`, [req.body.email, req.body.senha, req.body.perfil], (error, result) => {
                if (error) {
                    return res.status(403).send('Failed on insert user')
                }
                res.status(201).send(result.rows[0])
            })
        }) 
        
    })
})

app.get('/usuarios', (req, res) => {
    pool.connect((err, client) => {
        if(err) {
            return res.status(401).send('errooooo')
        }
        client.query('SELECT email, senha, perfil FROM usuarios', (error, result) => {
            if (error) {
                return res.status(403).send('Failed in consulting users')
            }
            res.status(200).send(result.rows)
        })
        
    })
})

app.delete('/usuarios/:email', (req, res) => {
    let email = req.params.email
    pool.connect((err, client) => {
        if(err) {
            return res.status(401).send('errooooo') 
        }
        client.query('DELETE FROM usuarios WHERE email =$1',[email], (error, result) => {
            if (error) {
                return res.status(403).send('Failed in consulting users')
            }
            res.status(200).send(email)
        })
    })
})

app.get('/usuarios/:email', (req, res) => {
    let email = req.params.email
    pool.connect((err, client) => {
        if(err) {
            return res.status(401).send('errooooo') 
        }
        client.query('SELECT * FROM usuarios WHERE email = $1',[email], (error, result) => {
            if (error) {
                return res.status(403).send('Failed in consulting users')
            }
            res.status(200).send(result.rows[0])
        })
    })
})

app.patch('/usuarios/:email', (req, res) => {
    let email = req.params.email
    pool.connect((err, client) => {
        client.query('SELECT * FROM usuarios WHERE email = $1', [email], (error, result) => {
            if (error) {
                return res.status(401).send('Operação não autorizada')
            }

            if (result.rowCount > 0) {
                client.query(`UPDATE usuarios SET senha = $1 WHERE email = $2`, [req.body.senha, email], (error, result) => {
                    if (error) {
                        return res.status(403).send('Failed on insert user')
                    }
                    res.status(201).send(result.rows[0])
                })
            } else {
                return res.status(403).send('User does not exists')
            }  
        }) 
    })
})

app.listen(port, () => {console.log('listening on port 8081')})