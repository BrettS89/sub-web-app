import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'semantic-ui-react';
import './Activate.css';
import { verifyToken } from '../../lib/api';
import { SET_USER_DATA } from '../../redux/actions/types';


const Activate = props => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');
  // const inputArr = [];
  // for (let i = 0; i < 6; i++) inputArr.push(useRef());
  const input1 = useRef();
  const input2 = useRef();
  const input3 = useRef();
  const input4 = useRef();
  const input5 = useRef();
  const input6 = useRef();
  const inputArr = [input1, input2, input3, input4, input5, input6];

  useEffect(() => {
    inputArr[0].current.focus();
  }, []);

  function renderInputs() {
    return inputArr.map((input, i) => (
      <Input
        key={i}
        ref={input}
        className="Activate-input"
        maxLength="1"
        onChange={(e) => onTextChange(e, i) }
        // onKeyDown={(e) => console.log(e)}
        value={token[i]}
      />
    ));
  }

  function ifBackSpace(i) {
    if (token[i]) {
      const newVal = token.slice(0, i);
      setToken(newVal);
    } else {
      const newVal = token.slice(0, i);
      inputArr[i - 1].current.focus();
      setToken(newVal);
    }
  }

  async function ifNumber(val) {
    setToken(token + val);
    const tok = token + val;
    if (tok.length === 6) {
      try {
        const { user } = await verifyToken({ token: tok });
        dispatch({ type: SET_USER_DATA, payload: user });
        props.history.push('/spots');
      } catch(e) {
        alert(e.message);
      }
    } else {
      inputArr[tok.length].current.focus();
    }
  }

  async function onTextChange(e, i) {
    const val = e.target.value;
    if (val === '') {
      ifBackSpace(i);
    } else {
      await ifNumber(val);
    }   
  }

  return (
    <div className="Activate">
      <h1>
        Confirm Verification Code
      </h1>
      <div className="Activate-inputs">
        {renderInputs()}
      </div>
      <span className="Activate-skip">
        Skip
      </span>
    </div>
  );
};

export default Activate;
