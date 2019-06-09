import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { setToken, setUrl } from "../redux/actions";
import { connect } from "react-redux";
import "./LoginForm.css";

const mapDispatchToProps = dispatch => {
  return {
    setToken: token => dispatch(setToken(token)),
    setUrl: url => dispatch(setUrl(url))
  };
};

function LoginForm(props) {
  return (
    <Formik
      initialValues={{ userName: "", password: "" }}
      onSubmit={handleSubmit.bind(this, props)}
      validate={validateLogin}
      render={form}
    />
  );
}

function validateLogin(values) {
  const { userName } = values;
  const errors = {};
  if (userName === "test") {
    errors.userName = "error error error...";
  }
  return errors;
}
async function handleSubmit(
  { setToken, setUrl },
  credentials,
  { setSubmitting }
) {
  console.log(arguments);
  setSubmitting(true);
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      // "access-control-allow-origin": "*",
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(credentials)
  });
  console.log(response.status);
  switch (response.status) {
    case 203:
      alert(
        `${response.status}, Sorry dear ${credentials.userName} ${
          response.statusText
        }`
      );
      break;
    default:
      alert("access denied!");
      break;
    case 200:
      const { token, url } = await response.json();
      console.log(token, typeof url);
      setToken(token);
      setUrl(url);
      break;
    case 500:
      alert("500: server error!");
      break;
  }
  setSubmitting(false);
}
function form(props) {
  return (
    <Form className="pure-form login-form">
      <fieldset className="pure-group login-form-fieldset">
        <label htmlFor="userName">Gebruikersnaam</label>
        <Field
          className="pure-input-1 login-form-field"
          type="text"
          name="userName"
          placeholder="gebruikersnaam"
        />
        <p>
          <ErrorMessage name="userName" />
        </p>
        <label htmlFor="password">wachtwoord</label>
        <Field
          className="pure-input-1 login-form-field"
          type="password"
          name="password"
          placeholder="wachtwoord"
        />
        <button
          className="pure-button pure-input-1 pure-button-primary login-form-button"
          type="submit"
        >
          inloggen
        </button>
      </fieldset>
    </Form>
  );
}
export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
