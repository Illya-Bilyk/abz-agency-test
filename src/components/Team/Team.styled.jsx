import { styled } from 'styled-components';

export const TeamWraper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 140px;
`;

export const TeamTitle = styled.h2`
  ${p => p.theme.textStyles.heading1};
  text-align: center;
  display: flex;
  align-items: flex-end;
  margin-bottom: 50px;
`;
