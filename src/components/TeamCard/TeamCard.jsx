import { Card, Img, CardText, List, Cards, Item } from './TeamCard.styled';

export const TeamCard = ({ users }) => {
  return (
    <List>
      {users.map(({ id, photo, name, position, email, phone }) => (
        <Card key={id}>
          <Img src={photo} width="70px" height="70px" alt="Card logo" />
          <Cards>
            <Item>
              <CardText>{name}</CardText>
            </Item>
            <Item>
              <CardText>{position}</CardText>
            </Item>
            <Item>
              <CardText>{email}</CardText>
            </Item>
            <Item>
              <CardText>{phone}</CardText>
            </Item>
          </Cards>
        </Card>
      ))}
    </List>
  );
};
