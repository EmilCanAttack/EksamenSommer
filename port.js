const Joi = require('joi')
const express = require('express');
const { send } = require('process');
const app = express();
const port = 2630;
app.use(express.json());
  

// respond with "hello world" when a GET request is made to the homepage
app.get('/forside', (req, res) => {
    res.redirect('/forside.html');
});



const courses = [
    {id: 1, name: "course1"},
    {id: 2, name: "course2"},
    {id: 3, name: "course3"},
]

app.get('/courses', (req, res) => {
    res.send(courses);
});


app.get('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {
        res.status(404).send("404")
    } else {
        res.send(course)
    }
}); 
 



app.post('/courses', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send("Navn er påkrævet og skal være over tre karakter lang")
    };

    const course = {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course)
    res.send(course)
})


app.put('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {
        res.status(404).send("404 - ikke fundet")
    } else {
        res.send(course)
    };

    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send("Navn er påkrævet og skal være over tre karakter lang")
    };

    course.name = req.body.name;
    res.send(course);
});



app.delete('/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {
        res.status(404).send("404")
    } else {
        res.send(course)
    };
    const index = courses.indexOf(course);
    courses.splice(index, 1)
    res.send(course)

}); 
 






app.listen(port, () => {
    console.log(`Lytter på: http://localhost:${port}`)
});





