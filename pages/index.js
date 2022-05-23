import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import {
  Footer,
  Header,
  Hero,
  Loading,
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
} from "../components";
import { AnimatePresence, motion } from "framer-motion";
import { useGeneralContext } from "../context/GeneralContext";
import { Controller, Scene } from "react-scrollmagic";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

let bgChange = false;
export default function Home() {
  const { loading, setLoading } = useGeneralContext();
  const [percent, setPercent] = useState(0);
  const ovrRef = useRef(null);
  // const [bgChange, setBgChange] = useState(false);
  useEffect(() => {
    if (loading === true) {
      let clock = setInterval(() => {
        setPercent(percent++);
        if (percent > 100) {
          setLoading(false);
          clearInterval(clock);
        }
      }, 50);
    }
  }, []);
  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", checkBg);
    return () => {
      window.removeEventListener("scroll", checkBg);
    };
  }, []);

  const checkBg = (e) => {
    const bg1 = document.getElementById(
      window.innerWidth > 768 ? "bg-1" : "bg-1-mob"
    );
    const bg2 = document.getElementById("bg-2");
    const bg3 = document.getElementById("bg-3");
    const ans = percentageSeen(bg1);
    const ans2 = percentageSeen(bg2);
    const ans3 = percentageSeen(bg3);

    if (bgChange === false) {
      if (ans === true) {
        bgChange = true;
        changeBg(bg1);
      }
      if (ans2 === true) {
        bgChange = true;
        changeBg(bg1);
      }
      if (ans3 === true) {
        bgChange = true;
        changeBg(bg1);
      }
    }
    if (bgChange === true) {
      if (ans === false && ans2 !== true && ans3 !== true) {
        bgChange = false;
        reverseBg(bg1);
      }
      if (ans2 === false && ans !== true && ans3 !== true) {
        bgChange = false;
        reverseBg(bg1);
      }
      if (ans3 === false && ans !== true && ans2 !== true) {
        bgChange = false;
        reverseBg(bg1);
      }
    }
  };

  const changeBg = () => {
    ovrRef.current.style.background = "#000";
    ovrRef.current.style.color = "#fff";
    const textId = document.querySelectorAll(".cont_blur");
    [...textId].map((item) => {
      item.style.color = "rgba(255, 255, 255, 0.6)";
    });
  };
  const reverseBg = () => {
    ovrRef.current.style.background = "#fff";
    ovrRef.current.style.color = "#000";
    const textId = document.querySelectorAll(".cont_blur");
    [...textId].map((item) => {
      item.style.color = "#000";
    });
  };

  const percentageSeen = (el) => {
    const box = el.getBoundingClientRect();
    return box.top <= 0.6 * window.innerHeight && box.bottom >= 0;
  };

  return (
    <div>
      <Head>
        <title>Softkode</title>
        <meta name="description" content="Softkodes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <AnimatePresence initial={false}> */}
      <div id="ovr" ref={ovrRef}>
        {loading ? (
          <motion.div
            key="loader"
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear", ease: "easeInOut", duration: 0.8 }}
          >
            <Loading loading={loading} percent={percent} />
          </motion.div>
        ) : (
          // <Controller>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            key="main"
            transition={{ type: "linear", ease: "easeInOut", duration: 0.8 }}
          >
            <Header />
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            {/* <Section6 /> */}
            <Section7 />
            <Section8 />
            <Footer />
          </motion.div>
          // </Controller>
        )}
        {/* </AnimatePresence> */}
      </div>
    </div>
  );
}
