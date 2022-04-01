const express = require('express');
const app = express();
const port = 2630;

app.listen(port, () => {
    console.log(`Lytter på: http://localhost:${port}`)
})