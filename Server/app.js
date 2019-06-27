const express = require('express');
const app = express(); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
require('dotenv/config'); 

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send("We are on home"); 
})

//Import routes
const issuesRoute = require('./routes/issues');
const usersRoute = require('./routes/users');

app.use('/issues', issuesRoute); 
app.use('/users', usersRoute); 
 

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },
		() => console.log('connected to db')
	);


app.listen(3002, () => {
	console.log('Listening to port 3002');
});