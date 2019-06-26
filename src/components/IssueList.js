import React from 'react'
import Issue from './Issue';

class IssueList extends Component{
    render() {
        return this.props.issueArray.map((issue) =>(
            <Issue key={issue.id} issue={issue}  />
          ));
    }
}

export default IssueList;
