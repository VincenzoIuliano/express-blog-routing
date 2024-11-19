const express = require('express')
const router = express.Router();

// CRUD sulla risorsa post 

// index 
router.get('/',(req,res) => {
    res.send('Ecco l\'elenco dei post!');
})

// show 
router.get('/:id',(req,res) => {
    res.send(`Ecco il post con id: ${req.params.id}`);
})

// store 
router.post('/', (req,res) => {
    res.send('Creazione di un nuovo post');       
})

// update 
router.put('/:id',(req,res) => {
    res.send(`Modifica integrale del post ${req.params.id}`)
})

// modify 
router.patch('/:id',(req,res) => {
    res.send(`Modifica parziale del post ${req.params.id}`)
})

// destroy 
router.delete('/:id',(req,res) => {
    res.send(`Rimozione del post ${req.params.id}`)
})

module.exports = router ;