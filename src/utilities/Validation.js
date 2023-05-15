import * as Yup from 'yup';

const phoneValidation = /^[\+]{0,1}380([0-9]{9})$/;
export const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too short!')
    .max(60, 'Too long!')
    .required('Required'),
  email: Yup.string()
    .min(2, 'Too short!')
    .max(100, 'Too long!')
    .required('Required'),
  phone: Yup.string()
    .matches(
      phoneValidation,
      'Phone number should start with code of Ukraine +380'
    )
    .required('Required'),
  picked: Yup.string().required('Required'),
  photo: null,
});

export function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (
    !/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i.test(
      value
    )
  ) {
    error = 'Invalid email address';
  }
  return error;
}
