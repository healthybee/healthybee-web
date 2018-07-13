import React, { Component } from 'react';
import { orange500 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import styled from 'styled-components';
import './App.css';
import logo from './images/logo.jpg';

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

    const LogoWrapper = styled.div`
      text-align: center;
      img {
        max-width:100%;
      }
    `;

    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
      padding: 4em;
      background: #FFC540;
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
          <LogoWrapper>
            <img src={logo} alt="healthybee logo" title="logo"/>
          </LogoWrapper>
          <Subtitle>Coming Soon ...</Subtitle>
          <SubtitleSmall>Reach us:- Healthybee.fit@gmail.com / +91-9975690709 / +91-8793580502 for any queries.</SubtitleSmall>
          <SubtitleSmall>Address 1:- Shop no. 6 Alacrity commercial complex, behind Bitwise Terra Tower, by pass road Baner Pune 411045</SubtitleSmall>
          <SubtitleSmall>Address 2:- Silver Sports Club, near by Mumbai-Bangalore highway, behind Vedanta society, Wakad, Pune 411057</SubtitleSmall>
        </Wrapper>
      </MuiThemeProvider>
    );
  }
}

export default App;
