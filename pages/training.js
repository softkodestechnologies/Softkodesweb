import React, { useRef, useEffect } from "react";
import Head from "next/head";
import {
  Footer,
  Header,
  TrainingSection1,
  TrainingSection2,
  TrainingSection3,
} from "../components";

let bgChange = false;
const Training = () => {
  const ovrRef = useRef(null);
  useEffect(() => {
    // if (!window) return;
    // window.addEventListener("scroll", checkBg);
    // return () => {
    //   window.removeEventListener("scroll", checkBg);
    // };
  }, []);

  const checkBg = (e) => {
    const bg1 = document.querySelector(".tr1");
    const ans = percentageSeen(bg1);

    if (bgChange === false) {
      if (ans === true) {
        bgChange = true;
        changeBg(bg1);
      }
    }
    if (bgChange === true) {
      if (ans === false) {
        bgChange = false;
        reverseBg(bg1);
      }
    }
  };

  const changeBg = () => {
    ovrRef.current.style.background = "#000";
    ovrRef.current.style.color = "#fff";
  };
  const reverseBg = () => {
    ovrRef.current.style.background = "#fff";
    ovrRef.current.style.color = "#000";
  };

  const percentageSeen = (el) => {
    const box = el.getBoundingClientRect();
    return box.top <= 0.6 * window.innerHeight && box.bottom >= 0;
  };
  return (
    <div>
      <Head>
        <title>SoftKode</title>
        <meta name="description" content="Softkodes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="tr_ovr" ref={ovrRef}>
        <Header />
        <TrainingSection1 />
        <TrainingSection2 />
        {/* <TrainingSection3 /> */}
        <Footer />
      </div>
    </div>
  );
};

export default Training;
