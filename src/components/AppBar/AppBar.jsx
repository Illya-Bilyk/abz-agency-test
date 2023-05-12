import logo from 'images/svg/logo.svg';
import MainButton from 'buttons';
import { Header, HeadWrapper } from './AppBar.styled';

export const AppBar = () => {
  const buttons = ['Users', 'Sing up'];
  return (
    <Header>
      <HeadWrapper>
        <div>
          <img src={logo} width="104px" height="26px" alt="logo" />
        </div>
        <div>
          {buttons.map(value => (
            <MainButton key={value} value={value} />
          ))}
        </div>
      </HeadWrapper>
    </Header>
  );
};
