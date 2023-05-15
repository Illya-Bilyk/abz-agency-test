import { Span, Input, ErrorText } from './Inputs.styled';
import { validateEmail } from 'utilities/Validation';

export const Inputs = ({ errors, touched }) => {
  return (
    <>
      <Input
        type="text"
        placeholder="Your name"
        name="name"
        border={errors.name && touched.name ? '1px solid #CB3D40' : null}
      />
      {errors.name && touched.name ? (
        <ErrorText>{errors.name}</ErrorText>
      ) : null}

      <Input
        type="email"
        placeholder="Email"
        name="email"
        validate={validateEmail}
        border={errors.email && touched.email ? '1px solid #CB3D40' : null}
      />
      {errors.email && touched.email ? (
        <ErrorText>{errors.email}</ErrorText>
      ) : null}
      <Input
        type="phone"
        placeholder="Phone"
        name="phone"
        border={errors.phone && touched.phone ? '1px solid #CB3D40' : null}
      />
      {errors.phone && touched.phone ? (
        <ErrorText>{errors.phone}</ErrorText>
      ) : null}
      <Span>+38 (XXX) XXX - XX - XX</Span>
    </>
  );
};
