import React from 'react';
import { Input, Icon } from 'semantic-ui-react';

const View = ({ submit, registrationError, navigateTo }) => {
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
        {/* <Input
          iconPosition='left'
          className="Register-form-input"
          name="firstName"
          placeholder="first name"
          type="text"
        >
          <Icon name="address card" />
          <input />
        </Input>
        <Input
          iconPosition='left'
          className="Register-form-input"
          name="lastName"
          placeholder="last name"
          type="text"
        >
          <Icon name="address card" />
          <input />
        </Input> */}
        <Input
          iconPosition='left'
          className="Register-form-input"
          name="email"
          placeholder="Email"
          type="email"
        >
          <Icon name="at" />
          <input />
        </Input>
        <Input
          iconPosition='left'
          className="Register-form-input"
          name="password"
          placeholder="Password"
          type="password"
          style={{ marginBottom: 0 }}
        > 
          <Icon name="lock" />
          <input/>
        </Input>
        {renderRegistrationError()}
        <button className="button Register-form-button">
          Sign up
        </button>
        <div className="TC">
          <div>By logging in you agree to our</div>
          <span className="RegisterLink" onClick={() => navigateTo('/user/termsandconditions')}>Terms and conditions </span>
          <span>and </span>
          <span className="RegisterLink" onClick={() => navigateTo('/privacypolicy')}>Privacy Policy</span>
        </div>
      </form>
    </div>
  );
};

export default View;
