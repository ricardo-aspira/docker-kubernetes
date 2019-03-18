// Changes make inside this file are not reflected inside the container,
// only when rebuilding the image (docker build -t ricardosouzamorais/simpleweb .)
// we will be able to get it
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi there, Aspira!');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
})