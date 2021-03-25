import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Input from './ToDoInput'
import List from './List'

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // };

  render() {

    return (
      <div className="App">
        <Header />
        <Input />
        <List />
      </div>
    )
  }
}

export default App;
