import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.tasks = props.tasks
    }

    render() {
        return (
            <>
                {   /* Creates all the tasks based off of props.tasks */
                    this.tasks.map((item, index) => {
                        return (
                            <li className="list-group-item" key={index}>
                                <input className="form-check-input me-2" type="checkbox" />
                                {item.text}
                                <button type="button" className="btn position-absolute top-0 end-0 me-1">X</button>

                            </li>
                        )
                    })
                }
                {/* Creates the task feature bar at the bottom, but only when there is atleast 1 task */}
                {(this.tasks.length >= 1 ? 
                <li className="list-group-item position-relative text-start list-group-item-primary border border-primary rounded-bottom">
                    {this.tasks.length} items left
                    <button type="button" className="btn btn-sm ms-4">All</button>
                    <button type="button" className="btn btn-sm">Active</button>
                    <button type="button" className="btn btn-sm">Completed</button>
                    <button type="button" className="btn btn-sm position-absolute top-0 end-0 mt-2">Clear Completed</button>
                </li>
                : null
                )}
            </>
        )
    }
}

export default Task;