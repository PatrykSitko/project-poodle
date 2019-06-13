import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import updateSessionState from "../../redux/actions/fetch/session";
import { connect } from "react-redux";
import "./login.css";

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
  { updateSessionState },
  credentials,
  { setSubmitting }
) {
  setSubmitting(true);
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      // "access-control-allow-origin": "*",
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify(credentials)
  });
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
      updateSessionState(token, url);
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

const mapDispatchToProps = dispatch => {
  return {
    updateSessionState: (token, url) => dispatch(updateSessionState(token, url))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
