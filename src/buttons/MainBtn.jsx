import { Btn } from './MainBtn.styled';

export const MainButton = ({ value, onBtn, type, disabled, id }) => {
  return (
    <Btn
      id={id}
      type={type}
      disabled={disabled}
      onClick={() => {
        onBtn(id);
      }}
    >
      {value}
    </Btn>
  );
};
