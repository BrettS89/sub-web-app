import React from 'react';
import { Input } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

const View = ({ isLoggedIn, addCompany, inputFile, selectImage, imageAdded }) => {
  function renderSignup() {
    if (!isLoggedIn) {
      return (
        <div className="AddCompany-signup">
          <div className="AddCompany-loggedin-message">
            Create account and add company
          </div>
          <Input
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
            />
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
          <span>Upload a photo</span>
        </div>
      );
    }
    return (
      <div className="AddCompany-upload">
        <Icon name="check" size="large" />
        <span>Photo added</span>
      </div>
    )
  }

  function submitForm(e) {
    e.preventDefault();
    const form = {
      name: e.target.name.value,
      tags: e.target.tags.value,
    };

    if (!isLoggedIn) {
      form.firstName = e.target.firstName.value;
      form.lastName = e.target.lastName.value;
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
          {/* <Input
            name="photo"
            type="text"
            placeholder="Photo"
            className="AddCompany-input"
          /> */}
          <Input
            name="tags"
            type="text"
            placeholder="Tags: coffee, restaurant, bar, etc."
            className="AddCompany-input"
          />
          <input onChange={selectImage} type='file' accept='image/*' id='file' ref={inputFile} style={{display: 'none'}}/>
          {renderImageButton()}
          <button className="button AddCompany-button">
            Add Company
          </button>
        </form>
      </div>
    </div>
  );
};

export default View;
