import React from 'react';
import '../styles/style.css';
import PropTypes from 'prop-types';
import { AppProps } from 'next/app';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
export default MyApp;
