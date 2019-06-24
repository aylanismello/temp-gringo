import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import Header from '../components/header';
import Footer from '../components/footer';

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    font-size: 10px;  
  }

  a {
    text-decoration: none; 
    color: inherit;
  }
`;

// how do we set the media query breakpoints to be
// universally accessible here?

const theme = {
  breakpoint: {
    mobileXS: '380px',
    mobileS: '420px',
    mobileM: '580px',
    mobileL: '660px',
    tablet: '780px',
    tabletWide: '1000px',
    desktop: '1200px',
    desktopWide: '1600px'
  },
  headerTextHeight: '72px',
  fontDefault: 'sans-serif',
  fontPost: `'Montserrat', sans-serif`,
  fontHeader: `'Quicksand', sans-serif`,
  fontSubheader: 'Poppins',
  fontLocation: `'Dancing Script', cursive`
};

const Wrapper = styled.div``;

const Page = styled.div`
  margin-top: ${props => (props.withHero ? '0px' : props.theme.headerTextHeight)};
`;

class Base extends React.Component {
  render() {
    const { children, location } = this.props;
    const withHero = location.pathname === '/';

    return (
      <ThemeProvider theme={theme}>
        <Wrapper className="Wrapper">
          <GlobalStyle />
          <Header withHero={withHero} />
          <Page withHero={withHero} className="Page">
            {children}
          </Page>
          <Footer />
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default Base;
