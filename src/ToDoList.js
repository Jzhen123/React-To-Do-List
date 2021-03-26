import React from 'react';
import Task from './Task';
import Input from './Input';
class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.tasks = props.tasks

        this.handler = this.handler.bind(this)
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handler(tasks) {
        this.setState({
            tasks: tasks
        })
    }
    // handleSubmit(event) {
    //     if (this.state.value !== '') {
    //         this.tasks.push({ text: this.state.value })
    //     }
    //     this.setState({ value: '' })
    //     event.preventDefault();
    // }

    // handleChange(event) {
    //     this.setState({ value: event.target.value })
    // }

    render() {
        return (
            <>
                {/* <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <button className="btn btn-outline-primary" onClick={this.handleSubmits} type="submit">X</button>
                        <input
                            type="text"
                            value={this.state.value}
                            className="form-control"
                            placeholder="What needs to be done?"
                            onChange={this.handleChange}
                        />
                    </div>
                </form> */}
                <Input tasks={this.tasks} 
                handler = {this.handler}
                />
                <ul className="list-group">
                    <Task tasks={this.tasks} />

                    <li className="list-group-item position-relative text-start list-group-item-primary border border-primary rounded-bottom">
                        {this.tasks.length} items left
                    <button type="button" className="btn btn-sm ms-4">All</button>
                        <button type="button" className="btn btn-sm">Active</button>
                        <button type="button" className="btn btn-sm">Completed</button>
                        <button type="button" className="btn btn-sm position-absolute top-0 end-0 mt-2">Clear Completed</button>
                    </li>
                </ul>
            </>
        )
    }
}

export default ToDoList;