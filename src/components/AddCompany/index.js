import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMPANY } from '../../redux/actions/types';
import './AddCompany.css';
import View from './view';
import { getUploadPhotoUrl } from '../../lib/api';
import imageUpload from '../../utils/imageUpload';

const AddCompany = props => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.userData);
  const isLoggedIn = !!user._id;

  const [image, setImage] = useState(null);
  const inputFile = useRef(null);

  async function addCompany(form) {
    if (!image) {
      alert('A photo of your business is required');
      return;
    }
    try {
      var { url, key } = await getUploadPhotoUrl(image.name, image.type);
      const response = await imageUpload(url, image);
    } catch(e) {
      console.log(e);
      alert(e.message);
      return;
    }
    form.photo = key;
    dispatch({ type: ADD_COMPANY, payload: { form, navigate } });
  }

  function navigate() {
    props.history.push('/company/dashboard');
  }

  async function selectImage(e) {
    const image = e.target.files[0];
    setImage(e.target.files[0]);
  }

  return (
    <View
      isLoggedIn={isLoggedIn}
      addCompany={addCompany}
      inputFile={inputFile}
      selectImage={selectImage}
      imageAdded={image}
    />
  );
};

export default AddCompany;
