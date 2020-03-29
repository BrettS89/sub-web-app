import React, { useState } from 'react';
import './Contact.css';
import View from './view';
import { contactUs } from '../../lib/api';

const Contact = props => {
  const [callUsModal, setCallUsModal] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    const form = {
      email: e.target.email.value,
      message: e.target.message.value,
    };
    if (!form.message || !form.email) {
      alert('Please include and email and message');
      return;
    }
    try {
      const { message } = await contactUs(form);
      alert('Your message was sent. We\'ll be in touch');
    } catch(e) {
      alert('There was a problem sending your message. Please try again');
    }
    
    props.history.push('/');
  }

  return (
    <View
      onSubmit={onSubmit}
      callUsModal={callUsModal}
      setCallUsModal={setCallUsModal}
    />
  );
};

export default Contact;
