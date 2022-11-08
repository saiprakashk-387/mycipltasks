import React, { useEffect, useRef, useState } from "react";

const StringMethod = () => {
  const inputElement = useRef(" ");
  const [first, setfirst] = useState();
  const [method, setmethod] = useState();

  const getInput = () => {
    let string = inputElement.current.value;
    setfirst(string);
  };
  useEffect(() => {
      ///check string has whitespace
  if(first){
    let value = first.indexOf(" ") >= 0;
    if (value === true) {
      duplicatewordscount(first);
    } else {
      duplicateletterscount(first);
    }  }
  }, [first])
  

  function duplicatewordscount(val) {
    let data = val && val.split(" ");
    let finalval = [...new Set(data)];
    let valuee = finalval.map((val) => [
      val,
      data.filter((value) => value === val).length,
    ]);
    setmethod(valuee);
  }
  function duplicateletterscount(val) {
    let data = val && val.split("");
    let finalval = [...new Set(data)];
    let valuee = finalval.map((val) => [
      val,
      data.filter((value) => value === val).length,
    ]);
    setmethod(valuee);
  }

  return (
    <div>
      <div>
        Text Here
        <input type="text" ref={inputElement} />
         <button onClick={getInput}>Submit</button>
      </div>
      <div>{method?.map((val,i)=>{
       return  <p>{val[0]} :{val[1]}</p>
      })}</div>
    </div>
  );
};

export default StringMethod;
