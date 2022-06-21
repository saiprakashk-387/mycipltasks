import React from "react";
import { useFormik } from "formik";
import { CREATE_USER } from "./GraphqlQueries";
import { useMutation } from "@apollo/client";
import { Graph1 } from "./Graph1";

function Graph() {
  const [addUser, { data }] = useMutation(CREATE_USER);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      mobile: "",
    },
    onSubmit: async (values, resetForm) => {
      await addUser({ variables: values });
      resetForm.resetForm({
        username: "",
        email: "",
        password: "",
        mobile: "",
      });
    },
    validate: (values) => {
      let errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.username) {
        errors.username = "username Rquired";
      }
      if (!values.email) {
        errors.email = "Email Rquired";
      } else if (!regex.test(values.email)) {
        errors.email = "Invalid Email";
      }

      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password too short";
      }
      if (!values.mobile) {
        errors.mobile = "number is required";
      } else if (values.mobile.length < 10) {
        errors.mobile = "number too short";
      }
      return errors;
    },
  });

  return (
    <>
      <h3>Graphql CRUD</h3>
      <div className="App">
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <label>username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formik.values.username}
            onChange={formik.handleChange}
          />{" "}
          <br />
          {formik.errors.username ? (
            <div className="errors">{formik.errors.username}</div>
          ) : null}
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />{" "}
          <br />
          {formik.errors.email ? (
            <div className="errors">{formik.errors.email}</div>
          ) : null}
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />{" "}
          <br />
          {formik.errors.password ? (
            <div className="errors">{formik.errors.password}</div>
          ) : null}
          <label>Number</label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            value={formik.values.mobile}
            onChange={formik.handleChange}
          />{" "}
          <br />
          {formik.errors.mobile ? (
            <div className="errors">{formik.errors.mobile}</div>
          ) : null}
          <button type="submit" class="btn btn-primary">Register</button>
        </form> 
      </div>
      <div>
        <Graph1 value={data} />
      </div>
    </>
  );
}
export default Graph;
