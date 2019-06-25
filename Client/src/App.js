import React from 'react'
import IssueList from './components/IssueList'
import './App.css';

class App extends Component {
  state  = {
    issueArray : [
      {
        id: uuid.v4(),
        title:'Empty Plates ',
        description:'Empty plates in the refrigerator'
      },
      {
       id: uuid.v4(),
        title:'Empty Plates ',
        description:'Empty plates in the refrigerator'
      }
    ]
  }
  render(){
      return (
        <div className="App">
        <IssueList key={issueArray.id} issueArray={this.state.issueArray} />
        </div>
      );
    }
}

export default App;
