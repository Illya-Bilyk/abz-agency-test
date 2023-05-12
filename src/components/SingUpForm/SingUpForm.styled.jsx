import { Form, Field } from 'formik';
import { styled } from 'styled-components';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Span = styled.span`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #7e7e7e;
  display: flex;
  flex-direction: column;
  padding: 4px 0 0 16px;
`;

export const Input = styled(Field)`
  background: #f8f8f8;
  border: 1px solid #d0cfcf;
  border-radius: 4px;
  width: 296px;
  height: 26px;
  margin-top: 50px;
  padding: 14px 16px;
`;

export const RadioGroup = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: rgba(0, 0, 0, 0.87);

  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-bottom: 50px;
`;

export const Radio = styled(Field)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  margin: 0 12px 0 0;

  &: checked {
    border: 1px solid #00bdd3;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 13px 0 0 0;

  &: checked + ${Radio} {
    border: 1px solid #00bdd3;
  }
`;
