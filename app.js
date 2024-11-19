console.log('Hello World!')

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/',(req,res) => {
    res.send('Ecco l\'homepage del tuo blog!');
})

// CRUD sulla risorsa post 

// index 
    app.get('/posts',(req,res) => {
        res.send('Ecco l\'elenco dei post!');
    })

    // show 
    app.get('/posts/:id',(req,res) => {
        res.send(`Ecco il post con id: ${req.params.id}`);
    })

// store 
    app.post('/posts', (req,res) => {
        res.send('Creazione di un nuovo post');       
    })

// update 
    app.put('/posts/:id',(req,res) => {
        res.send(`Modifica integrale del post ${req.params.id}`)
    })

// modify 
    app.patch('/posts/:id',(req,res) => {
        res.send(`Modifica parziale del post${req.params.id}`)
    })

// destroy 
    app.delete('/posts/:id',(req,res) => {
        res.send(`Rimozione del post ${req.params.id}`)
    })

app.listen(port,() => {
    console.log(`Server listening on port: ${port}`);
})