import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Icon } from 'semantic-ui-react';
import './addCC.css';
import { CLOSE_CREDIT_CARD_MODAL, SET_SPOT_ID } from '../../../redux/actions/types';

const AddCreditCardModal = props => {
  const dispatch = useDispatch();
  const open = useSelector(state => state.app.creditCardModalOpen);

  function navigate(page) {
    dispatch({ type: CLOSE_CREDIT_CARD_MODAL });
    props.history.push('/' + 'addcreditcard');
  }

  function closeModal() {
    dispatch({ type: CLOSE_CREDIT_CARD_MODAL });
    dispatch({ type: SET_SPOT_ID, payload: null });
  }

  return (
    <Modal open={open} className="addCC">
      <Modal.Content>
        <div className="addCC-close">
          <Icon name="close" onClick={closeModal} />
        </div>
        <div className="addCC-content">
          Add a credit card to your account to being subscribing to spots
        </div>
        <div className="addCC-buttons">
          <button
            className="button lsbtn"
            onClick={navigate}
          >
            Add credit card
          </button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default withRouter(AddCreditCardModal);
