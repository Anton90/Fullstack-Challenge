import React, { Component } from 'react';
import axios from 'axios';

class IssueEditingForm extends Component {
  constructor(props) {
    super(props);

    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      _id: '',
      creator: '',
      dateCreated: '',
      daysOpen: '',
      issueID: '',
      votesUp: '',
      votesDown: '',
      title: '',
      description: '',
      category: '',
      priority: '',
      deadline: '',
      assignee: '',
      taggees: []
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
  onSubmit = async () => {
    let now = new Date();
    let today = now.getDate;
    this.setState({ creationDate: today });
    try {
      let result = await axios.patch(
        `/issues/${this.props.match.params._id}`,
        this.state
      );
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount = async () => {
    try {
      //return console.log(this.props.match.params);
      let response = await axios.get(`/issues/${this.props.match.params._id}`);
      // let response = await axios.get(`/issues/5d135c046dae8816a2cc72fc`);
      console.log(response.data);
      console.log(Object.keys(response.data));
      let {
        _id,
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
      } = response.data;

      Object.keys(response.data).forEach(key =>
        this.setState({ [key]: response.data[key] })
      );
      // this.setState({ title: title });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const {
      creator,
      dateCreated,
      votesUp,
      votesDown,
      title,
      description,
      category,
      priority,
      deadline,
      assignee,
      taggees
    } = this.state;
    console.log(`1: ${dateCreated}`);
    const parsedDateCreated = new Date(dateCreated);
    const displayDateCreated = parsedDateCreated.toLocaleDateString('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const parsedDateDeadline = new Date(deadline);
    const displayDateDeadline = parsedDateDeadline.toLocaleDateString('en', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    let now = new Date();
    let daysOpen = Math.ceil(
      Math.abs(now.getTime() - parsedDateCreated.getTime()) / (1000 * 3600 * 24)
    );

    console.log(displayDateCreated);
    return (
      <form className='container'>
        <h1>Update issue</h1>

        <div className='form-group row'>
          <label htmlFor='creator' className='col-2 col-form-label text-right '>
            Creator
          </label>
          <div className='col-4'>
            <span className='form-control'>{creator}</span>
          </div>

          <label htmlFor='votesUp' className='col-2 col-form-label text-right'>
            Votes up
          </label>
          <div className='col-1'>
            <span className='form-control'>{votesUp}</span>
          </div>
          <label
            htmlFor='votesDown'
            className='col-2 col-form-label text-right'
          >
            Votes down
          </label>
          <div className='col-1'>
            <span className='form-control'>{votesDown}</span>
          </div>
        </div>
        <div className='form-group row'>
          <label
            htmlFor='dateCreated'
            className='col-2 col-form-label text-right'
          >
            Created on
          </label>
          <div className='col-4'>
            <span className='form-control'>{displayDateCreated}</span>
          </div>
          <label htmlFor='daysOpen' className='col-2 col-form-label text-right'>
            Days open
          </label>
          <div className='col-4'>
            <span className='form-control'>{daysOpen}</span>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='title' className='col-2 col-form-label text-right'>
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
              onChange={this.handleInputChange}
            />
            <span id='titleHelpBlock' className='form-text text-muted'>
              Enter a title for this issue
            </span>
          </div>
        </div>
        <div className='form-group row'>
          <label
            htmlFor='description'
            className='col-2 col-form-label text-right'
          >
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
              onChange={this.handleInputChange}
            />
            <span id='descriptionHelpBlock' className='form-text text-muted'>
              Issue description
            </span>
          </div>
        </div>
        <div className='form-group row'>
          <label htmlFor='category' className='col-2 col-form-label text-right'>
            Category
          </label>
          <div className='col-10'>
            <select
              id='category'
              name='category'
              className='custom-select'
              aria-describedby='categoryHelpBlock'
              value={category}
              onChange={this.handleInputChange}
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
          <label htmlFor='priority' className='col-2 col-form-label text-right'>
            Priority
          </label>
          <div className='col-4'>
            <select
              id='priority'
              name='priority'
              className='custom-select'
              aria-describedby='priorityHelpBlock'
              required='required'
              value={priority || ''}
              onChange={this.handleInputChange}
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

          <label htmlFor='deadline' className='col-2 col-form-label text-right'>
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
                value={deadline || ''}
                onChange={this.handleInputChange}
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
          <label htmlFor='assignee' className='col-2 col-form-label text-right'>
            Assign to
          </label>
          <div className='col-4'>
            <select
              id='assignee'
              name='assignee'
              className='custom-select'
              aria-describedby='assigneeHelpBlock'
              value={assignee}
              onChange={this.handleInputChange}
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

          <label htmlFor='taggees' className='col-2 col-form-label text-right'>
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
              onChange={this.handleInputChange}
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
            <span
              onClick={() => this.onSubmit()}
              name='submit'
              className='btn btn-primary mr-5'
            >
              Submit
            </span>
            <span
              onClick={() => this.onCancel()}
              name='cancel'
              className='btn btn-primary'
            >
              Cancel
            </span>
          </div>
        </div>
      </form>
    );
  }
}
export default IssueEditingForm;
