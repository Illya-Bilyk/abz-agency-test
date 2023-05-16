import { InfoWrap, Title, Text } from './Info.styled';
import MainButton from 'buttons';

export const Info = ({ handleClick }) => {
  return (
    <>
      <InfoWrap id="info">
        <Title>Test assignment for front-end developer</Title>
        <Text>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving
        </Text>
        <MainButton
          type="button"
          value="Sing up"
          onBtn={handleClick}
          id="singup"
        />
      </InfoWrap>
    </>
  );
};
