import React, { useRef, useState } from "react";

const Todos = () => {
  const inputElement = useRef(" ");
  const [list, setlist] = useState([]);
  const [search, setSearch] = useState();

  const addTodo = () => {
    setlist([...list, inputElement.current.value]);
  };

  ////remove todo vallues with button
  const removeTodoValue = (val) => {
    let valuee = list.filter((value) => value !== val);
    setlist(valuee);
  };

  const getTodoValueCheck = (e) => {
    if (e.target.checked === true) {
      setSearch(e.target.value);
    }
  };
  ////remove todo vallues with checkbox and  button
  const removeValuesCehck = () => {
    let valuee = list.filter((value) => value !== search);
    setlist(valuee);
  };
  return (
    <div>
      Todos
      <div>
        <input type="text" ref={inputElement} />
        <button onClick={addTodo}>Add</button>
      </div>
      {list && (
        <div>
          {list.map((val, i) => {
            return (
              <li key={i}>
                {val}
                {""}
                <button
                  onClick={() => {
                    removeTodoValue(val);
                  }}
                >
                  Remove
                </button>
              </li>
              // <li key ={i}
              // >
              //   <input type="checkbox" value={val}  onChange={(e) => {
              //     getTodoValueCheck(e);
              //   }} />
              //   {val}
              //   <button onClick={() => removeValuesCehck(val)}>Remove</button>
              // </li>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Todos;
