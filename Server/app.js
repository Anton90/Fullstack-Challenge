const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('We are on home');
});
=======
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

>>>>>>> 86de8c637511cd9bd3bfe326efc6e2d43b09427a
//Import routes
const issuesRoute = require('./routes/issues');
const usersRoute = require('./routes/users');

<<<<<<< HEAD
app.use('/issues', issuesRoute);
app.use('/users', usersRoute);
=======
app.use('/api/issues', issuesRoute); 
app.use('/api/users', usersRoute); 
 
>>>>>>> 86de8c637511cd9bd3bfe326efc6e2d43b09427a

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connected to db')
);

app.listen(4000, () => {
  console.log('Listening to port 4000');
});
