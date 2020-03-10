import React from 'react';
import { Input } from 'semantic-ui-react';

const View = ({ submit, loginError, goToRegister }) => {
  function renderLoginError() {
    if (loginError) {
      return (
        <div className="Login-error-text">{loginError}</div>
      );
    } else {
      return <div className="Login-error-text"></div>
    }
  }
  return (
    <div className="Login">
      <form className="Login-form" onSubmit={submit}>
        <h1>Login</h1>
        <Input
          className="Login-form-input"
          name="email"
          placeholder="email"
          type="email"
        />
        <Input
          className="Login-form-input"
          name="password"
          placeholder="password"
          type="password"
          style={{ marginBottom: 0 }}
        />
        {renderLoginError()}
        <button className="button Login-form-button">
          Login
        </button>
      </form>
      <div>
        <div className="Login-or">or</div>
        <div className="Login-register" onClick={goToRegister}>Register</div>
      </div>
    </div>
  );
};

export default View;
