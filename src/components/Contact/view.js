import React from 'react';
import { Form, Input, TextArea } from 'semantic-ui-react';
import CallUsModal from '../_modals/CallUs';

const View = ({ onSubmit, callUsModal, setCallUsModal }) => {
  return (
    <div className="Contact">
    <Form className="Contact-form" onSubmit={onSubmit}>
      <h1>Contact us</h1>
      <Input
        className="Contact-form-input"
        name="email"
        placeholder="Email"
        type="email"
      />
      <TextArea
        className="Contact-form-input"
        rows={8}
        name="message"
        placeholder="How can we help you?"
        style={{ marginBottom: 15 }}
      />
      <button className="button Contact-form-button">
        Contact
      </button>
    </Form>
    <div>
      <div className="Contact-or">or</div>
      <div className="Contact-register" onClick={() => setCallUsModal(true)}>Call us</div>
    </div>
    <CallUsModal
      isOpen={callUsModal}
      setCallUsModal={setCallUsModal}
    />
  </div>
  );
};

export default View;
