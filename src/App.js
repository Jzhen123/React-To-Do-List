import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import ToDoList from './ToDoList'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.tasks = [
      { text: 'Jimmy' },
      { text: 'Joe' },
      { text: 'Jacob' },
      { text: 'Joy' },
  ];
  };

  render() {

    return (
      <div className="App">
        <Header />
        <ToDoList
        tasks={this.tasks}
        />
      </div>
    )
  }
}

export default App;
