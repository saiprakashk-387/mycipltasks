import React from 'react';
import { useFormik } from 'formik';
import './App.css';

const Formikapp = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        onSubmit: (values) => {
            console.log('form submit', values)
        },
        validate: (values) => {
            let errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (!values.name) {
                errors.name = "Name Rquired"
            }
            if (!values.email) {
                errors.email = "Email Rquired"
            } else if (!regex.test(values.email)) {
                errors.email = "Invalid Email";
            }

            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length < 4) {
                errors.password = "Password too short";
            }
            return errors;
        }
    })
    //console.log('form values', formik.values)

    return (
        <div className="App">
            <h4>Formik </h4>
            <form autoComplete="off" onSubmit={formik.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" id="name"
                    value={formik.values.name} onChange={formik.handleChange} />
                {formik.errors.name ? <div className="errors">{formik.errors.name}</div> : null}

                <label>E-mail</label>
                <input type="email" name="email" id="email"
                    value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email ? <div className="errors">{formik.errors.email}</div> : null}

                <label>Password</label>
                <input type="password" name="password" id="password"
                    value={formik.values.password} onChange={formik.handleChange} />
                {formik.errors.password ? <div className="errors">{formik.errors.password}</div> : null}

                <button type="submit">Register</button>

            </form>
        </div>
    )
}

export default Formikapp