import React, { Component } from 'react';

class IssueEditingForm extends Component {
  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    const itemToEdit = props.item;
    this.state = {
      mode: props.mode,
      id: itemToEdit.id,
      title: itemToEdit.title,
      description: itemToEdit.description,
      category: itemToEdit.category,
      priority: itemToEdit.priority,
      deadline: itemToEdit.deadline,
      assignee: itemToEdit.assignee,
      taggee: itemToEdit.taggee
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  onCancel() {
    this.props.onCancel();
  }
  onSubmit() {
    if (this.validator.validateInputs(this.state)) {
      this.props.onSubmit(this.state);
    }
  }

  render() {
    return (
      <form className='container'>
        <h1>Update issue</h1>

        <div className='form-group row'>
          <label for='creator' className='col-2 col-form-label'>
            Creator
          </label>
          <div className='col-3'>
            <input
              id='creator'
              name='creator'
              type='text'
              className='form-control'
              aria-describedby=''
              value={this.state.creator}
              disabled
            />
          </div>

          <label for='dateCreated' className='col-2 col-form-label'>
            Created on
          </label>
          <div className='col-2'>
            <input
              id='dateCreated'
              name='dateCreated'
              type='text'
              className='form-control'
              aria-describedby=''
              value={this.state.dateCreated}
              disabled
            />
          </div>
          <label for='daysOpen' className='col-2 col-form-label'>
            Days open
          </label>
          <div className='col-1'>
            <input
              id='daysOpen'
              name='daysOpen'
              type='text'
              className='form-control'
              aria-describedby=''
              value={this.state.daysOpen}
              disabled
            />
          </div>
        </div>
        <div className='form-group row'>
          <label for='issueId' className='col-2 col-form-label'>
            Issue ID
          </label>
          <div className='col-2'>
            <input
              id='issueId'
              name='issueId'
              type='text'
              className='form-control'
              aria-describedby=''
              value={this.state.issueID}
              disabled
            />
          </div>

          <label for='votesUp' className='col-2 col-form-label'>
            Votes up
          </label>
          <div className='col-2'>
            <input
              id='votesUp'
              name='votesUp'
              type='text'
              className='form-control'
              aria-describedby=''
              value={this.state.votesUp}
              disabled
            />
          </div>
          <label for='votesDown' className='col-2 col-form-label'>
            Votes down
          </label>
          <div className='col-2'>
            <input
              id='votesDown'
              name='votesDown'
              type='text'
              className='form-control'
              aria-describedby=''
              value={this.state.votesDown}
              disabled
            />
          </div>
        </div>

        <div className='form-group row'>
          <label for='description' className='col-2 col-form-label'>
            Description
          </label>
          <div className='col-10'>
            <textarea
              id='description'
              name='description'
              placeholder='Issue description'
              cols='40'
              rows='5'
              className='form-control'
              aria-describedby='descriptionHelpBlock'
              required='required'
            />
            <span id='descriptionHelpBlock' className='form-text text-muted'>
              Issue description
            </span>
          </div>
        </div>
        <div className='form-group row'>
          <label for='category' className='col-2 col-form-label'>
            Category
          </label>
          <div className='col-10'>
            <select
              id='category'
              name='category'
              className='custom-select'
              aria-describedby='categoryHelpBlock'
            >
              <option value='rabbit'>Rabbit</option>
              <option value='duck'>Duck</option>
              <option value='fish'>Fish</option>
            </select>
            <span id='categoryHelpBlock' className='form-text text-muted'>
              Issue category
            </span>
          </div>
        </div>
        <div className='form-group row'>
          <label for='priority' className='col-2 col-form-label'>
            Priority
          </label>
          <div className='col-4'>
            <select
              id='priority'
              name='priority'
              className='custom-select'
              aria-describedby='priorityHelpBlock'
              required='required'
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
            <span id='priorityHelpBlock' className='form-text text-muted'>
              Set priority
            </span>
          </div>

          <label for='deadline' className='col-2 col-form-label'>
            Deadline
          </label>
          <div className='col-4'>
            <div className='input-group'>
              <input
                id='deadline'
                name='deadline'
                placeholder='YYYY/MM/DD'
                type='text'
                className='form-control'
                aria-describedby='deadlineHelpBlock'
              />
              <div className='input-group-append'>
                <div className='input-group-text'>
                  <i className='fa fa-calendar-check-o' />
                </div>
              </div>
            </div>
            <span id='deadlineHelpBlock' className='form-text text-muted'>
              Set deadline
            </span>
          </div>
        </div>
        <div className='form-group row'>
          <label for='assignee' className='col-2 col-form-label'>
            Assign to
          </label>
          <div className='col-4'>
            <select
              id='assignee'
              name='assignee'
              className='custom-select'
              aria-describedby='assigneeHelpBlock'
            >
              <option value='me'>Me</option>
              <option value='you'>You</option>
              <option value='them'>Them</option>
            </select>
            <span id='assigneeHelpBlock' className='form-text text-muted'>
              Select user ...
            </span>
          </div>

          <label for='taggees' className='col-2 col-form-label'>
            Tag to
          </label>
          <div className='col-4 '>
            <select
              id='taggees'
              name='taggees'
              className='custom-select'
              aria-describedby='taggeesHelpBlock'
              multiple='multiple'
            >
              <option value='he'>He</option>
              <option value='she'>She</option>
              <option value='them'>Them</option>
            </select>
            <span id='taggeesHelpBlock' className='form-text text-muted'>
              Select users ...
            </span>
          </div>
        </div>
        <div className='form-group row'>
          <div className='offset-2 col-10'>
            <button
              onClick={() => this.onSubmit()}
              name='submit'
              type='submit'
              className='btn btn-primary  mr-5'
            >
              Submit
            </button>
            <button
              onClick={() => this.onCancel()}
              name='cancel'
              className='btn btn-primary'
            >
              Cancel
            </button>
          </div>
        </div>
      </form>

      //         value={this.state.title}
      //         name='title'
      //         maxLength='100'
      //         required
      //         onChange={this.handleInputChange}
      //         placeholder='issue title'
      //       />
      //     </label>
      //   </div>
      //   <div>
      //     <label className='field-name'>
      //       Description:
      //       <br />
      //       <textarea
      //         value={this.state.description}
      //         name='description'
      //         onChange={this.handleInputChange}
      //         placeholder='description'
      //       />
      //     </label>
      //   </div>
      //   <div>
      //     <label className='field-name'>
      //       Category
      //       <br />
      //       <input
      //         value={this.state.category}
      //         name='category'
      //         onChange={this.handleInputChange}
      //         placeholder='category'
      //       />
      //     </label>
      //   </div>
      //   <div>
      //     <label className='field-name'>
      //       Priority:
      //       <br />
      //       <input
      //         value={this.state.priority}
      //         name='priority'
      //         onChange={this.handleInputChange}
      //         placeholder='priority'
      //       />
      //     </label>
      //   </div>
      //   <div>
      //     <label className='field-name'>
      //       Deadline
      //       <br />
      //       <input
      //         value={this.state.deadline}
      //         name='deadline'
      //         type='date'
      //         onChange={this.handleInputChange}
      //         placeholder='deadline'
      //       />
      //     </label>
      //   </div>
      //   <div>
      //     <label className='field-name'>
      //       Assign to:
      //       <br />
      //       <input
      //         value={this.state.assignee}
      //         name='assignee'
      //         onChange={this.handleInputChange}
      //         placeholder='assignee'
      //       />
      //     </label>
      //   </div>
      //   <div>
      //     <label className='field-name'>
      //       Tag to
      //       <br />
      //       <input
      //         value={this.state.taggee}
      //         name='taggee'
      //         onChange={this.handleInputChange}
      //         placeholder='taggee'
      //       />
      //     </label>
      //   </div>
      //   <br />
      //   <button onClick={() => this.onSubmit()}>
      //     {this.props.item.id == null ? 'Submit' : 'Update '}
      //   </button>
      //   <button onClick={() => this.onCancel()}>Cancel</button>
      // </div>
    );
  }
}
export default IssueEditingForm;
