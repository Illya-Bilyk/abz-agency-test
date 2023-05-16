import { TeamWraper, TeamTitle } from './Team.styled';
import TeamCard from 'components/TeamCard';
import MainButton from 'buttons';
import { useRef } from 'react';

export const Team = ({ showMoreBtn, users, totalCheck, handleRef }) => {
  const usersRef = useRef();
  if (usersRef.current) handleRef(usersRef.current.id, usersRef);
  return (
    <TeamWraper ref={usersRef} id="users">
      <TeamTitle>Working with GET request</TeamTitle>
      {users && <TeamCard users={users} />}
      {totalCheck && (
        <MainButton value="Show more" type="button" onBtn={showMoreBtn} />
      )}
    </TeamWraper>
  );
};
