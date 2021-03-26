import React from 'react';
import Task from './Task';
import Input from './Input';
class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.tasks = [];

        this.handler = this.handler.bind(this)
    }

    // Function for the Input component to be able to "send" props back up to its parent
    // Not too comfortable on how this is possbile still
    handler(tasks) {
        this.setState({
            tasks: tasks
        })
    }

    render() {
        return (
            // Creates the Input and Task Components
            <>
                <Input 
                tasks={this.tasks} 
                handler = {this.handler}
                />
                
                <ul className="list-group ps-4 pe-4 border-top-0 mb-4">
                    <Task tasks={this.tasks} />
                </ul>
            </>
        )
    }
}

export default ToDoList;