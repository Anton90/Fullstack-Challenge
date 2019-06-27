import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Issue extends Component {
  render() {
    const { _id, title, description } = this.props.issue;
    return (
      <ListGroup.Item>
        {_id}
        {title}
        {description}
      </ListGroup.Item>
    );
  }
}

export default Issue;
