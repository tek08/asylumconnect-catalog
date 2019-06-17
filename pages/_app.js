import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../store';

class AsylumConnect extends App {
  static async getInitialProps() {
    // Where we'll do async calls for initial data
    // Also where we'll check the cookie for a valid JWT
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(initializeStore)(AsylumConnect);
