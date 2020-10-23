import React from "react";
import { Global, css } from "@emotion/core";
import Head from "next/head";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          :root {
            --blue: #1b80c7;
            --lightblue: #c8dff1;
            --green: #65b32e;
            --white: #edebeb;
            --black: #010101;
          }
          html {
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
        `}
      />
      <Head>
        <html lang="es" />
        <title>DocRed Mockup</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
          integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
