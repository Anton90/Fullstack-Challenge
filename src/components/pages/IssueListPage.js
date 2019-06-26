import React , {Component} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


class IssueListPage extends Component{
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

export default IssueListPage;
