import React, { useRef, useState } from "react";
import Moment from 'moment';
// import './progrsss.css'

const Todos = () => {
  const inputElement = useRef(null);
  const [value, setValue] = useState(); ///to get input values
  const [error, setError] = useState(); //set error msg
  const [list, setlist] = useState([]); ///data to map in table
  const [check, setChecked] = useState([]); //store multiple checked values
  const [btn, setbtn] = useState(false); /// handle buttons
  const [edit, setEdit] = useState(); //set edit value
  const [isOff, setIsOff] = useState(false); ///handle table with checkbox

  // console.log(Moment("Thu Jan 19 2023 00:00:00 GMT+0530").format('YYYY-MM-DD h:mm:ss:SSS ZZ'))
  const addTodo = () => {
    if (value) {
      setlist([...list, value]);
      setError(null);
    } else {
      setError("please enter text");
    }
  };
// console.log('list',list);
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


  const dots = (brrScore) => {
    return Array(brrScore)
      .fill()
      .map((i, index) => (
        <span key={index} className="dot"></span>
      ))
  }
  // console.log("arr", dots(2))
  // const arr = Array(3).fill().map((v, i) => <span>{"*"}</span>)
  // console.log("arr", arr);
  const loadedApiCount = 45
  return (
    <div>
      <div>
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          backgroundColor: "#ffffff",
          top: "0",
          width: "100%",
          height: "100vh",
        }}
      >
        <h3
          style={{
            width: "30%",
            position: "absolute",
            top: "30%",
            left: "35%",
            color: "black",
          }}
        >
          {loadedApiCount === 57
            ? "Report generated, Click download to generate PDF"
            : "Report is being generated, please wait..."}
        </h3>
        <progress
          style={{
            width: "30%",
            height: "3%",
            position: "absolute",
            top: "38%",
            left: "35%",
            marginBottom: "3rem",
            // backgroundColor:"red"
          }}
          value={loadedApiCount}
          max="57"
        />
        <button
          // onClick={handlePrint}
          style={{
            height: "100px",
            color: loadedApiCount === 57 ? "white" : "black",
            fontSize: "20px",
            backgroundColor: loadedApiCount === 57 ? "#0B9D09" : "lightGrey",
            borderRadius: "90px",
            width: "30%",
            margin: "auto",
            cursor: "pointer",
            outline: "none",
            border: loadedApiCount === 57 ? "none" : "black",
          }}
          disabled={loadedApiCount !== 57}
        >
          Download
        </button>
      </div> */}
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
        {/* {dots(3)} */}
        {/* {arr} */}
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
            {isOff ? "turnOff checkbox" : "Try With CheckBox"}
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
                // boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                // backgroundColor: "mintcream  ",
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
