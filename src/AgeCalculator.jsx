import React, { useState } from 'react'

const AgeCalculator = () => {
  const [date, setDate] = useState([])
 
  // let currentDate = JSON.stringify(new Date())
  // currentDate = currentDate.slice(1,11)

  const getAge=()=>{
  //  let birthdate = new Date(`${date}`);
  //  let currentDate = new Date();
  // let  diff = currentDate-birthdate;   // This is the difference in milliseconds
  //   return Math.floor(diff/31536000000);    // Divide by 1000*60*60*24*365.25
  return Math.floor((new Date() - new Date(`${date}`)) / 31557600000)
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