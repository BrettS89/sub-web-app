import React from 'react';
import { Input, Icon, Checkbox } from 'semantic-ui-react';

const View = ({ isLoggedIn, addCompany, inputFile, selectImage, imageAdded }) => {
  function renderSignup() {
    if (!isLoggedIn) {
      return (
        <div className="AddCompany-signup">
          <div className="AddCompany-loggedin-message">
            Create account and add company
          </div>
          {/* <Input
              name="firstName"
              type="text"
              className="AddCompany-input"
              placeholder="First name"
            />
            <Input
              name="lastName"
              type="text"
              className="AddCompany-input"
              placeholder="Last name"
            /> */}
            <Input
              name="email"
              type="email"
              className="AddCompany-input"
              placeholder="Email"
            />
            <Input
              name="password"
              type="password"
              className="AddCompany-input"
              placeholder="Password"
            />
        </div>
      );
    }
  }

  function renderUseCurrentAccountMessage() {
    if (isLoggedIn) {
      return (
        <div className="AddCompany-loggedin-message">
          Company will be created using your currently logged in account
        </div>
      );
    }
  }

  function renderImageButton() {
    if (!imageAdded) {
      return (
        <div className="AddCompany-upload" onClick={() => inputFile.current.click()}>
          <Icon name="image" size="large" />
          <span>Upload a photo of your business</span>
        </div>
      );
    }
    return (
      <div className="AddCompany-upload">
        <Icon name="check" size="large" />
        <span>Photo added</span>
      </div>
    );
  }

  function submitForm(e) {
    if (!e.target.terms.checked) {
      alert('You must agree to the partner agreement and privacy policy.');
      return;
    }
    e.preventDefault();
    const form = {
      name: e.target.name.value,
      tags: e.target.tags.value,
      acceptedTerms: e.target.terms.checked,
    };

    if (!isLoggedIn) {
      form.email = e.target.email.value;
      form.password = e.target.password.value;
    }

    addCompany(form);
  }

  return (
    <div className="AddCompany">
      <h1>Add Your Company</h1>
      <div>
        <form className="AddCompany-form" onSubmit={submitForm}>
          {renderUseCurrentAccountMessage()}
          {renderSignup()}
          <Input
            name="name"
            type="text"
            placeholder="Company name"
            className="AddCompany-input"
          />
          <Input
            name="tags"
            type="text"
            placeholder="Tags: coffee, restaurant, bar, etc."
            className="AddCompany-input"
          />
          <input onChange={selectImage} type='file' accept='image/*' id='file' ref={inputFile} style={{display: 'none'}}/>
          {renderImageButton()}
          <div className="AddCompany-partnership">
            <Checkbox name="terms" className="AddCompany-checkbox" />
            <div>
              <span>I agree to the</span>
              <span className="AddCompany-partnership-link">Partnership Agreement</span>
              <div>
                <span>and</span>
                <span
                  className="AddCompany-partnership-link"
                  onClick={()=> window.open(`https://paradyse.app/privacypolicy`, "_blank")}
                >
                  Privacy Policy
                </span>
              </div>
            </div>
          </div>
          
          <button className="button AddCompany-button">
            Add Company
          </button>
        </form>
      </div>
    </div>
  );
};

export default View;
