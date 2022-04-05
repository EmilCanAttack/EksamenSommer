const express = require('express');
const { kill } = require('process');
const app = express();
const port = 2630;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('Hej verden')
  })



app.listen(port, () => {
    console.log(`Lytter på: http://localhost:${port}`)
})


console.log("HEJ")

