import React ,{useState} from 'react'

const PdfViewer = () => {
  const [doc, setdoc] = useState()

  console.log("doc",doc);
  return (
    <div>
     Add Document  :
     <input type="file" onChange={(e)=>{setdoc(e.target.files[0])}} />
    </div>
  )
}

export default PdfViewer