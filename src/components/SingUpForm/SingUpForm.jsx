import { Formik } from 'formik';
import {
  FormWrapper,
  Span,
  Input,
  RadioGroup,
  Radio,
  Label,
} from './SingUpForm.styled';

export const SingUpForm = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    picked: '',
    photo: null,
  };
  return (
    <>
      <Formik initialValues={initialValues}>
        <FormWrapper>
          <label htmlFor="name">
            <Input type="text" placeholder="Your name" name="name" required />
          </label>
          <label htmlFor="email">
            <Input type="email" placeholder="Email" name="email" required />
          </label>
          <label htmlFor="phone">
            <Input type="phone" placeholder="Phone" name="phone" required />
            <Span>+38 (XXX) XXX - XX - XX</Span>
          </label>

          <RadioGroup role="group" aria-labelledby="my-radio-group">
            Select your Position
            <Label>
              <Radio type="radio" name="picked" value="Frontend developer" />
              Frontend developer
            </Label>
            <Label>
              <Radio type="radio" name="picked" value="Backend developer" />
              Backend developer
            </Label>
            <Label>
              <Radio type="radio" name="picked" value="Designer" />
              Designer
            </Label>
            <Label>
              <Radio type="radio" name="picked" value="QA" />
              QA
            </Label>
          </RadioGroup>
          <label htmlFor="photo">
            <input type="file" placeholder="File" name="file" required />
          </label>
        </FormWrapper>
      </Formik>
    </>
  );
};
