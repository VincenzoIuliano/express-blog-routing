console.log('Hello World!')

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/',(req,res) => {
    res.send('Ecco l\'homepage del tuo blog!');
})

app.listen(port,() => {
    console.log(`Server listening on port: ${port}`);
})