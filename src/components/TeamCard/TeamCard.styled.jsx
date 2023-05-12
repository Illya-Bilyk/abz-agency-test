import { styled } from 'styled-components';
import media from 'media/media';

export const List = styled.ul`
  padding: 0;
  margin: 0;
  margin-bottom: 34px;

  ${media.tablet`
    display: grid;
    grid-template-columns: 1fr 1fr; 
  `};

  ${media.desktop`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
      margin-bottom: 21px;
  `};
`;

export const Card = styled.li`
  width: 288px;
  height: 234px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;

  ${media.tablet`
    width: 304px;
    height: 214px;
    margin-bottom: 16px;
    &: nth-child(odd){
    margin: 0 16px 16px 0;
  }
  `};
  ${media.desktop`
    width: 242px;
    height: 214px;
    margin-bottom: 16px;
    &:not(:nth-child(3n)){
    margin: 0 29px 29px 0;
  }
    &:nth-child(3n){
      margin:0;
      margin-bottom: 29px;
    }
  `};
  ${media.uhd`
    width: 330px;
    height: 214px;
  `};
`;

export const Img = styled.img`
  border-radius: 50%;
`;

export const CardText = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: rgba(0, 0, 0, 0.87);
  margin: 0 auto;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Cards = styled.ul`
  padding: 0;
  width: 288px;
  height: 234px;
  ${media.tablet`
    width: 304px;
    height: 214px;
  `};
  ${media.desktop`
    width: 242px;
    height: 214px;
  `};
  ${media.uhd`
    width: 330px;
    height: 214px;
  `};
`;
export const Item = styled.li`
  list-style: none;
  &:first-child {
    margin: 20px 0;
  }
`;
