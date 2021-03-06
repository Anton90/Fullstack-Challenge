const express = require('express');
const router = express.Router();
const Issue = require('../models/Issue');

//Gets all the issues
router.get('/', async (req, res) => {
  try {
    const issues = await Issue.find();
    res.json(issues);
  } catch (err) {
    res.json({ message: err });
  }
});

//Submits an issue
router.post('/', async (req, res) => {
  const issue = new Issue({
    title: req.body.title,
    creator: req.body.creator,
    dateCreated: req.body.dateCreated,
    deadline: req.body.deadline,
    description: req.body.description,
    category: req.body.category,
    priority: req.body.priority,
    assignee: req.body.assignee,
    taggees: req.body.taggees
  });

  try {
    const savedIssue = await issue.save();
    res.json(savedIssue);
  } catch (err) {
    res.json({ message: err });
  }
});

//Gets a specific issue
router.get('/:_id', async (req, res) => {
  try {
    const post = await Issue.findById(req.params._id);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//Update an issue
router.patch('/:_id', async (req, res) => {
  try {
    const updatedIssue = await Issue.updateOne(
      { _id: req.params._id },
      {
        $set: {
          title: req.body.title,
          creator: req.body.creator,
          dateCreated: req.body.dateCreated,
          daysOpen: req.body.daysOpen,
          deadline: req.body.deadline,
          description: req.body.description,
          category: req.body.category,
          priority: req.body.priority,
          assignee: req.body.assignee,
          taggees: req.body.taggees,
          votesUp: req.body.votesUp,
          votesDown: req.body.votesDown
        }
      }
    );
    res.json(updatedIssue);
  } catch (err) {
    res.json({ message: err });
  }
});

//Delete an issue
router.delete('/:_id', async (req, res) => {
  try {
    const deletedIssue = await Issue.remove({ _id: req.params._id });
    res.json(deletedIssue);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
