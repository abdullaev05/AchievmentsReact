import React from 'react';
import './AppHeaderStyle.jsx';
import styled from 'styled-components';

const Head = styled.h1`
  font-size: 40px;
  color: grey;
  text-align: center;
  font-weight: 100;
  `;

const AppHeader = () => {
    return <Head>Achievments</Head>
};

export default AppHeader;