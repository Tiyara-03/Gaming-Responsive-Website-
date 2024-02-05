const express = require("express");
const path = require("path");
const fs = require("fs");
const port = 8000;
const app = express();

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) //For serving static files
app.use(express.urlencoded())

//PUG SPECIFIC STUFF
app.set('view engine', 'pug') //set the template engine as pug

app.set('views', path.join(__dirname, 'views')); //set the views directory

//ENDPOINT

app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.pug', params);
})

// app.get('/conctact', (res,req)=>{
//     const diva = {}
//     res.status(200).render('contact.pug',diva);
// })

//START THE SERVER

app.listen(port, ()=>{
    console.log(`The application started sucessfully on port ${port}`);
});