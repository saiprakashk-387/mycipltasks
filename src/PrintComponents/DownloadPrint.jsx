import React from 'react'
import Print from '../Print'
import Print1 from './Print1'
import Print2 from './Print2'

const DownloadPrint = () => {
  return (
    <>
    <Print fileName={'print'} elementId={"download"}/>
    <div id='download' > 
    <Print1/>
    <Print2/>
     </div>
     </>
  )
}

export default DownloadPrint