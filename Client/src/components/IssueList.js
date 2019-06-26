import React , {Component} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Issue from '../components/Issue'

// import ListGroup from 'react-bootstrap/ListGroup'

class IssueList extends Component {
  render() {
    return this.props.issueArray.map(issue => (
      <ListGroup>
        <Issue key={issue.id} issue={issue} />
      </ListGroup>
    ));
  }
}

export default IssueList;
