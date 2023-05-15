import styled from 'styled-components';

export const Btn = styled.button`
  cursor: pointer;
  width: 104px;
  height: 34px;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.textColor};
  border-radius: 80px;
  border-color: transparent;
  &:first-child {
    margin: 0 10px 0 5px;
  }
  &:hover {
    background-color: ${p => p.theme.colors.btnHover};
  }
  &:disabled {
    background-color: ${p => p.theme.colors.btnDisabled};
    color: rgba(255, 255, 255, 0.87);
  }
`;
