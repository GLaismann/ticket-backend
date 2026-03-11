# Backend CRUD with SQLite - Next Steps

Here is your to-do list for when you get home! We are transitioning from the "fake" in-memory array to the real SQLite database.

## Tasks to Complete:

- [x] **Task 1: Read (GET)**
  - Update `getAllTickets` in `ticketsController.js`.
  - Use the `servicedb` connection to run a `SELECT * FROM tickets` query.
  -  sReturn the rows as JSON. (Hint: look up `db.all()` for SQLite in Node).

- [x] **Task 2: Create (POST)**
  - Update `postNewTicket` in `ticketsController.js`.
  - Extract the title and status from `req.body`.
  - Use `servicedb.run()` to execute an `INSERT INTO tickets` query.

- [x] **Task 3: Delete (DELETE)**
  - Update `deleteTicket` in `ticketsController.js`.
  - Extract the ID from the URL (`req.params.id`).
  - Use `servicedb.run()` to execute a `DELETE FROM tickets WHERE ticket_id = ?` query.

- [ ] **Task 4: Update (PUT)**
  - Update `updateTicket` in `ticketsController.js`.
  - Extract the ID from the URL, and the new data from `req.body`.
  - Use `servicedb.run()` to execute an `UPDATE tickets SET...` query.

- [x] **Task 5: The Cleanup**
  - Once all four routes are using `servicedb`, completely delete the `const tickets = [...]` array at the top of your controller! 
  - Test all routes using Thunder Client or PowerShell to make sure the data survives a server restart.

*Happy Coding!* 🚀
