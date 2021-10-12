const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.json({ message: "App is working..." })
})


app.get('/users/:id', (req, res) => {
    res.send(req.params);
})


app.get('/users/status/:id/:status_id', (req, res) => {
    res.send(req.params);
})

app.listen(port, () => {
    console.log(`Server is running at port:${port}`)
})