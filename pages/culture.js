import React, { useEffect, useRef } from "react";
import Head from "next/head";
import {
  CultureSection1,
  CultureSection2,
  CultureSection3,
  CultureSection4,
  CultureSection5,
  CultureSection6,
  CultureSection7,
  CultureSection8,
  Footer,
  Header,
  HorFooter,
  SmallCulture,
} from "../components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

const Culture = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    if (window && window.innerWidth <= 1024) return;
    const scCon = document.querySelector(".sc-con");

    scCon.addEventListener("scroll", () => console.log("dddddd"));
    const cu1 = document.querySelector(".cu-1");
    const { left } = cu1.getBoundingClientRect();

    if (!window) return;
    window.addEventListener("scroll", checkBg);
    return () => {
      window.removeEventListener("scroll", checkBg);
    };
  }, []);

  const checkBg = () => {
    console.log(window.scrollY);
  };

  return (
    <div>
      <Head>
        <title>SoftKode</title>
        <meta name="description" content="Softkodes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {window && window.innerWidth > 1024 && (
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            direction: "horizontal",
          }}
          watch={[window.innerWidth]}
          containerRef={containerRef}
        >
          <main data-scroll-container className="sc-con" ref={containerRef}>
            <div className="culture-page">
              <div className="culture-page-wrap">
                <CultureSection1 />
                <CultureSection2 />
                <CultureSection3 />
                <CultureSection4 />
                <CultureSection5 />
                <CultureSection6 />
                <CultureSection7 />
                <CultureSection8 />
                {/* <HorFooter /> */}
              </div>
            </div>
          </main>
        </LocomotiveScrollProvider>
      )}
      {window && window.innerWidth <= 1024 && (
        <>
          <SmallCulture />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Culture;
