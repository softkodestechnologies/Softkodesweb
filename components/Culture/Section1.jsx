import React from "react";
import Image from "next/image";

const Section1 = () => {
  return (
    <section
      className="culture-section1 cul-sel"
      data-scroll
      data-scroll-id="s1"
    >
      <div className="hor-container">
        <div className="section1_main">
          <h1>
            <span>C</span>ULTURE
          </h1>
          <div className="hor-content">
            <p>
              Here, we aim to actualize the full potential of every business,
              institution and individual with the use of technology. Our core
              values are passion, creativity, quality, innovation, continuous
              improvement, uniqueness and transparency.
            </p>
            <div className="image">
              <Image
                src="/assets/hor-arrow.svg"
                alt="arrow"
                width={320}
                height={157}
              />
              <p>Scroll Down</p>
            </div>
          </div>
        </div>
        <div className="image2">
          {/* <Image
            src="/assets/culture_img1.png"
            alt="arrow"
            width={635}
            height={1411}
          /> */}
          <img src="/assets/culture_img1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
