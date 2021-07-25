import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import LinkHTML from "../components/LinkHTML";

export default function Custom404() {
  return (
    <Layout title="Pagina no encontrada">
      <div style={{ padding: "1rem 0" }}>
        <h2
          style={{
            marginBottom: "1rem",
            fontSize: "10vw",
            textAlign: "center",
          }}
        >
          Pagina no encontrada
        </h2>
        <p style={{ textAlign: "center", fontSize: "1.5rem" }}>
          <Link href="/">
            <LinkHTML>Regresar al inicio</LinkHTML>
          </Link>
        </p>
      </div>
    </Layout>
  );
}
