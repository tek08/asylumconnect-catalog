import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import withRedux from 'next-redux-wrapper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { initializeStore } from '../store';
import theme from '../components/theme';

class AsylumConnect extends App {
  static async getInitialProps() {
    // Where we'll do async calls for initial data
    // Also where we'll check the cookie for a valid JWT
  }

  componentDidMount() {
    // Remove the server-side injected CSS once the client side code takes over
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initializeStore)(AsylumConnect);
