var connection = require('./connection.js');
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
    selectAll: function(tableName, cb) {
        connection.query("SELECT * FROM " + tableName + ";", function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },
    insertOne: function(tableName, cols, vals, cb) {
        var queryStr = "INSERT INTO " + tableName;
        queryStr += " (" + cols.toString() + ") ";
        queryStr += "VALUES (";
        queryStr += printQuestionMarks(vals.length);
        queryStr += ");"
        connection.query(queryStr, vals, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },
    updateOne: function(tableName, objColVals, objCondition, cb) {
        var queryStr = "UPDATE " + tableName + " SET ";
        queryStr += objToSql(objColVals);
        queryStr += " WHERE ";
        queryStr += objToSql(objCondition);
        connection.query(queryStr, function(err, results) {
            if (err) throw err;
            cb(results);
        });
    }
};

module.exports = orm;