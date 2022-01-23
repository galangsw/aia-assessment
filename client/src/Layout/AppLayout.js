import React from 'react';
import { Global, css } from '@emotion/react';

import Header from './Header';
import Footer from './Footer';


const globalStyle = () => css`
  body {
    transition-duration: 0.1s;
    transition-timing-function: ease;
    transition-property: border, background, color;
  }
  main {
    margin: 0 auto;
    max-width: 1280px;
  }
`;


const AppLayout = ({ children }) => {

  return (
    <>
      <Global styles={[globalStyle()]} />
      <Header/>
      <main>{children}
      </main>
      <Footer />
    </>
  );
};

export default AppLayout;
