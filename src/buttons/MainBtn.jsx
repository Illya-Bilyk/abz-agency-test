import { Btn } from './MainBtn.styled';

export const MainButton = ({ value, onBtn }) => {
  return (
    <Btn
      type="button"
      onClick={() => {
        onBtn();
      }}
    >
      {value}
    </Btn>
  );
};
