const servicedb = require('../config/database');


const getAllTickets = async (req, res) => {
    try {
        const allTickets = await servicedb.fetchAll(db, "SELECT * FROM tickets");
        res.send(allTickets);
    } catch (e) {
        return res.send(e);
    }
}


const postNewTicket = async (req, res) => {

    const newTicketName = req.body.ticket_name;
    const newTicketStatus = req.body.ticket_status;

    try {
        await servicedb.execute(db, "INSERT INTO tickets(ticket_name, ticket_status) VALUES(?, ?)", [newTicketName, newTicketStatus]);

        res.send("Ticket created sucessfuly \n Ticket name: " + newTicketName + "\nTicket Status: " + newTicketStatus);
    } catch (error) {
        return res.send(error)
    }

}

const updateTicket = async (req, res) => {

    const ticketId = parseInt(req.params.id);

    const updatedTicketName = req.body.ticket_name;
    const updatedTicketStatus = req.body.ticket_status;
    try {
        await servicedb.execute(db, "UPDATE tickets SET ticket_name = (?), ticket_status = (?) WHERE ticket_id = (?)", [updatedTicketName, updatedTicketStatus, ticketId]);

        res.send("Ticket ID: " + ticketId + " Alterado para: " + updatedTicketName + "\n Status: " + updatedTicketStatus)
    } catch (e) {
        return res.send(e);
    }

}

const deleteTicket = async (req, res) => {

    // Frontend send the ticketId
    const ticketId = parseInt(req.params.id);

    try {
        await servicedb.execute(db, "DELETE FROM tickets WHERE ticket_id = (?)", [ticketId]);
        res.send("Remove Ticket ID" + ticketId);

    } catch (e) {
        return res.send(e);
    }

}

module.exports = {
    getAllTickets,
    postNewTicket,
    updateTicket,
    deleteTicket,
};