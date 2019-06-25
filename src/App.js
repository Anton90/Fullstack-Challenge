import React from 'react';
import IssueCreationForm from './components/IssueCreationForm';
import IssueEditingForm from './components/IssueEditingForm';

function App() {
  return (
    <div className='App'>
      <IssueCreationForm />
      <hr />
      <IssueEditingForm
        item={{
          id: 7,
          title: 'title from prop',
          description: 'description from prop',
          category: 'category from prop',
          priority: 'priority from prop',
          deadline: 'deadline from prop',
          assignee: 'assignee from prop',
          taggee: 'taggee from prop'
        }}
      />
    </div>
  );
}

export default App;
