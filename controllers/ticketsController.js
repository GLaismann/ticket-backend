const servicedb = require('../config/database')
// Padrão Tickets
const tickets = [
    {
        id: 1,
        title: "Printer broken",
        status: "open"
    }
]

const getAllTickets = (req, res) => {
    try {
        res.json(tickets);
    } catch (e) {
        res.send(e);
    }
}

const postNewTicket = (req, res) => {

    const newTicketTitle = req.body.title;
    const newTicketStatus = req.body.status;

    const newTicket = {
        id: tickets.length + 1,
        title: newTicketTitle,
        status: newTicketStatus,
    }

    tickets.push(newTicket);
    res.json(newTicket)
}

const updateTicket = (req, res) => {
    const ticketId = parseInt(req.params.id);
    const foundTicket = tickets.find(ticket => ticketId === ticket.id);

    if (foundTicket == undefined) {
        return res.status(404).json({ error: "Ticket not found." })
    }
    foundTicket.title = req.body.title
    foundTicket.status = req.body.status;

    res.json(foundTicket)
}

const deleteTicket = (req, res) => {
    const ticketId = parseInt(req.params.id);
    const foundIndexTicket = tickets.findIndex(ticket => ticketId === ticket.id);

    if (foundIndexTicket < 0) {
        return res.status(404).json({ error: "Ticket not found." })
    }
    tickets.splice(foundIndexTicket, 1)
    res.send("Remove Ticket ID" + ticketId)
}

module.exports = {
    getAllTickets,
    postNewTicket,
    updateTicket,
    deleteTicket,
};