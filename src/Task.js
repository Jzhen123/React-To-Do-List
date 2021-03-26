import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.tasks = props.tasks
    }

    render() {
        return (
            <>
                {
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
                {(this.tasks.length > 0 ? 
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