import { styled } from 'styled-components';

const Label = styled.label`
  ${p => p.theme.textStyles.text}
  color: #7e7e7e;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Photo = styled.p`
  ${p => p.theme.textStyles.text}
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const PhotoName = ({ value }) => <Photo>{value}</Photo>;

export const UploadPhoto = ({ children, value, onChange, accept }) => {
  return (
    <Label htmlFor="contained-button-file">
      <input
        name="photo"
        value={value}
        accept={accept}
        style={{ display: 'none' }}
        id="contained-button-file"
        multiple
        type="file"
        onChange={onChange}
        required
      />
      {children}
    </Label>
  );
};
