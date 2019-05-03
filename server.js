const express = require('express');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');

app.use(morgan('combined'));

app.get('/', (req, res) => {
    console.log('Responding to root route');
    res.send('Hello from Roooooot');
});

app.get('/users', (req, res) => {
    let user1 = {firstName: 'Roman', lastName: 'Kluth'};
    res.json(user1);
});

app.get('/users/:id', (req, res) => {
    const connection = mysql.createConnection({
        user: 'tester',
        password: 'tester',
        database: 'testdaten',
        port: 3316
    });

    const query = 'SELECT * FROM users WHERE id = ?';
    connection.query(query, [req.params.id] , (err, rows, fields) => {
        if(err) {
            console.log('Failed to load data.');
            res.sendSatus(500);
            res.end();
        }
        res.json(rows);
    });
});

app.listen(8000, () => {
    console.log('Server listening on Port 8000');
});

