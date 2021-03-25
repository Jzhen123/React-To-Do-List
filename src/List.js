import React from 'react';

// class ListItem extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state =  {
//             id: 0,
//             text: "",
//             clicked: false,
//         }

//     }
// }




class List extends React.Component {
    constructor(props) {
        super(props);
        this.tasks = [
            { text: 'Number One'},
            { text: 'Number Two'},
            { text: 'Number Three'},
        ];
    }


    render() {

        return (
            // <div>
            // {console.log(this.tasks[0])}
            // </div>
            <ul className="list-group">
                {
                    this.tasks.map((item, index) => {
                        return (
                            <li className="list-group-item">
                                {item.text}
                            </li>
                        )
                    })

                }
            </ul>
        )

    }
}

export default List;