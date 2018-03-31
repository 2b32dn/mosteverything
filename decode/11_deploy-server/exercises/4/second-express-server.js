const express = require('express')
const app = express()
app.get('/', (req, res) => {
    fetch('http://localhost:3000')
        .then(() =>
            res.send('You finished the exercise!'))
        .catch(() =>
            res.send('ERROR: the other server is not running!'))
            
})

app.listen(4000, () => console.log('Example app listening on port 4000!'))