import React , {Component} from 'react'
import Issue from '../components/Issue'


class IssueDescription extends Component {
    render() {
      return this.props.issueArray.map(issue => (
        <div>
          {issue.title}
        </div>
      ));
    }
  }
  
  export default IssueDescription;
