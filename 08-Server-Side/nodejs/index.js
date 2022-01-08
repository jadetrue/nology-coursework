const express = require("express");
const router = require("./routes/members.js");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/familyAPI/members", router);

app.get("/familyAPI", (req, res) => {
    res.send("Welcome to my Family API");
});

app.listen(port, (req, res) => {
    console.log(`Server is running on port ${port}`);
});
