import React from "react";
import Head from "next/head";
import { Footer, Header, NewsletterMain } from "../components";

const Newsletter = () => {
  return (
    <div>
      <Head>
        <title>SoftKode</title>
        <meta name="description" content="Softkodes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <NewsletterMain />
      <Footer />
    </div>
  );
};

export default Newsletter;
