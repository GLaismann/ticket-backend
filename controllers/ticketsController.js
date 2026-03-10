const servicedb = require('../config/database');
const db = servicedb.db;

const getAllTickets = async (req, res) => {
    try {
        const allTickets = await servicedb.fetchAll(db, "SELECT * FROM tickets");
        res.send(allTickets);
    } catch (e) {
        res.send(e);
    }
}

const postNewTicket = async (req, res) => {

    const newTicketName = req.body.name;
    const newTicketStatus = req.body.status;


    await servicedb.execute(db, "INSERT INTO tickets(ticket_name, ticket_status) VALUES(?, ?)", [newTicketName, newTicketStatus])

    res.send("Ticket created sucessfuly \n Ticket name: " + newTicketName + "\nTicket Status: " + newTicketStatus);
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