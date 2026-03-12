const sqlite3 = require('sqlite3');


const db = new sqlite3.Database('./ticket-database.db', (err) => {
    if (err) {
        console.log("Getting error " + err);
        return;
    }
    createTables(db);
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
    const db = newdb
    return db;
}

function createTables(db) {
    console.log("Creating a new Table");

    db.serialize(() => {
        db.run(`
            CREATE TABLE IF NOT EXISTS tickets(
        ticket_id INTEGER PRIMARY KEY,
        ticket_name TEXT NOT NULL,
        ticket_status TEXT NOT NULL
        )    
        `);
        db.run(`
            INSERT INTO tickets(ticket_name, ticket_status)
            VALUES (?, ?)`, ['Printer broken', 'Open']);
    });
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


const fetchAll = async (db, sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const fetchOne = async (db, sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

module.exports = {
    fetchAll,
    fetchOne,
    execute,
    db
};

