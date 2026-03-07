
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


app.put('/tickets/:id', (req, res) => {

    const ticketId = parseInt(req.params.id);
    const foundTicket = tickets.find(ticket => ticket.id === ticketId)

    if (foundTicket) {
        foundTicket.title = req.body.title;
        foundTicket.status = req.body.status;


        res.json(foundTicket)
    } else {
        res.status(404).json({ error: "Ticket not found." })
    }


})

app.delete('/tickets/:id', (req, res) => {
    const ticketId = parseInt(req.params.id);
    const foundIndexTicket = tickets.findIndex(ticket => ticket.id === ticketId)

    if (foundIndexTicket >= 0) {

        tickets.splice(foundIndexTicket, 1)
        res.send("Removed Ticket ID: " + ticketId)

    } else {
        res.status(404).json({ error: "Ticket not found." })
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

