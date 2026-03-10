
const express = require('express')
const app = express()
// const ticketsRoutes = require('./routes/ticketsRoutes');
const port = 3000

// Tradutor do express para json
app.use(express.json());


// Primeira pagina para hello world!
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/tickets', ticketsRoutes)

// Motor para deixar funcionando(nao encerrar quando todos os codigos executados)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

