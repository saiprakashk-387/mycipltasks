import React, { useRef, useState } from "react";

const Todos = () => {
  const inputElement = useRef(null);
  const [value, setValue] = useState(); ///to get input values
  const [error, setError] = useState(); //set error msg
  const [list, setlist] = useState([]); ///data to map in table
  const [check, setChecked] = useState([]); //store multiple checked values
  const [btn, setbtn] = useState(false); /// handle buttons
  const [edit, setEdit] = useState(); //set edit value
  const [isOff, setIsOff] = useState(false); ///handle table with checkbox

  const addTodo = () => {
    if (value) {
      setlist([...list, value]);
      setError(null);
    } else {
      setError("please enter text");
    }
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const editTodoValue = (val) => {
    setbtn(true);
    setEdit(val);
    setValue(val);
  };
  const updateTodoValue = () => {
    let val = value;
    let editval = edit;
    var NewText = list.map((str) => (str === editval ? val : str));
    setlist(NewText);
    setbtn(false);
  };
  ////remove todo vallues with button
  const removeTodoValue = (val) => {
    let valuee = list.filter((value) => value !== val);
    setlist(valuee);
  };

  // todo vallues with checkbox
  const getTodoValueCheck = (e) => {
    if (e.target.checked === true) {
      console.log("checked", e.target.checked);
      setbtn(true);
      setChecked([...check, e.target.value]);
    }
  };

  ////remove multiple/single todo vallues with checkbox and  button
  const removeMultipleValuesCehck = () => {
    const removeduplicate = [...new Set(list)];
    let newlist = removeduplicate.filter((f) => !check.includes(f));
    setlist(newlist);
    setbtn(false);
  };

  return (
    <div>
      <div>
        <input
          ref={inputElement}
          type="text"
          onChange={onChange}
          value={value}
        />
        {error && <p>{error}</p>}
        {btn ? (
          <button style={{ color: "#74d006" }} onClick={updateTodoValue}>
            Update
          </button>
        ) : (
          <button style={{ color: "#193fbc" }} onClick={addTodo}>
            Add Todos
          </button>
        )}

        {btn && (
          <button
            style={{ color: "#f45e32" }}
            onClick={removeMultipleValuesCehck}
          >
            Remove
          </button>
        )}
      </div>
      {list?.length >= 1 && (
        <div style={{ padding: "5px" }}>
          <button onClick={() => setIsOff(!isOff)}>
            {isOff ? "Off" : "Try With CheckBox"}
          </button>
          {isOff ? (
            <table
              style={{
                width: "30%",
                margin: "auto",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                backgroundColor: "mintcream  ",
              }}
            >
              <thead>
                <tr>
                  <td>S No</td>
                  <td>Topic</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {[...new Set(list)].map((val, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <input
                          type="checkbox"
                          value={val}
                          onChange={(e) => {
                            getTodoValueCheck(e);
                          }}
                        />
                      </td>
                      <td>{val}</td>
                      <td>
                        <button
                          style={{ color: "#50d9e0" }}
                          onClick={() => {
                            editTodoValue(val);
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <table
              style={{
                width: "30%",
                margin: "auto",
                boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                backgroundColor: "mintcream  ",
              }}
            >
              <thead>
                <tr>
                  <td>S No</td>
                  <td>Topic</td>
                  <td>Actions</td>
                </tr>
              </thead>
              <tbody>
                {[...new Set(list)].map((val, i) => {
                  return (
                    <tr key={i}>
                      <td>{i}</td>
                      <td>{val}</td>
                      <td>
                        <button
                          style={{ color: "#50d9e0" }}
                          onClick={() => {
                            editTodoValue(val);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          style={{ color: "#f45e32" }}
                          onClick={() => {
                            removeTodoValue(val);
                          }}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default Todos;
