import * as API from 'services/api';
import { useEffect, useState } from 'react';
import { TeamWraper, TeamTitle } from './Team.styled';
import TeamCard from 'components/TeamCard';
import MainButton from 'buttons';

export const Team = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(6);
  const [page, setPage] = useState(0);
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
    setPage(page + 1);
  };

  const totalCheck = users && count < total;

  return (
    <TeamWraper>
      <TeamTitle>Working with GET request</TeamTitle>
      {users && <TeamCard users={users} />}
      {totalCheck && <MainButton value="Show more" onBtn={showMoreBtn} />}
    </TeamWraper>
  );
};
