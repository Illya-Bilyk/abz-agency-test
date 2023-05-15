import { styled } from 'styled-components';
import { Field } from 'formik';

export const LabelMessage = styled.label`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #cb3d40;
  display: flex;
  flex-direction: column;
`;

export const Span = styled.span`
  ${p => p.theme.textStyles.labelSpan};
  display: flex;
  flex-direction: column;
  padding: 4px 0 0 16px;
`;

export const Input = styled(Field)`
  background-color: #f8f8f8;
  border-radius: 4px;
  width: 296px;
  height: 26px;
  margin-top: 50px;
  padding: 14px 16px;
  border: ${props => props.border || '1px solid #d0cfcf'};
  &:focus {
    outline: none;
  }
`;

export const ErrorText = styled.p`
  ${p => p.theme.textStyles.labelSpan}
  color: #cb3d40;
  margin: 4px 0 0 10px;
`;
