import React, { Component } from 'react';

class IssueEditingForm extends Component {
  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    // const issueToEdit = props.issue;
    // this.state = {
    //   id: itemToEdit.id,
    //   title: itemToEdit.title,
    //   description: itemToEdit.description,
    //   category: itemToEdit.category,
    //   priority: itemToEdit.priority,
    //   deadline: itemToEdit.deadline,
    //   assignee: itemToEdit.assignee,
    //   taggee: itemToEdit.taggee
    // };
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
    const {
      creator,
      dateCreated,
      daysOpen,
      issueID,
      votesUp,
      votesDown,
      title,
      description,
      category,
      priority,
      deadline,
      assignee,
      taggees
    } = this.props.issue;
    return (
      <form className='container'>
        <h1>Update issue</h1>

        <div className='form-group row'>
          <label for='creator' className='col-2 col-form-label text-right '>
            Creator
          </label>
          <div className='col-2'>
            <span className='form-control'>{creator}</span>
          </div>

          <label for='dateCreated' className='col-2 col-form-label text-right'>
            Created on
          </label>
          <div className='col-2'>
            <span className='form-control'>{dateCreated}</span>
          </div>
          <label for='daysOpen' className='col-2 col-form-label text-right'>
            Days open
          </label>
          <div className='col-2'>
            <span className='form-control'>{daysOpen}</span>
          </div>
        </div>
        <div className='form-group row'>
          <label for='issueId' className='col-2 col-form-label text-right'>
            Issue ID
          </label>
          <div className='col-2'>
            <span className='form-control'>{issueID}</span>
          </div>

          <label for='votesUp' className='col-2 col-form-label text-right'>
            Votes up
          </label>
          <div className='col-2'>
            <span className='form-control'>{votesUp}</span>
          </div>
          <label for='votesDown' className='col-2 col-form-label text-right'>
            Votes down
          </label>
          <div className='col-2'>
            <span className='form-control'>{votesDown}</span>
          </div>
        </div>
        <div className='form-group row'>
          <label for='title' className='col-2 col-form-label text-right'>
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
              value={title}
            />
            <span id='titleHelpBlock' className='form-text text-muted'>
              Enter a title for this issue
            </span>
          </div>
        </div>
        <div className='form-group row'>
          <label for='description' className='col-2 col-form-label text-right'>
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
              value={description}
            />
            <span id='descriptionHelpBlock' className='form-text text-muted'>
              Issue description
            </span>
          </div>
        </div>
        <div className='form-group row'>
          <label for='category' className='col-2 col-form-label text-right'>
            Category
          </label>
          <div className='col-10'>
            <select
              id='category'
              name='category'
              className='custom-select'
              aria-describedby='categoryHelpBlock'
              value={category}
            >
              <option value='ua'>Unassigned</option>
              <option value='administration'>Administration</option>
              <option value='building'>Building</option>
              <option value='curriculum'>Curriculum</option>
              <option value='equipment'>Equipment</option>
              <option value='housekeeping'>Housekeeping</option>
            </select>
            <span id='categoryHelpBlock' className='form-text text-muted'>
              Issue category
            </span>
          </div>
        </div>
        <div className='form-group row'>
          <label for='priority' className='col-2 col-form-label text-right'>
            Priority
          </label>
          <div className='col-4'>
            <select
              id='priority'
              name='priority'
              className='custom-select'
              aria-describedby='priorityHelpBlock'
              required='required'
              value={priority}
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

          <label for='deadline' className='col-2 col-form-label text-right'>
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
                value={deadline}
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
          <label for='assignee' className='col-2 col-form-label text-right'>
            Assign to
          </label>
          <div className='col-4'>
            <select
              id='assignee'
              name='assignee'
              className='custom-select'
              aria-describedby='assigneeHelpBlock'
              value={assignee}
            >
              <option value='ua'>Unassigned</option>
              <option value='tl'>Thijs</option>
              <option value='kf'>Kevin</option>
              <option value='fdc'>Free</option>
            </select>
            <span id='assigneeHelpBlock' className='form-text text-muted'>
              Select user ...
            </span>
          </div>

          <label for='taggees' className='col-2 col-form-label text-right'>
            Tag to
          </label>
          <div className='col-4 '>
            <select
              id='taggees'
              name='taggees'
              className='custom-select'
              aria-describedby='taggeesHelpBlock'
              multiple='multiple'
              value={taggees}
            >
              <option value='ua'>Unassigned</option>
              <option value='tl'>Thijs</option>
              <option value='kf'>Kevin</option>
              <option value='fdc'>Free</option>
              <option value='em'>Emilie</option>
              <option value='ae'>Anton</option>
              <option value='fob'>Fiona</option>
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
