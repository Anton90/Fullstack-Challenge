const express = require('express');

const app = express();

//ROUTES

//Redirect route
app.get('/', (req, res) => { 
	res.send('We are on home');
});

//Index route
app.get('/issues', (req, res) => {
	res.send('We are on issues'); 
});

//Create route
app.post('/issues', (req, res) => {
	res.send('Add a new issue'); 
});

//Read route
app.get('/issues/:id', (req, res) => {
	res.send('Get a single issue'); 
});

//Update route
app.patch('/issues/:id', (req, res) => {
	res.send('Edit an existing issue');
})

//Delete route
app.delete('/issues/:id', (req, res) => {
	res.send('Delete an existing issue'); 
});

app.listen(3000); 


//Still to do:
// - Votes route
// - Comment route