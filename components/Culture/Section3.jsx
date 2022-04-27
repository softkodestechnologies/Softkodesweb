import React from "react";
import Image from "next/image";

const Section3 = () => {
  return (
    <section
      className="culture-section3 cul-sel"
      data-scroll
      data-scroll-id="s3"
    >
      <div className="hor-container">
        <div className="section3_main">
          <h1>We’re about a mixture of Science, Logic and Emotion...</h1>
          <p>
            In other to provide the best experience, our products and services
            intersects science, logic and emotion. We approach projects with
            technical precision, while considering the best possible outcome
            that evokes emotions.
          </p>
        </div>
        <div className="section3_img">
          <div className="img1 img">
            <Image
              width={400}
              height={470}
              alt="people"
              src="/assets/culture2_img1.png"
            />
          </div>
          <div className="img2 img">
            <Image
              width={400}
              height={470}
              alt="people"
              src="/assets/culture2_img2.png"
            />
          </div>
          <div className="img3 img">
            <Image
              width={400}
              height={470}
              alt="people"
              src="/assets/culture2_img3.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
