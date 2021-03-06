import React from "react";
import Head from "next/head";
import { ContactMain, Footer, Header } from "../components";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>SoftKode</title>
        <meta name="description" content="Softkodes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <ContactMain />
      <Footer />
    </div>
  );
};

export default Contact;
