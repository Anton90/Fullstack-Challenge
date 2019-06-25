import React, { Component } from 'react';

class IssueCreationForm extends Component {
  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      id: '',
      title: '',
      description: '',
      category: '',
      priority: '',
      deadline: '',
      assignee: '',
      taggee: ''
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
        <h1>Create new issue</h1>

        <div className='form-group row'>
          <label for='title' className='col-2 col-form-label'>
            Title
          </label>
          <div className='col-10'>
            <input
              id='title'
              name='title'
              placeholder='Issue title'
              type='text'
              className='form-control'
              aria-describedby='titleHelpBlock'
              required='required'
            />
            <span id='titleHelpBlock' className='form-text text-muted'>
              Enter a title for this issue
            </span>
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
    );
  }
}
export default IssueCreationForm;
