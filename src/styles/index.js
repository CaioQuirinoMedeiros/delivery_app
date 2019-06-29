import styled from 'styled-components';
import headerBackground from '../assets/images/header-background.png';

export const Background = styled.Image.attrs({
  source: headerBackground,
})`
  width: 100%;
  position: absolute;
`;
