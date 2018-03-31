const express = require('express')
const app = express()
const fetch = require('node-fetch');



app.get('/', (req, res) => {
    fetch('http://localhost:4000')
        .then(() =>
            res.send('You finished the exercise!'))
        .catch(() =>
            res.send('ERROR: the other server is not running!'))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))