import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import updateSessionState from "../../redux/actions/fetch/session";
import { connect } from "react-redux";
import "./login.css";

const mapDispatchToProps = dispatch => {
  return {
    updateSessionState: credentials => dispatch(updateSessionState(credentials))
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
  { updateSessionState },
  credentials,
  { setSubmitting }
) {
  updateSessionState({ credentials, setSubmitting });
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
