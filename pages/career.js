import React, { useEffect, useRef } from "react";
import Head from "next/head";
import {
  CareerSection1,
  CareerSection2,
  CareerSection3,
  CareerSection4,
  ContactMain,
  Footer,
  Header,
} from "../components";

let bgChange = false;
const Career = () => {
  const ovrRef = useRef(null);
  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", checkBg);
    return () => {
      window.removeEventListener("scroll", checkBg);
    };
  }, []);

  const checkBg = (e) => {
    const bg1 = document.querySelector(".cu1");
    const bg2 = document.querySelector(".cu2");
    const ans = percentageSeen(bg1);
    const ans2 = percentageSeen(bg2);

    if (bgChange === false) {
      if (ans === true) {
        bgChange = true;
        changeBg(bg1);
      }
      if (ans2 === true) {
        bgChange = true;
        changeBg(bg1);
      }
    }
    if (bgChange === true) {
      if (ans === false && ans2 !== true) {
        bgChange = false;
        reverseBg(bg1);
      }
      if (ans2 === false && ans !== true) {
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

      <div className="car_ovr" ref={ovrRef}>
        <Header black />
        <CareerSection1 />
        <CareerSection2 />
        <CareerSection3 />
        <CareerSection4 />
        <Footer />
      </div>
    </div>
  );
};

export default Career;
