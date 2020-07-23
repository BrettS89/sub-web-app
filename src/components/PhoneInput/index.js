import React, { useState } from 'react';
import './PhoneInput.css';
import { Input, Icon } from 'semantic-ui-react';
import { sendToken } from '../../lib/api';

const PhoneInput = props => {
  const [phoneNumber, setPhoneNumber] = useState('');

  function onTextChange(e) {
    console.log(e.target.value);
    setPhoneNumber(e.target.value);
  }

  async function onSubmit() {
    try {
      await sendToken({ phoneNumber });
      props.history.push('/activate');
    } catch(e) {
      alert(e);
    }
  }

  return (
    <div className="PhoneInput">
      <h1>
        Verify your mobile number
      </h1>

      <Input
        iconPosition='left'
        className="PhoneInput-input"
        name="phoneNumber"
        placeholder="Enter your mobile number"
        onChange={onTextChange}
      >
        <Icon name='mobile alternate' />
        <input autoComplete="off" />
      </Input>

      <button className="button PhoneInput-button" onClick={onSubmit}>
        Send verification code
      </button>

      <span className="PhoneInput-skip" onClick={() => props.history.push('/spots')}>
        Skip
      </span>

    </div>
  );
};

export default PhoneInput;
