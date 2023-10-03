import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function FormSubmit() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted with value:", inputValue);
    // You can make an API request, update state, or perform any other action here.
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Enter something"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={handleSubmit} // You can also handle submission on button click
      >
        Submit
      </Button>
    </form>
  );
}

export default FormSubmit;
