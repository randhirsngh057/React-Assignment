import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../ValidationSchema";

function Userform({ userobj, onSubmit, update }) {
  return (
    <div className="user-form">
      <div className="page-title">
        <h3>{update ? "Update record" : "Add record"}</h3>
      </div>
      <Formik
        initialValues={userobj}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <div className="form-group">
              <label htmlFor="inputAddress">Name:</label>
              <Field
                type="text"
                className="form-control"
                id="inputAddress"
                name="name"
                placeholder="Please enter your name"
              />
              <ErrorMessage component="div" class="error" name="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Email: </label>
              <Field
                type="text"
                className="form-control"
                id="inputAddress2"
                name="email"
                placeholder="Enter your email address"
              />
              <ErrorMessage component="div" class="error" name="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Username: </label>
              <Field
                type="text"
                className="form-control"
                id="inputAddress2"
                name="username"
                placeholder="Enter your username"
              />
              <ErrorMessage component="div" class="error" name="username"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Mobile: </label>
              <Field
                type="number"
                className="form-control"
                id="inputAddress2"
                name="mobile"
                placeholder="Enter your number"
              />
              <ErrorMessage component="div" class="error" name="mobile"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">RoleKey: </label>
              <Field as="select" className="form-control" name="roleKey">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Operator">Operator</option>
              </Field>
              <ErrorMessage component="div" class="error" name="roleKey"/>
            </div>
            <div className="form-group">
              <label htmlFor="inputAddress2">Password: </label>
              <Field
                type="password"
                className="form-control"
                id="inputAddress2"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage component="div" class="error" name="password"/>
            </div>
            <div className="user-form-btn">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Userform;
