const express = require("express");
const router = require("./routes/students.js");

const app = express();
const port = process.env.PORT || 3000;

app.use("/api/students", router);

app.get("/api", (req, res) => {
    res.send("Welcome to my api");
});

app.listen(port, (req, res) => {
    console.log(`${port}`);
});
