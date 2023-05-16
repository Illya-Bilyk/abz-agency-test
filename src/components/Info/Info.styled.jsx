import { styled } from 'styled-components';
import media from 'media/media';
import BgUhd from '../../images/bg/BgUhd.png';
import BgDesktop from '../../images/bg/BgDesktop.png';
import BgTablet from '../../images/bg/BgTablet.png';
import BgMobile from '../../images/bg/BgMobile.png';

export const InfoWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 360px;
  margin-bottom: 140px;

  background-image: url(${BgMobile});

  ${media.tablet`
  background-image: url(${BgTablet});
  width: 768px;
 
  `};
  ${media.desktop`
  background-image: url(${BgDesktop});
  width: 1024px;
    height: 650px;
  `};
  ${media.uhd`
  background-image: url(${BgUhd} );
    height: 650px;
  width: 1170px;
  `};
`;

export const Title = styled.h2`
  ${p => p.theme.textStyles.heading1};
  text-align: center;
  color: #ffffff;
  width: 328px;
  margin: 0 auto;
  margin-bottom: 21px;

  ${media.tablet`
     width: 380px;
  `};
`;

export const Text = styled.p`
  ${p => p.theme.textStyles.text};
  text-align: center;
  color: #ffffff;
  width: 328px;
  margin: 0 auto;
  margin-bottom: 32px;

  ${media.tablet`
     width: 380px;
  `};
`;
