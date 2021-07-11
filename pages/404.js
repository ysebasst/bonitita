import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Layout title="Pagina no encontrada">
      <h2 style={{ fontSize: "10vw", textAlign: "center" }}>
        Pagina no encontrada
      </h2>
      <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
        <Link href="/">
          <a>Regresar al inicio</a>
        </Link>
      </p>
    </Layout>
  );
}
