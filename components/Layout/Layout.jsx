import Head from "next/head";

import Navbar from "../Navbar";
import { GlobalStyles } from "./Global.styles";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Bonitita Express{props.title ? ` | ${props.title}` : ""}</title>
      </Head>
      <GlobalStyles />
      <Navbar />
      {props.children}
    </>
  );
}
