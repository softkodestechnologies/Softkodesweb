import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <div className="career_section3">
      <div className="container">
        <div className="section3_wrap">
          <div
            className="section3_svg"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1400"
          >
            <Image
              src="/assets/ellipse.svg"
              width={244}
              height={230}
              alt="ellipse"
            />
          </div>
          <div
            className="section3_svg_mob"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1400"
          >
            <Image
              src="/assets/ellipse_mob.svg"
              width={244}
              height={230}
              alt="ellipse"
            />
          </div>
          <div className="section3_card">
            <div
              className="section3_content"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1400"
            >
              <h1>
                <span>Flexible </span>Work
              </h1>
              <h2>enviroment</h2>
              <p>
                We work hybrid, remote or in-office. We open doors to everyone
                and give you the freedom to decide how you work best.
              </p>
            </div>
            <div
              className="section3_img"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1400"
            >
              <Image
                src="/assets/career_img12.png"
                width={409}
                height={608}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
