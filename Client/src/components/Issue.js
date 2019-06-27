<<<<<<< HEAD
import React , {Component} from 'react'

class Issue extends Component{
    render() {
        const titleStyle = {
            fontSize : '20px',
            margin: '15px',
            textDecoration : 'underline',
            color: 'rgb(68, 90, 144)'
        }
        const {category , creator , _id , title , description } = this.props.issue
        return (
            <div>
                <h3 style={titleStyle}> {title }  </h3>
                <p> {description}</p>
                <p>{"Category : " + category}</p>
                <p>{"Creator : " + creator}</p>
                
                <a href={'/issues/'+ _id}>Read more...</a>
                </div>   
            )
    }
=======
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
>>>>>>> origin/master
}

export default Issue;
