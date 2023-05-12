import { styled } from 'styled-components';
import media from 'media/media';

export const AppWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;

  display: grid;
  gap: 0px;
  // max-width: 800px;
  margin: 0 auto;
  padding: 0px;

  width: 360px;
  ${media.tablet`
      width: 768px;
  `};
  ${media.desktop`
    width: 1024px;
  `};
  ${media.uhd`
    width: 1170px;
  `};
`;
