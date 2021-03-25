import React from 'react';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = { show: false };
    }


    render() {
        return (

                <div class="input-group mt-4 mb-3 input-group-lg">
                    {
                        this.state.show ? 
                        <button 
                        class="btn btn-outline-secondary" 
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
                    class="form-control" 
                    placeholder="What needs to be done?" 
                    onChange={() => {this.setState({show: true})}}
                    />
                </div>

        )
    }
}

export default Input