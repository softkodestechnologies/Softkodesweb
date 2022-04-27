import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";

let bgChange = false;
const SmallCulture = () => {
  const ovrRef = useRef();
  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", checkBg);
    return () => {
      window.removeEventListener("scroll", checkBg);
    };
  }, []);
  const checkBg = (e) => {
    const bg1 = document.querySelector(".small2");
    const bg2 = document.querySelector(".small4");
    const bg3 = document.querySelector(".small6");
    const bg4 = document.querySelector(".small8");
    const ans = percentageSeen(bg1);
    const ans2 = percentageSeen(bg2);
    const ans3 = percentageSeen(bg3);
    const ans4 = percentageSeen(bg4);

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
      if (ans4 === true) {
        bgChange = true;
        changeBg(bg1);
      }
    }
    if (bgChange === true) {
      if (ans === false && ans2 !== true && ans3 !== true && ans4 !== true) {
        bgChange = false;
        reverseBg(bg1);
      }
      if (ans2 === false && ans !== true && ans3 !== true && ans4 !== true) {
        bgChange = false;
        reverseBg(bg1);
      }
      if (ans3 === false && ans !== true && ans2 !== true && ans4 !== true) {
        bgChange = false;
        reverseBg(bg1);
      }
      if (ans4 === false && ans !== true && ans2 !== true && ans3 !== true) {
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
    <div className="small_culture" ref={ovrRef}>
      <div className="container">
        {/* Small1 */}
        <div className="small1">
          <div className="content">
            <h1>Culture</h1>
            <p>
              Here, we aim to actualize the full potential of every business,
              institution and individual with the use of technology. Our core
              values are passion, creativity, quality, innovation, continuous
              improvement, uniqueness and transparency.
            </p>
          </div>
          <div className="image">
            <Image
              src="/assets/small1.png"
              alt="culture"
              width={301}
              height={460}
            />
          </div>
        </div>
        {/* Small2 */}
        <div className="small2">
          <div className="content">
            <h1>Talent</h1>
            <p>
              We are a team of young talented designers and developers who are
              ready to tackle the most intricate puzzles when it comes to
              websites and app development. As a team, We are committed to
              providing smart and effective solutions to technology-related
              problems.
            </p>
          </div>
          <div className="image">
            <div className="img1">
              <Image
                src="/assets/people1.png"
                alt="culture"
                width={151}
                height={225}
              />
            </div>
            <div className="img2">
              <Image
                src="/assets/people2.png"
                alt="culture"
                width={151}
                height={225}
              />
            </div>
            <div className="img3">
              <Image
                src="/assets/people3.png"
                alt="culture"
                width={151}
                height={225}
              />
            </div>
            <div className="img4">
              <Image
                src="/assets/people4.png"
                alt="culture"
                width={151}
                height={225}
              />
            </div>
            <div className="img5">
              <Image
                src="/assets/people5.png"
                alt="culture"
                width={151}
                height={225}
              />
            </div>
          </div>
        </div>
        {/* Small3 */}
        <div className="small3">
          <div className="content">
            <h1>We’re about a mixture of Science, Logic and Emotion...</h1>
            <p>
              In other to provide the best experience, our products and services
              intersects science, logic and emotion. We approach projects with
              technical precision, while considering the best possible outcome
              that evokes emotions.
            </p>
          </div>
          <div className="image">
            <div className="img1 img">
              <Image
                src="/assets/culture2_img2.png"
                alt="culture"
                width={232}
                height={263}
              />
            </div>
            <div className="img2 img">
              <Image
                src="/assets/culture2_img1.png"
                alt="culture"
                width={232}
                height={263}
              />
            </div>
            <div className="img3 img">
              <Image
                src="/assets/culture2_img3.png"
                alt="culture"
                width={232}
                height={263}
              />
            </div>
          </div>
        </div>
        {/* Small4 */}
        <div className="small4">
          <div className="content">
            <h1>Preamble</h1>
            <p>
              At Softkodes, we provide tech solutions with solid design and
              development expertise. We build world class websites, mobile
              applications, and provide online business services
            </p>
          </div>
          <div className="image">
            <div className="img1">
              <Image
                src="/assets/culture4_img.png"
                alt="culture"
                width={322}
                height={263}
              />
            </div>
          </div>
        </div>
        {/* Small5 */}
        <div className="small5">
          <div className="content">
            <h1>
              Evoke <span>emotion</span> simplify the <span>process</span> and
              transform pooeple/s dily routine for the better.
            </h1>

            <h3>Our Agency Policy</h3>
            <p>
              Softkodes is an education platform that empowers creatives to do
              what they love best: designing visual magic
            </p>
          </div>
        </div>
        {/* Small6 */}
        <div className="small6">
          <div className="content">
            <p>
              Softkodes is a tech solutions company with solid design and
              development expertise. We build state-of-the-art websites, mobile
              applications, and provide online business services.
            </p>
          </div>
        </div>
        {/* Small7 */}
        <div className="small7">
          <div className="content">
            <h1>Round Table descision</h1>
            <h2>& Counselling.</h2>
            <p>
              We work closely as a team, sharing ideas and concepts to ensure
              that our products are up to par.
            </p>
          </div>
          <div className="image">
            <div className="img1 img">
              <Image
                src="/assets/culture7_img1.png"
                alt="culture"
                width={96}
                height={263}
              />
            </div>
            <div className="img2 img">
              <Image
                src="/assets/culture7_img2.png"
                alt="culture"
                width={96}
                height={263}
              />
            </div>
            <div className="img3 img">
              <Image
                src="/assets/culture7_img3.png"
                alt="culture"
                width={96}
                height={263}
              />
            </div>
          </div>
        </div>
        {/* Small8 */}
        <div className="small8">
          <div className="content">
            <h1>Distinctions.</h1>
            <p>
              We have worked with various prominent brands and delivered
              satisfactorily. Our experienced team work tirelessly to ensure
              that clients are provided with the best products and services. In
              other to achieve this, we combine our expertise with the brand’s
              vision and create magic
            </p>
          </div>
          <div className="image">
            <div className="img1">
              <Image
                src="/assets/culture8_img.png"
                alt="culture"
                width={285}
                height={183}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCulture;
