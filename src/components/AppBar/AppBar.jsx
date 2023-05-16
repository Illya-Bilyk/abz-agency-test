import logo from 'images/svg/logo.svg';
import MainButton from 'buttons';
import { Header, HeadWrapper } from './AppBar.styled';

export const AppBar = ({ handleClick }) => {
  const buttons = [
    { id: 'users', value: 'Users' },
    { id: 'singup', value: 'Sing up' },
  ];
  return (
    <Header>
      <HeadWrapper>
        <div>
          <img src={logo} width="104px" height="26px" alt="logo" />
        </div>
        <div>
          {buttons.map(({ id, value }) => (
            <MainButton
              key={id}
              id={id}
              value={value}
              type="button"
              onBtn={handleClick}
            />
          ))}
        </div>
      </HeadWrapper>
    </Header>
  );
};
