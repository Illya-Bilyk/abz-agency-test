import AppBar from 'components/AppBar';
import Info from 'components/Info';
import Team from 'components/Team';
import Register from 'components/SingUp';
import { AppWrapper } from './App.styled';

export const App = () => {
  return (
    <>
      <AppBar />
      <AppWrapper>
        <Info />
        <Team />
        <Register />
      </AppWrapper>
    </>
  );
};
