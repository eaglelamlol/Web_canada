const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");



app.use(cors());





var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password.",
    database: "test"
});



var get;
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        get = result;
    });
});

app.post("/", (req, res )=>{
    res.send({
        msg : get    })

})

app.listen(port, () => console.log(`App listening on port localhost:${port}/!`))


