import React from 'react';
import Task from './Task';
import Input from './Input';
class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.tasks = [];

        this.handler = this.handler.bind(this)
    }

    handler(tasks) {
        this.setState({
            tasks: tasks
        })
    }

    render() {
        return (
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