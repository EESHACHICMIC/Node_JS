const express = require('express')
const app = express();
const users = require('./userData')
port = 5000;

app.get("/", (req, res) => {
    res.send("<center><h1>This is Home Page</h1></center>");
})

app.get("/post", (req, res) => {
    res.send("<h2>This is post page</h1>")
})

app.post("/api/users", (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})