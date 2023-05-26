

// import React, {useRef} from 'react';
// import { DownloadTableExcel } from 'react-export-table-to-excel';

// const Printexcel = () =>  {
//     const tableRef = useRef(null);


//         return (
//             <div>
//                 <DownloadTableExcel
//                     filename="users table"
//                     sheet="users"
//                     currentTableRef={tableRef.current}
//                 >

//                    <button> Export excel </button>

//                 </DownloadTableExcel>

//                 <table  ref={tableRef}>
//                  <tbody>
//                     <tr>
//                         <th>Firstname</th>
//                         <th>Lastname</th>
//                         <th>Age</th>
//                     </tr>
//                     <tr>
//                         <td>Edison</td>
//                         <td>Padilla</td>
//                         <td>20</td>
//                     </tr>
//                     <tr>
//                         <td>Alberto</td>
//                         <td>Lopez</td>
//                         <td>94</td>
//                     </tr>
//                   </tbody>
//                 </table>

//             </div>
//         );
//     }


// export default Printexcel

import React, { Component } from 'react'

export default class Printexcel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search:"",
        }
    }
     handleChange(event) {
        event.preventDefault();
        // name = event.target.name
        // value = event.target.value;
        
        console.log("values", event.target.value);
    };
    debounce=(fn, delay)=> {
        let timer;
        return function () {
          let context = this,
            args = arguments;
          clearTimeout(timer);
          timer = setTimeout(() => {
            fn.apply(context, args);
          }, delay);
        };
      }
    // debouncedHandleChange = (e)=>this.debounce(this.handleChange(e), 2000);
    debouncedHandleChange = this.debounce(this.handleChange, 2000);
   
    render() {
        return (
            <div>Printexcelllll

                <input
                    type="text"
                    name="search"
                    id="search"
                    value={this.state.search}
                    // onChange={this.handleChange}
                    onChange={e=>this.debouncedHandleChange(e)}
                />
            </div>
        )
    }
}
