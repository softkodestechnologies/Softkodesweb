import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  LocomotiveScrollProvider,
  useLocomotiveScroll,
} from "react-locomotive-scroll";

const Section2 = () => {
  const { scroll } = useLocomotiveScroll();
  const [scReady, setScReady] = useState(false);

  useEffect(() => {
    if (!scroll) return;
    if (scReady) return;
    scroll.on("scroll", (args) => {
      // Get all current elements : args.currentElements
      if (typeof args.currentElements["s1"] === "object") {
        let progress1 = args.currentElements["s1"].progress;
        if (progress1 > 0.2 && progress1 < 0.8) reverseBg();
      }
      if (typeof args.currentElements["s2"] === "object") {
        let progress2 = args.currentElements["s2"].progress;
        if (progress2 > 0.2 && progress2 < 0.8) changeBg();
      }
      if (typeof args.currentElements["s3"] === "object") {
        let progress3 = args.currentElements["s3"].progress;
        if (progress3 > 0.2 && progress3 < 0.8) reverseBg();
      }
      if (typeof args.currentElements["s4"] === "object") {
        let progress4 = args.currentElements["s4"].progress;
        if (progress4 > 0.2 && progress4 < 0.8) changeBg();
      }
      if (typeof args.currentElements["s5"] === "object") {
        let progress5 = args.currentElements["s5"].progress;
        if (progress5 > 0.2 && progress5 < 0.8) reverseBg();
      }
      if (typeof args.currentElements["s6"] === "object") {
        let progress6 = args.currentElements["s6"].progress;
        if (progress6 > 0.2 && progress6 < 0.8) changeBg();
      }
      if (typeof args.currentElements["s7"] === "object") {
        let progress7 = args.currentElements["s7"].progress;
        if (progress7 > 0.2 && progress7 < 0.8) reverseBg();
      }
      if (typeof args.currentElements["s8"] === "object") {
        let progress8 = args.currentElements["s8"].progress;
        if (progress8 > 0.2 && progress8 < 0.8) changeBg();
      }
    });
    setScReady(true);
  }, [scroll]);

  const changeBg = (el) => {
    const con = document.querySelector(".sc-con");
    if (con.classList.contains("sc-alt")) return;
    con.classList.add("sc-alt");
  };
  const reverseBg = (el) => {
    const con = document.querySelector(".sc-con");
    if (con.classList.contains("sc-alt")) con.classList.remove("sc-alt");
  };
  return (
    <section
      data-scroll
      data-scroll-id="s2"
      className="culture-section2 cul-sel cu-1"
    >
      <div className="hor-container">
        <div className="section2_main">
          <h1>Talent</h1>
          <p>
            We are a team of young talented designers and developers who are
            ready to tackle the most intricate puzzles when it comes to websites
            and app development. As a team, We are committed to providing smart
            and effective solutions to technology-related problems.
          </p>
        </div>
        <div className="section2_img">
          <div className="img1 im">
            <Image
              width={293}
              height={355}
              alt="people"
              src="/assets/people1.png"
            />
          </div>
          <div className="img2 im">
            <Image
              width={293}
              height={355}
              alt="people"
              src="/assets/people2.png"
            />
          </div>
          <div className="img3 im">
            <Image
              width={293}
              height={355}
              alt="people"
              src="/assets/people3.png"
            />
          </div>
          <div className="img4 im">
            <Image
              width={293}
              height={355}
              alt="people"
              src="/assets/people4.png"
            />
          </div>
          <div className="img5 im">
            <Image
              width={293}
              height={355}
              alt="people"
              src="/assets/people5.png"
            />
          </div>
          <div className="img6 im">
            <Image
              width={293}
              height={355}
              alt="people"
              src="/assets/people6.png"
            />
          </div>
          <div className="img7 im">
            <Image
              width={293}
              height={355}
              alt="people"
              src="/assets/people7.png"
            />
          </div>
          <div className="img8 im">
            <Image
              width={293}
              height={355}
              alt="people"
              src="/assets/people8.png"
            />
          </div>
          <div className="img9">
            <Image
              width={293}
              height={355}
              alt="people"
              src="/assets/people9.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
