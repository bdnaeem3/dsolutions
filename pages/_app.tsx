import React from "react";
import store from "../redux/store";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

// styles
import "../styles/style.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
