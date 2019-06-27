const express = require('express');
const app = express(); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');
require('dotenv/config'); 

app.use(bodyParser.json());

app.get('/', (req, res) => {
	res.send("We are on home"); 
})

app.use((req , res , next) => {
	res.header('Allow-Control-Allow-Origin' , '*');
	res.header(
	'Allow-Control-Allow-Headers' ,
	'origin , Content-type , Accept , Authentication'
	);
	
	if(req.method == 'OPTIONS'){
	res.header('Allow-Control-Allow-Headers' , 'PUT , POST , GET , DELETE, PATCH');
	return res.status(200).json({});
	}
	next();
})

//Import routes
const issuesRoute = require('./routes/issues');
const usersRoute = require('./routes/users');

app.use('/api/issues', issuesRoute); 
app.use('/api/users', usersRoute); 
 

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },
		() => console.log('connected to db')
	);


app.listen(3002, () => {
	console.log('Listening to port 3002');
});