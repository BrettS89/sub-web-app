import React from 'react';
import { Input } from 'semantic-ui-react';

const View = ({ submit, registrationError }) => {
  function renderRegistrationError() {
    if (registrationError) {
      return (
        <div className="Register-error-text">{registrationError}</div>
      );
    } else {
      return <div className="Register-error-text"></div>
    }
  }

  return (
    <div className="Register">
      <form className="Register-form" onSubmit={submit}>
        <h1>Create an account</h1>
        <Input
          className="Register-form-input"
          name="firstName"
          placeholder="first name"
          type="text"
        />
        <Input
          className="Register-form-input"
          name="lastName"
          placeholder="last name"
          type="text"
        />
        <Input
          className="Register-form-input"
          name="email"
          placeholder="email"
          type="email"
        />
        <Input
          className="Register-form-input"
          name="password"
          placeholder="password"
          type="password"
          style={{ marginBottom: 0 }}
        />
        {renderRegistrationError()}
        <button className="button Register-form-button">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default View;
