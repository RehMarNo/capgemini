const express = require('express');
const app = express();
const port = process.env.PORT;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let login = require('./middleware/login');
const cors = require('cors')
app.use(cors())


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let pg = require('pg');
let consString = process.env.DATABASE_URL;

const pool = new pg.Pool({connectionString: consString, ssl: {rejectUnauthorized: false}})

app.get('/', (req, res) => {
    pool.connect((err, client) => {
        if(err) {
            return res.status(401).send('Network error: ' + error.message)
        }
        res.status(200).send('Conected')
        
    })
})

app.get('/criarTabela', (req, res) => {
    pool.connect((err, client) => {
        if(err) {
            return res.status(401).send('Network error: ' + error.message)
        }
        client.query('CREATE TABLE usuarios (email varchar(50), senha varchar(200), perfil varchar(15))', (error, result) => {
            if (error) {
                return res.status(403).send('Failed in creating table')
            }
            res.status(200).send(result.rows)
        })
        
    })
})

app.post('/usuarios', (req, res) => {
    pool.connect((err, client) => {
        if(err){
            return res.status(401).send('Network error: ' + error.message)
        }
        client.query('SELECT * FROM usuarios WHERE email = $1', [req.body.email], (error, result) => {
            if (error) {
                return res.status(401).send('Network error: ' + error.message)
            }

            if (result.rowCount > 0) {
                return res.status(403).send('User already exists')
            }

            bcrypt.hash( req.body.senha, 10, (err, hash) => {   //(senha a ser cript, saltos/tentativas, callback)
                if(err) {
                    return res.status(500).send('Hash Error: ' + err.message)
                }
                client.query(`INSERT INTO usuarios (email, senha, perfil) VALUES($1, $2, $3)`, [req.body.email, hash, req.body.perfil], (error, result) => {
                    if (error) {
                        return res.status(403).send('Failed on insert user')
                    }
                    res.status(201).send(result.rows[0])
                })
            })
        }) 
        
    })
})

app.get('/usuarios', (req, res) => {
    pool.connect((err, client) => {
        if(err) {
            return res.status(401).send('Network error: ' + error.message)
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
            return res.status(401).send('Network error: ' + err.message)
        }
        client.query('DELETE FROM usuarios WHERE email =$1',[email], (error, result) => {
            if (error) {
                return res.status(403).send('Failed in consulting users')
            }
            res.status(200).send(email)
        })
    })
})

app.post('/usuarios/login', (req, res) => {
    pool.connect((err, client) => {
        if(err) {
            return res.status(401).send('Network error')
        }
        client.query('SELECT * FROM usuarios WHERE email = $1', [req.body.email], (error, result) => {
            if (error) {
                return res.status(400).send('Failed in consulting users')
            }
            if(result.rowCount > 0) {
                bcrypt.compare(req.body.senha, result.rows[0].senha, (e, resultHash) => {
                    if(e) { 
                        return res.status(400).send('Failed in authorization') 
                    }

                    if(resultHash) {
                        let token = jwt.sign({
                            email: result.rows[0].email,
                            perfil: result.rows[0].perfil
                        }, process.env.JWTKEY, { expiresIn: "3h"})
                        return res.status(200).send({
                            token: token
                        });
                    }
                })
            } else {
                return res.status(400).send('User not found')
            }
            
        })
    })
})

app.patch('/usuarios/:email', (req, res) => {
    let email = req.params.email
    pool.connect((err, client) => {
        client.query('SELECT * FROM usuarios WHERE email = $1', [email], (error, result) => {
            if (error) {
                return res.status(401).send('Network error: ' + error.message)
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

app.post('/produto', login, (req, res) => {
    res.status(200).send('rota inserida')
})

app.listen(port, () => {console.log('listening on port 8081')})