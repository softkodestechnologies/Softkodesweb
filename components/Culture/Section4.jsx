import React from "react";
import Image from "next/image";

const Section4 = () => {
  return (
    <section
      className="culture-section4 cul-sel"
      data-scroll
      data-scroll-id="s4"
    >
      <div className="hor-container">
        <div className="section4_main">
          <h1>Preamble.</h1>
          <p>
            At Softkodes, we provide tech solutions with solid design and
            development expertise. We build world class websites, mobile
            applications, and provide online business services
          </p>
        </div>
        <div className="section4_img">
          <div className="img1">
            <Image
              width={700}
              height={470}
              alt="people"
              src="/assets/culture4_img.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
