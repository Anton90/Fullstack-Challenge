import React, { Component } from 'react';
import axios from 'axios';

class IssueDescription extends Component {
  state = {
   issue : {

   }
  };
  componentDidMount = async () => {
    try {
      let response = await axios.get(`/issues/${this.props.match.params._id}`);
      const data = response.data;
      this.setState({issue : data})
    } catch (error) {
      console.error(error);
    }
  };
  render(data) {
    const {
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
     } = this.state.issue
     
     const titleStyle = {
       fontFamily: 'Playfair Display',
       fontSize : '18px'
     }
    return (
      <div>

        <h1>Issue Details</h1>
        <h3 style={titleStyle}>{title}</h3>
        <p>{description}</p>
        <p>{category}</p>
        <p>{dateCreated}</p>
      </div>
    );
  }
}
export default IssueDescription;
