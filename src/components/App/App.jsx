import AppBar from 'components/AppBar';
import Info from 'components/Info';
import Team from 'components/Team';
import SingUp from 'components/SingUp';
import { AppWrapper } from './App.styled';
import * as API from 'services/api';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(6);
  const [total, setTotal] = useState(0);
  const [btnId, setBtnId] = useState('');

  const fetchUsers = async count => {
    try {
      const response = await API.getUsers(count);
      setTotal(response.total_users);
      setUsers(response.users);
    } catch (error) {
      toast.error(
        error.response
          ? error.response.data.message
          : 'Something went wrong, try again'
      );
    }
  };

  useEffect(() => {
    fetchUsers(count);
  }, [count]);

  const showMoreBtn = () => {
    setCount(count => count + 6);
  };
  const totalCheck = users && count < total;

  const updateUsersAfterSinging = newCount => {
    setCount(newCount);
    fetchUsers(newCount);
  };

  const handleRef = (id, ref) => {
    if (id === btnId) {
      ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClick = btnId => {
    setBtnId(btnId);
  };
  return (
    <>
      <AppBar handleClick={handleClick} />
      <AppWrapper>
        <Info handleClick={handleClick} />
        <Team
          showMoreBtn={showMoreBtn}
          users={users}
          totalCheck={totalCheck}
          handleRef={handleRef}
        />
        <SingUp
          newCountValue={updateUsersAfterSinging}
          handleRef={handleRef}
          onSubmit={handleClick}
        />
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
      </AppWrapper>
    </>
  );
};
