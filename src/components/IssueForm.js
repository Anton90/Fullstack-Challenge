import React, { Component } from 'react';

export default class IssueForm extends Component {
  state = {
    issue: {}
  };

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(issue) {
    return (
      <div>
        <pre>{issue.data}</pre>
        <h1>Create a new issue</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
        );
      </div>
    );
  }
}
