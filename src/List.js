// import React from 'react';


// // class ListItem extends React.Component {
// //     constructor(props) {
// //         super(props);
// //         this.state =  {
// //             id: 0,
// //             text: "",
// //             clicked: false,
// //         }

// //     }
// // }




// class List extends React.Component {
//     constructor(props) {
//         super(props);
//         this.tasks = props.tasks;
//     }


//     render() {

//         return (
//             <div className="list-group">
//                 {
//                     this.tasks.map((item, index) => {
//                         return (

//                             <label className="list-group-item position-relative text-start">
//                                 <input className="form-check-input me-2" type="checkbox" value="" />
//                                 {item.text} {index}
//                                 <button type="button" className="btn position-absolute top-0 end-0 me-1">X</button>

//                             </label>
//                         )
//                     })

//                 }
//                 <label className="list-group-item position-relative text-start list-group-item-primary border border-primary rounded-bottom">
//                     {this.tasks.length} items left
//                     <button type="button" className="btn btn-sm ms-4">All</button>
//                     <button type="button" className="btn btn-sm">Active</button>
//                     <button type="button" className="btn btn-sm">Completed</button>
//                     <button type="button" className="btn btn-sm position-absolute top-0 end-0 mt-2">Clear Completed</button>

//                 </label>
//             </div>
//         )

//     }
// }

// export default List;