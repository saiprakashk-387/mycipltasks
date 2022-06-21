import React, { useState, useEffect } from "react";
import { UPDATE_USER } from "./GraphqlQueries";
import { useMutation } from "@apollo/client";

const EditForm = (props) => {
  const [updateUser, { data }] = useMutation(UPDATE_USER);
  const [Value, setValue] = useState({
    email: "",
    mobile: "",
    username: "",
    id: props?.value?.id,
  });
  useEffect(() => {
    setValue(props?.value);
  }, []);

  const handleInput = (e) => {
    e.preventDefault();
    let myData = { ...Value };
    myData[e.target.name] = e.target.value;
    setValue(myData);
  };
  const update = (e) => {
    e.preventDefault();
    updateUser({ variables: Value });
    setValue({ email: "", mobile: "", username: "", id: "" });
  };
  return (    
    <div>
      <form action="">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={Value.email}
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={Value.username}
          onChange={(e) => {
            handleInput(e);
          }}
        />
        <label htmlFor="mobile">Mobile</label>
        <input
          type="number"
          name="mobile"
          value={Value.mobile}
          onChange={(e) => {
            handleInput(e);
          }}
        />
      </form>
      <button onClick={update}>Update</button>
    </div>
  );
};
export default EditForm;
