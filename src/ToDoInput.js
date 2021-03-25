import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: false };
    }


    render() {
        return (

                <div className="input-group mt-4 mb-1 input-group-lg">
                    {
                        this.state.show ? 
                        <button 
                        className="btn btn-outline-secondary" 
                        type="button" 
                        id="button-addon1" 
                        display="none"
                        onClick={() => {
                            this.setState({show: false})
                            
                            }}
                        >^</button> : null
                    }
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="What needs to be done?" 
                    onChange={() => {this.setState({show: true})}}
                    />
                </div>

        )
    }
}

export default Input