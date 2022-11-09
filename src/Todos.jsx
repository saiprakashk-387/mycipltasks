import React, { useRef, useState } from "react";

const Todos = () => {
  const inputElement = useRef(" ");
  const [list, setlist] = useState([]);

  const addTodo = () => {
    setlist([...list, inputElement.current.value]);
  };
  const getTodoValue = (val) => {
    let valuee = list.filter((value) => value !== val);
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
              <li
                key={i}
                onClick={() => {
                  getTodoValue(val);
                }}
              >
                {val}{''} <span > Remove</span>
                
              </li>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Todos;
