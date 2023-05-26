import axios from "axios";
import { useState } from "react";
import { json } from "react-router-dom";

const Conversion = ()=>{
    const [files,setFiles] = useState(null)
    const formData = new FormData();

    const fileadd =(e)=>{
        console.log(e.target.files);
        let json = e.target.files;
        setFiles(json)
       
    }

    const addfiles = ()=>{
        console.log('post');
    // for (const file in files){
    // let jsonfile = files[file]
    //  let data  =formData.append("uploadedFile", jsonfile);
        axios.post('http://localhost:5030/json',files).then(()=>console.log("sucess"))
    // }
        
    }
    return(
        <>
          <input type="file"  onChange={(e)=>fileadd(e)} multiple  ></input>
          <button onClick={addfiles}>Add</button>
        </>
    )
}

export default Conversion;