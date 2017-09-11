import React, { Component } from 'react';
import { orange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import logo from './images/logo.png';
import './App.css';

class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
      palette: {
        textColor: orange500
      },
      appBar: {
        height: 50,
      },
    });

    // Create a Title component that'll render an <h1> tag with some styles
    const Title = styled.h1`
      font-size: 2.5em;
      text-align: center;
    `;

    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
      padding: 4em;
      background: papayawhip;
    `;

    const Subtitle = styled.p`
      font-size: 1.5em;
      text-align: center;
    `;

    const SubtitleSmall = styled.p`
      font-size: 1.2em;
      text-align: center;
    `;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Wrapper>
          <Title>
            <img src={logo} width="80%" alt="healthylicious logo" />
          </Title>
          <Subtitle>Coming Soon ...</Subtitle>
          <SubtitleSmall>Reach us:- Healthybee.fit@gmail.com / +91-8793580502 / +91-9764689306 for any queries.</SubtitleSmall>
          <SubtitleSmall>Address:- Bhoir Palace, Next to SBI Bank, Dange Chowk, Pune, Maharashtra - 411033</SubtitleSmall>
        </Wrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;
