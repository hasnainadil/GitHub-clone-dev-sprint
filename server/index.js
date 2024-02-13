// a simple hello world sender to test the server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.json({ message: 'Hello World!' });
    // res.redirect('/nothing');
    });

app.get('/nothing', (req, res) => {
    // res.send('Nothing here!');
    res.redirect('/');
    });

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);