require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let mv = require(__dirname + '/controllers/movie_controllers');

app.use(bodyParser.json());//middleware

app.post('/api/movies', mv.create);
app.get('/api/movies', mv.read);
app.put('/api/movies/:id', mv.update);
app.delete('/api/movies/:id', mv.delete);




let {SERVER_PORT, API_KEY}=process.env

// app.use(express.static(__dirname + '/../public/build'));













app.listen(SERVER_PORT, ()=>{
    console.log(`listening on port ${SERVER_PORT}`)
})

