import React from 'react';
import { Icon, Input } from 'semantic-ui-react'

const View = ({ onFormSubmit, onInputChange, goBack }) => {
  return (
    <div className="AddCreditCard">
      <div className="Account-backbutton">
        <div onClick={goBack}>
          <Icon name="chevron left" />
          <span>Back</span>
        </div>
      </div>
      <h1>Add or Replace Credit Card</h1>
      <div className="AddCreditCard-form-container">
        <div className="AddCreditCard-form">
          <h3>Add new card</h3>
          <Input
            iconPosition='left'
            placeholder="Card number"
            className="AddCreditCard-form-input"
            onChange={e => onInputChange('cardNumber', e)}
          >
            <Icon name='credit card' />
            <input />
          </Input>

          {/* <Input
            iconPosition='left'
            placeholder="MM/YY"
            className="AddCreditCard-form-input"
            onChange={e => onInputChange('date', e)}
          >
            <Icon name='calendar' />
            <input maxLength="5" />
          </Input> */}

          <Input
            iconPosition='left'
            placeholder="Expiration month MM"
            className="AddCreditCard-form-input"
            onChange={e => onInputChange('month', e)}
          >
            <Icon name='calendar' />
            <input maxLength="2" type="number" />
          </Input>

          <Input
            iconPosition='left'
            placeholder="Expiration year YY"
            className="AddCreditCard-form-input"
            onChange={e => onInputChange('year', e)}
          >
            <Icon name='calendar' />
            <input maxLength="2" type="number" />
          </Input>

          <Input
            iconPosition='left'
            placeholder="CVC"
            className="AddCreditCard-form-input"
            onChange={e => onInputChange('cvc', e)}
          >
            <Icon name='lock' />
            <input maxLength="4" />
          </Input>

          <button
            className="button AddCreditCard-button"
            onClick={onFormSubmit}
          >
            Add card
          </button>

        </div>
      </div>
    </div>
  );
};

export default View;
