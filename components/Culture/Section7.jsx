import React from "react";
import Image from "next/image";

const Section7 = () => {
  return (
    <section
      className="culture-section7 cul-sel"
      data-scroll
      data-scroll-id="s7"
    >
      <div className="hor-container">
        <div className="section7_main">
          <h1>Round Table decision</h1>
          <h2>& Counselling.</h2>
          <p>
            We work closely as a team, sharing ideas and concepts to ensure that
            our products are up to par.
          </p>
        </div>
        <div className="section7_img">
          <div className="img1">
            <Image
              width={234}
              height={500}
              alt="people"
              src="/assets/culture7_img1.png"
            />
          </div>
          <div className="img2">
            <Image
              width={234}
              height={500}
              alt="people"
              src="/assets/culture7_img2.png"
            />
          </div>
          <div className="img3">
            <Image
              width={234}
              height={500}
              alt="people"
              src="/assets/culture7_img3.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
