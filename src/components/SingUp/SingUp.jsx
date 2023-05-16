import { SingUpWrapper, SingUpTitle } from './SingUp.styled';
import SingUpForm from 'components/SingUpForm';
import { useEffect, useState, useRef } from 'react';
import * as API from 'services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SingUp = ({ newCountValue, handleRef, onSubmit }) => {
  const [ids, setIds] = useState([]);
  const singUpRef = useRef();
  if (singUpRef.current) handleRef(singUpRef.current.id, singUpRef);

  const fetchId = async () => {
    try {
      const res = await API.getId();
      setIds(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchId();
  }, []);

  const postNewUser = async user => {
    try {
      const res = await API.postUser(user);
      console.log('postNewUser -> res:', res);
    } catch (error) {
      toast.error(
        error.response
          ? error.response.data.message
          : 'Something went wrong, try again'
      );
    }
  };

  const handleNewUser = async user => {
    await postNewUser(user);
    newCountValue(6);
  };

  return (
    <SingUpWrapper ref={singUpRef} id="singup">
      <SingUpTitle>Working with POST request</SingUpTitle>
      <SingUpForm ids={ids} handleNewUser={handleNewUser} onSubmit={onSubmit} />
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </SingUpWrapper>
  );
};
