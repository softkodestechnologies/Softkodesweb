import React, { useRef } from "react";
import { useRouter } from "next/router";

const Section8 = () => {
  const router = useRouter();
  const changeBg = (e) => {
    if (!window) return;
    const back = document.querySelector(".section8");
    const btn = document.querySelector(".btn_target");
    back.style.backgroundSize = "2% 2%";
    back.style.color = "#000";
    btn.style.color = "#fff";
    btn.style.backgroundColor = "#000";
  };

  const removeBg = (e) => {
    if (!window) return;
    const back = document.querySelector(".section8");
    const btn = document.querySelector(".btn_target");
    back.style.backgroundSize = "100% 100%";
    back.style.color = "#fff";
    btn.style.color = "#000";
    btn.style.backgroundColor = "#fff";
  };

  return (
    <section className="section8" id="bg-4">
      <div className="container">
        <h1 data-aos="fade-down" data-aos-delay="200" data-aos-duration="1300">
          Have a project in mind? Get in touch with us today
        </h1>
        <div
          className="section8_btn"
          data-aos="zoom-out"
          data-aos-delay="400"
          data-aos-duration="500"
        >
          <button
            onClick={() => router.push("/contact")}
            className="btn_target"
            onMouseEnter={changeBg}
            onMouseLeave={removeBg}
          >
            Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section8;
