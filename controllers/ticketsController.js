const servicedb = require('../config/database')


const getAllTickets = (req, res) => {
    try {
       const allTickets = servicedb.fetchAll(db, "SELECT * FROM tickets");
       res.send(allTickets);
    } catch (e) {
        res.send(e);
    }
}

const postNewTicket = (req, res) => {

    const newTicketTitle = req.body.title;
    const newTicketStatus = req.body.status;

    servicedb.execute(db, "INSERT INTO tickets(ticket_name, ticket_status) VALUES(?, ?)", [newTicketTitle, newTicketStatus])

    res.send("Ticket created sucessfuly: ", newTicketStatus, "\n", newTicketTitle );
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
        res.status(404).json({ error: "Ticket not found." })
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