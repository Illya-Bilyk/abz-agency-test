import AppBar from 'components/AppBar';
import Info from 'components/Info';
import Team from 'components/Team';
import SingUp from 'components/SingUp';
import { AppWrapper } from './App.styled';
import * as API from 'services/api';
import { useEffect, useState } from 'react';

export const App = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(6);
  const [total, setTotal] = useState(0);

  const fetchUsers = async count => {
    try {
      const response = await API.getUsers(count);
      setTotal(response.total_users);
      setUsers(response.users);
    } catch (error) {
      console.log(error);
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
  return (
    <>
      <AppBar />
      <AppWrapper>
        <Info />
        <Team showMoreBtn={showMoreBtn} users={users} totalCheck={totalCheck} />
        <SingUp newCountValue={updateUsersAfterSinging} />
      </AppWrapper>
    </>
  );
};
