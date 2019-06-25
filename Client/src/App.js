import React , {Component} from 'react'
import {BrowserRouter as Router , Route } from 'react-router-dom'
import IssueList from './components/IssueList'
import IssueListPage from './components/pages/IssueListPage'
// import axios from 'axios'
import './App.css';

class App extends Component {
  state  = {
    issueArray : [
      {
        id: 1,
        title:'Empty Plates Monday',
        description:'Empty plates in the refrigerator'
      },
      {
       id: 2,
        title:'Empty Plates Tuesday ',
        description:'Empty plates in the refrigerator'
      }
    ]
  }
  // componentDidMount(){
  //   axios.get('rest api url')
  //   .then(res => this.setState({issueArray : res.data}))
  // }
  render(){
      return (
        <Router>
          <div className="App">
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <h1>Issue Dash Board</h1>
              </React.Fragment>
            )} />
            <Route path="/IssueListPage" component={IssueListPage} render={props =>(
              <React.Fragment>
                <IssueList  issueArray={this.state.issueArray} />
              </React.Fragment>
            )} />
            
          </div>
        </Router>
      );
    }
}

export default App;
