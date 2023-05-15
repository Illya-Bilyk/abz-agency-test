import { Form, Field } from 'formik';
import { styled } from 'styled-components';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const RadioGroup = styled.div`
  ${p => p.theme.textStyles.text};
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

export const PhotoLabel = styled.button`
  background: #f8f8f8;
  border: 1px solid #d0cfcf;
  border-radius: 4px;
  width: 328px;
  height: 54px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0;
`;

export const PhotoBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0, 0, 0, 0.87);
  width: 83px;
  height: 52px;
  background: #f8f8f8;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 4px 0px 0px 4px;
  margin-right: 16px;
`;
