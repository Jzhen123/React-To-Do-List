import React from 'react';
import Header from './Header'
import Input from './ToDoInput'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // };

  render() {

    return (
      <div className="App">
        <Header />
        <Input />
      </div>
    )
  }
}

export default App;
