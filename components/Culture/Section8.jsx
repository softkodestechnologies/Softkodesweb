import React from "react";
import Image from "next/image";

const Section8 = () => {
  return (
    <section
      className="culture-section8 cul-sel"
      data-scroll
      data-scroll-id="s8"
    >
      <div className="hor-container">
        <div className="section8_main">
          <h1>Distinctions.</h1>
          <p>
            We have worked with various prominent brands and delivered
            satisfactorily. Our experienced team work tirelessly to ensure that
            clients are provided with the best products and services. In other
            to achieve this, we combine our expertise with the brand’s vision
            and create magic
          </p>
        </div>
        <div className="section8_img">
          <div className="img1">
            <Image
              width={700}
              height={470}
              alt="people"
              src="/assets/culture8_img.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section8;
