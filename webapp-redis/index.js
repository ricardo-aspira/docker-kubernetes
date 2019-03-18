const express = require('express');
const redis = require('redis');
const process = require('process');

/*
redis-server - is the name of the service/container declared on docker-compose
6379 - default Redis port
*/
const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

client.exists('visits', (err, reply) => {
    if (reply != 1) {
        client.set('visits', 0);
    }
});

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

//exiting the application when accessing this route
app.get('/abend', (req, res) => {
    /* Exiting with a status code
     * 0 - exited and everything is OK
     * 1, 2, 3 etc - exited because something went wrong
     * With this, docker will decide to restart container or not
     */
    process.exit(1);
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});