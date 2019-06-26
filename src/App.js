import React, { Component } from 'react';
import IssueCreationForm from './components/IssueCreationForm';
import IssueEditingForm from './components/IssueEditingForm';

export default class App extends Component {
  state = {
    issue: {
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

  render() {
    return (
      <div className='App'>
        <IssueCreationForm />
        <hr />
        <IssueEditingForm issue={this.state.issue} />
      </div>
    );
  }
}
