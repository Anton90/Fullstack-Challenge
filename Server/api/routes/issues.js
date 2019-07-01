const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth');

const Issue = require('../models/issue');

router.get('/', (req, res, next) => {
    Issue.find()
        .select('title status _id')
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                const response = {
                    count: docs.length,
                    issues: docs.map(doc => {
                        return {
                            issue: doc,
                            request: {
                                type: 'GET',
                                url: 'http://localhost:3000/issues/' + doc._id
                            }
                        }
                    })
                }
                res.status(200).json({
                    response
                });
            } else {
                res.status(404).json({
                    message: 'No issues found'
                });
            }

        })
        .catch(err => {
            error: err
        });

});

router.post('/', checkAuth, (req, res, next) => {

    const issue = new Issue({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        creator: req.body.creator,
        dateCreated: req.body.dateCreated,
        deadline: req.body.deadline,
        description: req.body.description,
        category: req.body.category,
        priority: req.body.priority,
        assignee: req.body.assignee,
        taggees: req.body.taggees,
        status: req.body.status
    });
    issue
        .save()
        .then(result => {
            
            res.status(201).json({
                message: 'Issues created successfully',
                createdIssue: {
                    issue: result,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/issues/' + result._id
                    }

                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });

        });
});


router.get('/:issueId', (req, res, next) => {
    const id = req.params.issueId;
    Issue.findById(id)
        .select('_id title creator dateCreated deadline description category priority assignee taggees status')
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json({
                    issue: doc,
                    request: {
                        type: 'GET',
                        scope: 'Get_All_Issues',
                        url: 'http://localhost:3000/issues'
                    }
                });
            } else {
                res.status(404).json({
                    message: 'No valid entry found'
                });
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

});
router.patch('/:issueId',  checkAuth, (req, res, next) => {
    const id = req.params.issueId;
    const updateOps = {};
    console.log('Body' + req.body.propName);
    for (const ops of req.body) {
        console.log(ops);
        updateOps[ops.propName] = ops.value;
    }
    Issue.updateOne({
            _id: id
        }, {
            $set: updateOps
        })
        .exec()
        .then(result => {

            res.status(200).json({
                message: 'Issue updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/issues/' + id
                }
            });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

});

router.delete('/:issueId', checkAuth, (req, res, next) => {
    const id = req.params.issueId;
    Issue.deleteOne({
            _id: id
        })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Issue deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:3000/issues',
                    body: {
                        title: 'String',
                        description: 'String',
                        creator: 'String'
                    }

                }
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            });
        });

});
module.exports = router;