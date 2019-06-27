const express = require('express');
const router = express.Router();
const User = require('../models/User'); 


//Gets all the users
router.get('/', async (req, res) => {
	try 
	{
		const users = await User.find();
		res.json(users);
	} 
	catch(err) 
	{
		res.json({ message: err}); 
	}
});


//Submits a new user
router.post('/', async (req, res) => {
	const user = new User({
		name: req.body.name,
		password: req.body.password,
		email: req.body.email,
		notifications: req.body.notifications
	});

	try 
	{
		const savedUser = await user.save();
		res.json(savedUser);
	}
	catch(err) 
	{
		res.json({ message: err}); 
	}
})


//Gets a specific user
//router.get('/:_id', )


module.exports = router; 