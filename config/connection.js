var mysql = require('mysql');

var connection = mysql.createConnection(process.env.JAWSDB_URL || {
    port: 3307,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: ", err.stack);
        return;
    }
    console.log("Connected with ID ", connection.threadId);
});

module.exports = connection;