const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
    res.send("Welcome to my api");
});

app.listen(port, (req, res) => {
    console.log(`${port}`);
});
