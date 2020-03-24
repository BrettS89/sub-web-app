import React from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Icon } from 'semantic-ui-react';
import './LoginSignup.css';
import { CLOSE_LOGIN_MODAL, SET_SPOT_ID } from '../../../redux/actions/types';

const LoginSignupModal = props => {
  const dispatch = useDispatch();
  const open = useSelector(state => state.app.loginModalOpen);

  function navigate(page) {
    dispatch({ type: CLOSE_LOGIN_MODAL });
    props.history.push('/' + page);
  }

  function closeModal() {
    dispatch({ type: CLOSE_LOGIN_MODAL });
    dispatch({ type: SET_SPOT_ID, payload: null });
  }

  return (
    <Modal open={open} className="LSModal">
      <Modal.Content className="LSModal-main">
        <div className="LSModal-close">
          <Icon name="close" onClick={closeModal} />
        </div>
        <div className="LSModal-content">
          You need to be logged in to add a subscription
        </div>
        <div className="LSModal-buttons">
          <button
            className="button lsbtn"
            onClick={() => navigate('login')}
          >
            Login
          </button>
          <span>or</span>
          <button
            className="button lsbtn"
            onClick={() => navigate('register')}
          >
            Sign up
          </button>
        </div>
      </Modal.Content>
    </Modal>
  );
};

export default withRouter(LoginSignupModal);
