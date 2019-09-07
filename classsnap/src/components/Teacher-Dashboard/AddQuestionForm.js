import React from "react";
import { Form, Field, withFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AddQuestionForm = () => {
  return (
    <div className="question-form">
      <Form>
        <h2>Send your Question Here!</h2>
        <label>
          Class
          <Field component="select" name="session">
            <option value="classOne">Class 1</option>
            <option value="classTwo">Class 2</option>
            <option value="classThree">Class 3</option>
            <option value="classFour">Class 4</option>
            <option value="classFive">Class 5</option>
            <option value="classSix">Class 6</option>
            <option value="classSeven">Class 7</option>
            <option value="classEight">Class 8</option>
          </Field>
        </label>
        <label>
          Subject
          <Field component="select" name="subject">
            <option value="elar">ELAR</option>
            <option value="math">Math</option>
            <option value="sci">Science</option>
            <option value="socio">Social Studies</option>
            <option value="lang">Foreign Languages</option>
          </Field>
        </label>
        <label>
          Due Date
          <Field type="date" name="duedate" />
        </label>
        <label>
          Question
          <Field
            type="text"
            name="question"
            placeholder="Enlightening question starts here..."
          />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

const FormikAddQuestionForm = withFormik({
  mapPropsToValues({ session, subject, question }) {
    return {
      session: session || "",
      subject: subject || "",
      question: question || "",
    };
  },

  validationSchema: Yup.object().shape({
    session: Yup.required,
    subject: Yup.required,
    question: Yup.string(20).required,
  }),

  handleSubmit(values, { resetForm }) {
    axios.post("https://reqres.in/api/users", values).then(res => {
      console.log(res);
      resetForm();
    });
  },
})(AddQuestionForm);

export default FormikAddQuestionForm;
