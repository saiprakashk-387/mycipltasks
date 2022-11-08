import React, { useState, useEffect } from "react";

// function Folderupload() {
//    const [file1, setFile1] = useState();
//   const [file2, setFile2] = useState();
//   const [values, setValues] = useState();
//   const [newValues, setNewValues] = useState();

//   const folderChange = async (e) => {
//     setFile1(e.target.files[0]);
//     setFile2(e.target.files[1]);
//   };
//   useEffect(() => {
//     if (file2 && file1) {
//       v1();
//       v2();
//     }
//   }, [file1, file2]);
//   const v1 = () => {
//     var file = file1;
//     var reader = new FileReader();

//     if (file) {
//       reader.onload = function (event) {
//         setValues(event.target.result);
//       };
//     } else {
//       setValues("It doesn't seem to be a text file!");
//     }
//     reader.readAsText(file);
//   };
//   const v2 = () => {
//     var file = file2;
//     var reader = new FileReader();

//     if (file) {
//       reader.onload = function (event) {
//         setNewValues(event.target.result);
//       };
//     } else {
//       setNewValues("It doesn't seem to be a text file!");
//     }
//     reader.readAsText(file);
//   };

//   return (
//     <div style={{ margin: 30 }}>
//       <input
//         type="file"
//         id="flup"
//         webkitdirectory="true"
//         onChange={(e) => folderChange(e)}
//       />

//       <ul>
//         <li>{values}</li>
//         <li>{newValues}</li>
//       </ul>
//     </div>
//   );
// }

// export default Folderupload;

// import React, { Component } from "react";

// class Folderupload extends Component {
//   state = {
//     // Initially, no file is selected
//     selectedFile: '',
//   };

//   // On file select (from the pop up)
//   onFileChange = (event) => {
//     // Update the state
//     this.setState({ selectedFile: event.target.files });
//   };

//   // On file upload (click the upload button)
//   onFileUpload = () => {
//     // Details of the uploaded file
//     console.log(this.state.selectedFile);
//   };

//   render() {
//     return (
//       <div>
//         <h3>Folder Upload using React!</h3>
//         <div>
//           <input
//             type="file"
//             onChange={this.onFileChange}
//             directory=""
//             webkitdirectory=""
//           />
//           <button onClick={this.onFileUpload}>Upload!</button>
//         </div>
//         {
//            this.state?.selectedFile?.length>=1 ? (
//             Array.from(this.state.selectedFile)?.map((val,i)=>{
//                 return(
//                     <li>{val.name}</li>
//                 )
//             })
//            ) : (
//             "Please select file"
//            )
//         }
//       </div>
//     );
//   }
// }

// export default Folderupload;

// import React,{useState} from 'react';

// const Folderupload = () => {
//     const[data,setData]=useState()
//     const upload = async (e) => {
//         // Convert the FileList into an array and iterate
//         let files = Array.from(e.target.files).map(file => {
//             // Define a new file reader
//             let reader = new FileReader();
//             // Create a new promise
//             return new Promise(resolve => {
//                 // Resolve the promise after reading file
//                 reader.onload = () => resolve(reader.result);
//                 // Reade the file as a text
//                 reader.readAsText(file);
//                             });

//         });

//         // At this point you'll have an array of results
//         let res = await Promise.all(files);
//         setData(res)
//         // console.log("res",res);
//     }
//     console.log("data",data);
//     return(
//         <input onChange = {upload} type = 'file' multiple/>
//     );

// }

// export default Folderupload;

const Folderupload = () => {
  const [value, setvalue] = useState();
  const adminCodes = ["India", "USA", "UK", "UAE"];
  const listItems = [
    {
      name: "USA",
      value: "usa",
    },
    {
      name: "INDIA",
      value: "india",
    },
    {
      name: "UK",
      value: "uk",
    },
    {
      name: "UAE",
      value: "uae",
    },
  ];

  const handleListCountryClick = (item) => {
    console.log(`I'm a ${item}!`);
  };

  ///check string has whitespace
  function hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  }
let check = value && hasWhiteSpace(value)
console.log("checkwhitespace",check);

////whitespace count in string
function whitespacelength (str){
    return str.split(" ").length-1
}

  ///remove duplicate words from sentence

  const data = value && value.split(" "); ////duplicates words in string with count
  const val = [...new Set(data)];
  // console.log("removeduplicatewords",data);
  const countduplicates = val.map((val) => [
    val,
    data.filter((value) => value === val).length,
  ]);

  // console.log("countduplicatewords",countduplicates);

  const dataa = value && value.split(""); ///duplicates count in word
  const vall = [...new Set(data)];
  const countduplicatess = vall.map((val) => [
    val,
    dataa.filter((value) => value === val).length,
  ]);
  // console.log("duplicate letters",vall);
  // console.log("countduplicateletters",countduplicatess);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setvalue(e.target.value);
        }}
      />
      <ul>
        {listItems.map((listItems, i) => (
          <li
            key={i}
            style={{ cursor: "pointer" }}
            onClick={() => handleListCountryClick(listItems.value)}
          >
            {listItems.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Folderupload;
