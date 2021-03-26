import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.tasks = props.tasks
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        if (this.state.value !== '') {
            this.tasks.push({ text: this.state.value })
        }
        this.props.handler(this.tasks)
        this.setState({ value: '' })
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="mt-4 ps-4 pe-4">
                <div className="input-group">
                    <button className="btn btn-outline-primary " onClick={this.handleSubmits} type="submit">X</button>
                    <input
                        type="text"
                        value={this.state.value}
                        className="form-control "
                        placeholder="What needs to be done?"
                        onChange={this.handleChange}
                    />
                </div>
            </form>

                
        )
    }
}

export default Input;