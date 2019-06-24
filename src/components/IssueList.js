import React , {Component} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'


class IssueList extends Component{
    render() {
        return this.props.todos.map((issueArray) =>(
            <div>
                <ListGroup variant="flush">
                    <ListGroup.Item>{this.props.issueArray}</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}

export default IssueList;
