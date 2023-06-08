import React from 'react'
import { memo } from 'react';

const Form = () => {
const handleInput=(e)=>{
    console.log('eeeeeee',e.target.value);
}
const getvalues=()=>{
    console.log('bhgnj');
}
  return (
    <div>
        <form action="">
            Name :<input type="text" name="name" onChange={(e)=>{handleInput(e)}} />
            Age: <input type="text" name='age' onChange={(e)=>{handleInput(e)}} />
            <button onClick={getvalues}>get Details</button>
        </form>
    </div>
  )
}

export default memo(Form)