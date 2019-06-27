import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IssueList from './components/IssueList';
import IssueCreationForm from './components/IssueCreationForm';
import IssueEditingForm from './components/IssueEditingForm';
import IssueDescription from './components/IssueDescription';


import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    issueArray: [],
    mockIssue: {
      creator: 'Mickey Mouse',
      dateCreated: '2019/06/25',
      daysOpen: '1',
      issueID: 1,
      votesUp: '10',
      votesDown: '0',
      title: 'Out of garbage bags',
      description: 'We have no more garbage bags',
      category: 'housekeeping',
      priority: '5',
      deadline: '2019/06/29',
      assignee: 'tl',
      taggees: ['fob', 'em']
    }
  };
  // componentDidMount = async () => {
  //   axios.get('/issues').then(res => console.log(res));
  // };

  componentDidMount = async () => {
    try {
      let response = await axios.get('/issues');
      let data = response.data;
      this.setState({issueArray : data})
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Route
            exact
            path='/'
            render={props => (
              <React.Fragment>
                <h1>Issue Dash Board</h1>
              </React.Fragment>
            )}
          />
          <Route
            exact
            path='/issues'
            render={props => (
              <React.Fragment>
                <IssueList issueArray={this.state.issueArray} />
              </React.Fragment>
            )}
          />

          <Route
            exact
            path='/issues/new'
            render={props => (
              <React.Fragment>
                <IssueCreationForm />
              </React.Fragment>
            )}
          />
          <Route
            path='/issues/:id/edit'
            exact
            render={props => (
              <React.Fragment>
                <IssueEditingForm issue={this.state.mockIssue} />
              </React.Fragment>
            )}
          />
          <Route
              path='/issues/:id'
              exact
              render={props => (
                  <IssueDescription issueArray={this.state.issueArray} />
                )
              }
          />
        </div>
      </Router>
    );
  }
}

export default App;
