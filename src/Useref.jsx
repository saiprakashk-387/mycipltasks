import React, { useRef, useEffect } from "react";
import { useCallback } from "react";
import Form from "./Form";

function Ref() {
  const inputElement = useRef(' ');
  const inputElement1 = useRef(' ');
  const inputElement2 = useRef(' ');

  useEffect(() => {
    inputElement.current.focus();
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    let obj = {
      name: inputElement.current.value,
      email: inputElement1.current.value,
      place: inputElement2.current.value
    }
    console.log("obj", obj)
  }

  return (
    <><>
      <h1>useRef</h1>
      Name: <input type="text" ref={inputElement} />
      Email: <input type="text" ref={inputElement1} />
      Place: <input type="text" ref={inputElement2} />
      <button onClick={onSubmit}>Focus Input</button>
    </><Form /></>
  );
}
export default Ref;
