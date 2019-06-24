import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import Hero from './hero';
// can be withHero or plain. withHero is only home page

const Header = styled.div`
  position: ${props => (props.withHero ? 'initial' : 'fixed')};
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => (props.withHero ? '340px' : '72px')};
  background: white;
  font-family: ${props => props.theme.fontHeader};
  z-index: 100;
`;

const HeaderTextContainer = styled.div`
  position: absolute;
  font-weight: 600;
  height: ${props => props.theme.headerTextHeight};
  top: 0;
  /* left: 20px; */
  width: 100%;
  font-size: 34px;
  color: ${props => (props.withHero ? 'white' : 'black')};
  /* border: 1px solid orange; */
  align-items: center;
  display: flex;

  @media (max-width: ${props => props.theme.breakpoint.tablet}) {
    justify-content: center;
    left: 0;
  }
`;

const HeaderText = styled(Link)`
  padding-left: 20px;
  
  @media (max-width: ${props => props.theme.breakpoint.tablet}) {
    padding-left: 0;
  }
`;

export default ({ withHero }) => (
  <Header withHero={withHero} className="Header">
    {withHero && <Hero className="Hero" isHeader />}
    <HeaderTextContainer withHero={withHero} className="HeaderTextContainer">
      <HeaderText to="/" className="HeaderText">
        🌏 intl gringo
      </HeaderText>
    </HeaderTextContainer>
  </Header>
);
