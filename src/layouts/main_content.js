import React from 'react';
import styled from 'styled-components';

const MainContent = styled.div`
  padding: 1.5rem 0.5rem;
  font-size: 18px;
  font-family: ${props => props.theme.fontPost};
  line-height: 1.35;

  display: grid;
  grid-row-gap: 5rem;

  @media (min-width: ${props => props.theme.breakpoint.mobileS}) {
    padding: 1.5rem 0.7rem;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileM}) {
    padding: 1.5rem 25px;
  }

  @media (min-width: ${props => props.theme.breakpoint.mobileL}) {
    padding: 1.5rem 30px;
  }

  @media (min-width: ${props => props.theme.breakpoint.tablet}) {
    padding: 1.5rem 160px;
  }

  @media (min-width: ${props => props.theme.breakpoint.desktop}) {
    padding: 1.5rem 350px;
  }

  @media (min-width: ${props => props.theme.breakpoint.desktopWide}) {
    padding: 1.5rem 480px;
  }
`;

export default MainContent;
