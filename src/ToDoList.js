import React from 'react';
import Task from './Task';
import Input from './Input';
class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.tasks = [];

        this.input = this.input.bind(this)
    }

    // Function for the Input component to be able to "send" props back up to its parent
    // Not too comfortable on how this is possbile still
    input(tasks) {
        this.setState({
            tasks: tasks
        })
        console.log(this.tasks)
    }

    // selected(tasks) {

    // }

    render() {
        return (
            // Creates the Input and Task Components
            <>
                <Input 
                tasks={this.tasks} 
                input={this.input}
                />
                
                <ul className="list-group ps-4 pe-4 border-top-0 mb-4">
                    <Task 
                    tasks={this.tasks} 
                    input={this.input}
                    />
                </ul>
            </>
        )
    }
}

export default ToDoList;