const express = require('express')
const app = express()
const port = 3000

const tickets = [
    {
        id: 1, title: "Printer broken",
        status: "open"
    }
]

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/tickets', (req, res) => {
    res.json(tickets)
})

app.post('/tickets', (req, res) => {
    const newTicketTitle = (req.body.title)
    const newTicketStatus = (req.body.status)

    const newTicket = {
        id: tickets.length + 1,
        title: newTicketTitle,
        status: newTicketStatus,
    }

    tickets.push(newTicket)

    res.json(newTicket)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

