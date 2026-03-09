const sqlite3 = require('sqlite3').verbose();


const db = new sqlite3.Database('./ticket-database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err && err.code === "SQLITE_CANTOPEN") {
        console.log("Trying to create a Database... ");
        createDatabase();
        return;
    } else if (err) {
        console.log("Getting error " + err);
        return;
    }
    console.log("Connected to the SQLite database.")

});


function createDatabase() {
    const newdb = new sqlite3.Database('./ticket-database.db', sqlite3.CREATE, (err) => {
        if (err) {
            console.log("Getting error " + err);
            return;
        }

    })
    createTables(newdb);
    console.log("Database Created Sucessfuly");
}

function createTables(newdb) {
    console.log("Creating a new Table")
    newdb.exec(`
        CREATE TABLE tickets(
        ticket_id INTEGER PRIMARY KEY,
        ticket_name TEXT NOT NULL,
        ticket_status TEXT NOT NULL
        );
        INSERT INTO tickets (ticket_name, ticket_status)
            VALUES("Printer Broken", "Open");
        `)
}

const execute = async (db, sql, params = []) => {
    if (params && params.length > 0) {
        return new Promise((resolve, reject) => {
            db.run(sql, params, (err) => {
                if (err) reject(err);
                resolve();
            });
        });
    }
    return new Promise((resolve, reject) => {
        db.exec(sql, (err) => {
            if (err) reject(err);
            resolve();
        })
    })
}




module.exports = db;