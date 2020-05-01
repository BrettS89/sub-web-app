import React from 'react';
import { Input, Icon } from 'semantic-ui-react';

const View = ({ submit, loginError, goToRegister, navigateTo }) => {
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
          iconPosition='left'
          className="Login-form-input"
          name="email"
          placeholder="Email"
          type="email"
        >
          <Icon name='at' />
          <input/>
        </Input>
        <Input
        iconPosition='left'
          className="Login-form-input"
          name="password"
          placeholder="Password"
          type="password"
          style={{ marginBottom: 0 }}
        >
          <Icon name='unlock' />
          <input/>
        </Input>
        {renderLoginError()}
        <button className="button Login-form-button">
          Login
        </button>
        <div className="TC">
          <div>By logging in you agree to our</div>
          <span className="LoginLink" onClick={() => navigateTo('/user/termsandconditions')}>Terms and conditions </span>
          <span>and </span>
          <span className="LoginLink" onClick={() => navigateTo('/privacypolicy')}>Privacy Policy</span>
        </div>
      </form>
      <div>
        <div className="Login-or">or</div>
        <div className="Login-register" onClick={goToRegister}>Register</div>
      </div>
    </div>
  );
};

export default View;
