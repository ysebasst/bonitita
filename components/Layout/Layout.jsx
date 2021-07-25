import Head from "next/head";

import Navbar from "../Navbar";
import { GlobalStyles } from "../../styles/Global.styles";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title ? `${props.title} - ` : ""}Bonitita Express</title>
      </Head>
      <GlobalStyles />
      <Navbar />
      {props.children}
    </>
  );
}
