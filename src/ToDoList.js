import React from 'react';

class ToDoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            value: ''
        };
        this.tasks = [];

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        if (this.state.value !== '') {
            this.tasks.push({ text: this.state.value })
        }
        this.setState({ value: '' })
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <>
                <div className="input-group mt-4 input-group-lg">
                    <button className="btn btn-outline-primary" onClick={this.handleSubmits} type="button">
                        X
                        </button>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={this.state.value}
                            className="form-control"
                            placeholder="What needs to be done?"
                            onChange={this.handleChange}
                        />
                    </form>
                </div>

                <div className="list-group">
                    {
                        this.tasks.map((item, index) => {
                            return (

                                <label className="list-group-item position-relative text-start">
                                    <input className="form-check-input me-2" type="checkbox" key={index} />
                                    {item.text}
                                    <button type="button" className="btn position-absolute top-0 end-0 me-1">X</button>

                                </label>
                            )
                        })
                    }
                    <label className="list-group-item position-relative text-start list-group-item-primary border border-primary rounded-bottom">
                        {this.tasks.length} items left
                    <button type="button" className="btn btn-sm ms-4">All</button>
                        <button type="button" className="btn btn-sm">Active</button>
                        <button type="button" className="btn btn-sm">Completed</button>
                        <button type="button" className="btn btn-sm position-absolute top-0 end-0 mt-2">Clear Completed</button>

                    </label>
                </div>
            </>
        )
    }
}

export default ToDoList;