import React from 'react';
import { AppProps } from 'next/app';
import './globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
