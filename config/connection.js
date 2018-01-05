var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: "3307",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("Error connectiong: ", err.stack);
        return;
    }
    console.log("Connected with ID ", connection.threadId);
});

module.exports = connection;