const express = require('express');
const router = express.Router();
const Issue = require('../models/Issue'); 

//Gets all the issues
router.get('/', async (req, res) => {
	 try 
	 {
	 	const issues = await Issue.find(); 
	 	res.json(issues); 
	 } 
	 catch(err) 
	 {
	 	res.json({message: err}); 
	 }
})

//Submits an issue
router.post('/', async (req, res) => {
	const issue = new Issue({
		title: req.body.title,
		description: req.body.description
	});

	try 
	{
		const savedIssue = await issue.save();
		res.json(savedIssue);
	} 
	catch(err) {
		res.json({ message: err}); 
	}
});

//Gets a specific issue
router.get('/:issueId', async (req, res) => {
	try 
	{
		const post = await Issue.findById(req.params.issueId);
		res.json(post);
	}
	catch(err) 
	{
		res.json({ message: err}); 
	}
});


//Update an issue
router.patch('/:issueId', async (req, res) => {
	try 
	{
		const updatedIssue = await Issue.updateOne({_id: req.params.issueId}, 
			{$set: {title: req.body.title}}); 
		res.json(updatedIssue); 
	}
	catch(err) 
	{
		res.json({ message: err});
	}
});

//Delete an issue
router.delete('/:issueId', async (req, res) => {
	try 
	{
		const deletedIssue = await Issue.remove({_id: req.params.issueId});
		res.json(deletedIssue);
	}
	catch(err) 
	{
		res.json({ message: err}); 
	}
});





module.exports = router; 