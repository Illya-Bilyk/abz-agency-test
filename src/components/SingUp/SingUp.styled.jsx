import { styled } from 'styled-components';

export const SingUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

export const SingUpTitle = styled.h2`
  ${p => p.theme.textStyles.heading1};
  display: flex;
  align-items: flex-end;
  text-align: center;
`;
