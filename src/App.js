import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import ToDoList from './ToDoList'

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // };

  render() {

    return (
      <div className="App">
        <Header />
        <ToDoList />
      </div>
    )
  }
}

export default App;
