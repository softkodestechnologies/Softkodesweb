import Image from "next/image";
import React from "react";

const Section7 = () => {
  return (
    <section className="section7">
      <div className="container">
        <h1>MEET THE TEAM</h1>
        <div
          className="image"
          data-aos="flip-down"
          data-aos-delay="400"
          data-aos-easing="ease-out-back"
          data-aos-duration="2000"
        >
          <Image
            alt="team"
            src="/assets/image22.png"
            width={980}
            height={720}
          />
        </div>
      </div>
    </section>
  );
};

export default Section7;
