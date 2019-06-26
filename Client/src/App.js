import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IssueList from './components/IssueList';
import IssueCreationForm from './components/IssueCreationForm';
import IssueEditingForm from './components/IssueEditingForm';

// import axios from 'axios'
import './App.css';

class App extends Component {
  state = {
    issueArray: [
      {
        id: 1,
        title: 'Empty Plates Monday',
        description: 'Empty plates in the refrigerator'
      },
      {
        id: 2,
        title: 'Empty Plates Tuesday ',
        description: 'Empty plates in the refrigerator'
      }
    ],
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
  // componentDidMount(){
  //   axios.get('rest api url')
  //   .then(res => this.setState({issueArray : res.data}))
  // }
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
            path='/IssueList'
            component={IssueList}
            render={() => (
              <React.Fragment>
                <IssueList issueArray={this.state.issueArray} />
              </React.Fragment>
            )}
          />

          <Route
            path='/Issues/new'
            component={IssueCreationForm}
            render={props => (
              <React.Fragment>
                <IssueCreationForm />
              </React.Fragment>
            )}
          />
          <Route
            path='/Issues/1'
            component={IssueEditingForm}
            render={props => (
              <React.Fragment>
                <IssueEditingForm issue={this.state.mockIssue} />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
