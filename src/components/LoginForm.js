import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { setSessionToken } from "../redux/actions";
import { connect } from "react-redux";
import "./LoginForm.css";

const mapDispatchToProps = dispatch => {
  return {
    setSessionToken: token => dispatch(setSessionToken(token))
  };
};

function LoginForm(props) {
  return (
    <Formik
      initialValues={{ login: "", password: "" }}
      onSubmit={handleSubmit.bind(this, props)}
      render={form}
    />
  );
}
async function handleSubmit(
  { setSessionToken },
  credentials,
  { setSubmitting }
) {
  setSubmitting(true);
  const response = await fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(credentials)
  });
  switch (response.status) {
    case 203:
      alert(
        `${response.status}, Sorry dear ${credentials.login} ${
          response.statusText
        }`
      );
      break;
    default:
      alert("access denied!");
      break;
    case 200:
      const { sessionToken } = await response.json();
      setSessionToken(sessionToken);
      break;
  }
  console.log(document.cookie);
  setSubmitting(false);
}
function form(props) {
  return (
    <Form className="pure-form login-form">
      <fieldset className="pure-group login-form-fieldset">
        <label htmlFor="login">Gebruikersnaam</label>
        <Field
          className="pure-input-1 login-form-field"
          type="text"
          name="login"
          placeholder="gebruikersnaam"
        />
        {/* <ErrorMessage name='login'/> */}
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
