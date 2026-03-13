const sqlite3 = require('sqlite3');
const databasePath = process.env.DATABASE_PATH;


const db = new sqlite3.Database(databasePath, (err) => {
    if (err) {
        console.log("Getting error " + err);
        return;
    }
    console.log("Connected to the SQLite database.")
    db.run(`
            CREATE TABLE IF NOT EXISTS tickets(
        ticket_id INTEGER PRIMARY KEY,
        ticket_name TEXT NOT NULL,
        ticket_status TEXT NOT NULL
        )    
        `);
});


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

