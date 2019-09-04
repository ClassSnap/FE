import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
//import * as Yup from "yup";

const Login = () => {
  return (
    <div className="sign-in-form">
      <Form>
        <label>
          Username
          <Field type="text" name="username" placeholder="Your Username" />
        </label>
        <label>
          Password
          <Field type="password" name="password" placeholder="Your Password" />
        </label>
        <button type="submit">Submit</button>
      </Form>
      <h4>Don't have an account yet? {/*<Link to="/signup">*/}Sign Up here.</h4>
    </div>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    };
  },
});

export default Login;
