import React , {Component} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


class Issue extends Component{
    render() {
        const {id , title , description } = this.props.issue
        return (
            <ListGroup.Item>
            {id}
            {title}
            {description}
            </ListGroup.Item>
        );
    }
}

export default Issue;
