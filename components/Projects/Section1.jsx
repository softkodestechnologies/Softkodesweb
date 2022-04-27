import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="project1">
      <div className="container">
        <h1 data-aos="fade-right" data-aos-delay="400" data-aos-duration="1300">
          ALL PROJECTS
        </h1>
        <h3 data-aos="fade-left" data-aos-delay="400" data-aos-duration="1300">
          We drive growth for your business making your brand more compelling
          online.
        </h3>
        <div
          className="project1_img"
          data-aos="flip-down"
          data-aos-delay="600"
          data-aos-easing="ease-out-back"
          data-aos-duration="1300"
        >
          <Image
            src="/assets/image24.jpg"
            width={900}
            height={650}
            alt="Project"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
