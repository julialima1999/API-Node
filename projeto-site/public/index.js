const express = require("express");

const app = express();

app.get("/"),
    function(req, res) {
        res.send("Página úsuario")
    }

app.listen(3000);