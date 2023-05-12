import styled from 'styled-components';
import media from 'media/media';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 60px;
  background-color: #fff;
  width: 100%;
`;

export const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 16px;

  ${media.tablet`
    padding: 13px 32px;
    width: 704px;
  `};
  ${media.desktop`
    padding: 13px 60px;
    width:904px;
  `};
  ${media.uhd`
    padding: 13px 0;
    width: 1170px;
  `};
`;
