import React, { useRef, useState } from "react";

const Todos = () => {
  const inputElement = useRef(null);
  const [value, setValue] = useState();
  const [error,setError]= useState()
  const [list, setlist] = useState([]);
  const [search, setSearch] = useState();
  const [btn, setbtn] = useState(false);
  const [edit, setEdit] = useState();

  const addTodo = () => {
    if (value) {
      setlist([...list, value]);
      setError(null)
    }
    else{
      setError("please enter text")
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
      <div>
        <input
          ref={inputElement}
          type="text"
          onChange={onChange}
          value={value}
        />
        {error&& <p>{error}</p>}
        {btn ? (
          <button style={{ color: "#74d006" }} onClick={updateTodoValue}>
            Update
          </button>
        ) : (
          <button style={{ color: "#193fbc" }} onClick={addTodo}>
            Add Todos
          </button>
        )}
      </div>
      {list?.length >= 1 && (
        <div style={{ padding: "5px" }}>
          {/* <table style ={{width:"30%",margin:"auto" ,boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" ,backgroundColor:"mintcream  "}}>
            <thead >
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
                      <button style={{color:"#50d9e0"}}
                        onClick={() => {
                          editTodoValue(val);
                        }}
                      >
                        Edit
                      </button>
                      <button style={{color:"#f45e32"}}
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
          </table> */}

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
                      <button
                        style={{ color: "#f45e32" }}
                        onClick={() => removeValuesCehck(val)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Todos;
