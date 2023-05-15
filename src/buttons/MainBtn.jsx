import { Btn } from './MainBtn.styled';

export const MainButton = ({ value, onBtn, type, disabled }) => {
  return (
    <Btn
      type={type}
      disabled={disabled}
      onClick={() => {
        onBtn();
      }}
    >
      {value}
    </Btn>
  );
};
