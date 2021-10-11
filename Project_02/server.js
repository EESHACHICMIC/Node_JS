const express = require('express');

const app = express();
app.use(express.json());
const students = require('./students');
const port = 5000;

app.get('/', (req, res) => {
    res.json({ message: "API is working successfully..." })
})

app.get('/api/student', (req, res) => {
    res.json(students);
})



app.post('/api/student', (req, res) => {

    if (!req.body.email) {
        res.status(400)
        return res.json({ error: "email is required.." })
    }

    const user = {
        id: students.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email

    }
    students.push(user)
    res.json(user);

})


app.put('/api/student/:id', (req, res) => {
    let id = req.params.id
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;

    const index = students.findIndex((student) => {
        return (student.id == Number.parseInt(id))
    })

    if (index >= 0) {
        const std = students[index];
        std.last_name = last_name;
        std.first_name = first_name;
        std.email = email;
        res.json(std)
    } else {
        res.status(404);
    }
})



app.delete('/api/student/:id', (req, res) => {
    let id = req.params.id;

    const index = students.findIndex((student) => {
        return (student.id == Number.parseInt(id))
    })

    if (index >= 0) {
        let std = students[index]
        students.splice(index, 1);
        res.json(std);
    }
    else {
        res.status(404);
        res.end();
    }

})


app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})