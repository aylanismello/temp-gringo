import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';


const Bio = styled.div`
`;
const BioText = styled.div`
`;
const BioPic = styled.img`
`;

const Content = styled.div`
`;

const GlobalStyle = createGlobalStyle`
  body {
   color: black;
  }
`;

const theme = {
  primary: 'black'
};

export default ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle>
      <Content>
        <Bio>
          <BioText></BioText>
          <BioPic></BioPic>
        </Bio>
      </Content>
    </GlobalStyle>
  </ThemeProvider>
);
