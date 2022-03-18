const express = require("express");
const app = express();
const port = 3000;

app.post("/", (req, res )=>{
    res.send({
        msg : "hello"
    })

})

app.listen(port, () => console.log(`App listening on port localhost:${port}/!`))

var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password.",
    database: "test"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
