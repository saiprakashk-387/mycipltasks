import React, { useState } from 'react'

const AgeCalculator = () => {
  const [date, setDate] = useState([])
 
  // let currentDate = JSON.stringify(new Date())
  // currentDate = currentDate.slice(1,11)

  const getAge=()=>{
   let birthdate = new Date(`${date}`);
   let currentDate = new Date();
  let  diff = currentDate-birthdate;
    return Math.floor(diff/31536000000);
  }
  return (
    <div>
    <br />
    Enter you date<input type="date" name='newdate' onChange={(e)=>{setDate(e.target.value)}}/>
    <button onClick={()=>{alert(`your age is ${getAge()}`)}}>Get age</button>
    </div>
  )
}

export default AgeCalculator