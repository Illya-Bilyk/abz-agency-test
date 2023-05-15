import { Formik } from 'formik';
import {
  FormWrapper,
  RadioGroup,
  Radio,
  Label,
  PhotoLabel,
  PhotoBtn,
} from './SingUpForm.styled';
import { Inputs } from './Inputs/Inputs';
import { Btn } from 'buttons/MainBtn.styled';
import { UploadPhoto } from './UploadPhoto';
import { PhotoName } from './UploadPhoto';
import { validationSchema } from 'utilities/Validation';
import { ErrorText } from './Inputs/Inputs.styled';
import { useEffect, useState } from 'react';

export const SingUpForm = ({ ids, handleNewUser }) => {
  const [user, setUser] = useState({});

  const initialValues = {
    name: '',
    email: '',
    phone: '',
    picked: '',
    photo: null,
  };

  function findPositionId(user) {
    if (user) {
      const newValue = ids.find(pos => pos.name === user.position_id);
      const updatedId = {
        position_id: newValue.id,
      };
      return updatedId;
    }
    return;
  }

  const handlePhoto = event => {
    const updatedValue = {
      photo: event.currentTarget.files[0],
    };
    setUser(user => ({ ...user, ...updatedValue }));
  };

  const handleSubmit = (values, { resetForm }) => {
    const value = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      position_id: values.picked,
    };
    const posId = findPositionId(value);
    const newUser = { ...value, ...posId };

    setUser(user => ({ ...user, ...newUser }));
    resetForm();
  };

  useEffect(() => {
    const { name, email, phone, position_id } = user;

    if (name && email && phone && position_id) {
      handleNewUser(user);
      setUser({});
    }
  }, [handleNewUser, user]);

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        errors
      >
        {({ errors, touched }) => (
          <FormWrapper>
            <Inputs errors={errors} touched={touched} />
            {/* Radio  */}
            <RadioGroup role="group" aria-labelledby="my-radio-group">
              Select your Position
              {ids.map(({ id, name }) => {
                return (
                  <Label key={id}>
                    <Radio type="radio" name="picked" id={id} value={name} />
                    {name}
                  </Label>
                );
              })}
              {errors.picked && touched.picked ? (
                <ErrorText>{errors.picked}</ErrorText>
              ) : null}
            </RadioGroup>
            {/* Upload */}
            <PhotoLabel className="btn-styles" type="button">
              <UploadPhoto
                onChange={handlePhoto}
                accept="image/jpg, image/jpeg"
              >
                <PhotoBtn>Upload</PhotoBtn>
                {user.photo ? (
                  <PhotoName value={user.photo.name} />
                ) : (
                  'Upload your photo'
                )}
              </UploadPhoto>
            </PhotoLabel>
            {user.photo ? null : (
              <ErrorText>
                *Required (only .jpeg and .jpg types of files)
              </ErrorText>
            )}
            {/* Submit */}
            <Btn
              type="submit"
              style={{ marginLeft: '100px', marginTop: '50px' }}
            >
              Sing up
            </Btn>
          </FormWrapper>
        )}
      </Formik>
    </>
  );
};
