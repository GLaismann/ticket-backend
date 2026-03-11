# Backend CRUD with SQLite - Next Steps

Here is your to-do list for when you get home! We are transitioning from the "fake" in-memory array to the real SQLite database.

## Tasks to Complete:

- [x] **Task 1: Read (GET)**
- [x] **Task 2: Create (POST)**
- [x] **Task 3: Delete (DELETE)**
- [x] **Task 4: Update (PUT)**
- [x] **Task 5: The Cleanup**

---

# Phase 2: Building a "Hireable" Portfolio API

To get a job as a Junior Developer, your API needs to show that you understand real-world architectural patterns and security. 

- [ ] **Task 6: Environment Variables (`dotenv`)**
  - Install the `dotenv` package.
  - Move your `port` number and database file name into a `.env` file so they aren't hardcoded.

- [ ] **Task 7: Input Validation**
  - When creating or updating a ticket, how do you verify the user didn't send an empty string or a number for the `ticket_name`?
  - Goal: Manually write an `if` statement to validate data *before* hitting SQLite, and return a `400 Bad Request` if it fails.

- [ ] **Task 8: Centralized Error Handling Middleware**
  - Right now, every route has a `try/catch`. 
  - Goal: Learn how Express "Error Handling Middleware" works to remove repetitive `try/catch` code.

- [ ] **Task 9: Authentication basics (optional but great!)**
  - Add a hardcoded "secret token" requirement to the `DELETE` route so only authorized users can delete a ticket.

- [ ] **Task 10: The README.md & GitHub**
  - Write a professional `README.md` explaining what the project is, what tech stack it uses, and how to run it.
  - Push the final polished version to GitHub.

*Happy Coding!* 🚀
