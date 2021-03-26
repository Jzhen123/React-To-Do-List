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

    // Function that pushes data into this.tasks when the user submits anything to the Input
    handleSubmit(event) {
        if (this.state.value !== '') {
            this.tasks.push({ text: this.state.value })
        }
        this.props.handler(this.tasks)
        this.setState({ value: '' })
        event.preventDefault();
    }
    
    // Function that updates value of the input on every keystroke
    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    render() {
        return (
            // Creates a Button and text form that can submit your task to the list
            <form onSubmit={this.handleSubmit} className="mt-4 ps-4 pe-4">
                <div className="input-group"> 
                {(this.state.value !== '' ?
                    <button className="btn btn-outline-primary " onClick={this.handleSubmits} type="submit">X</button> : null)}
                    <input
                        type="text"
                        value={this.state.value}
                        className="form-control"
                        placeholder="What needs to be done?"
                        onChange={this.handleChange}
                    />
                </div>
            </form>

                
        )
    }
}
export default Input;