const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('combined'));

app.get('/', (req, res) => {
    console.log('Responding to root route');
    res.send('Hello from Roooooot');
});

app.get('/users', (req, res) => {

    let user1 = {firstName: 'Roman', lastName: 'Kluth'};

    res.json(user1);
});

app.listen(8000, () => {
    console.log('Server listening on Port 8000');
});

