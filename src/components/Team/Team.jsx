import * as API from 'services/api';
import { useEffect, useState } from 'react';
import { TeamWraper, TeamTitle } from './Team.styled';
import TeamCard from 'components/TeamCard';
import MainButton from 'buttons';

export const Team = ({ showMoreBtn, users, totalCheck }) => {
  return (
    <TeamWraper>
      <TeamTitle>Working with GET request</TeamTitle>
      {users && <TeamCard users={users} />}
      {totalCheck && (
        <MainButton value="Show more" type="button" onBtn={showMoreBtn} />
      )}
    </TeamWraper>
  );
};
