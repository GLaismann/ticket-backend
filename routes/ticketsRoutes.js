const express = require('express')
const router = express.Router();
const ticketsController = require('../controllers/ticketsController');



// Envia os tickets ao usuario
router.get('/', ticketsController.getAllTickets);

// Recebe novos tickets do usuario
router.post('/', ticketsController.postNewTicket);


// atualiza um ticket quando entrado na url e enviando um JSON
router.put('/:id', ticketsController.updateTicket)


// Deleta o ticket
router.delete('/:id', ticketsController.deleteTicket)

module.exports = router;