import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.tasks = props.tasks
    }

    render() {
        return (
            this.tasks.map((item, index) => {
                return (
                    <li className="list-group-item" key={index}>
                        <input className="form-check-input me-2" type="checkbox" />
                        {item.text}
                        <button type="button" className="btn position-absolute top-0 end-0 me-1">X</button>

                    </li>
                )
            })
        )
    }
}

export default Task;