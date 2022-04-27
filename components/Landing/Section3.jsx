import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <section className="section3">
      <div className="container">
        <div className="section3_card">
          <div
            className="section3_img"
            data-aos="flip-down"
            data-aos-delay="400"
            data-aos-easing="ease-out-back"
            data-aos-duration="2000"
          >
            <Image
              src="/assets/image9.png"
              width={729}
              height={526}
              alt="image"
            />
          </div>
          <div
            className="section3_content"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Softkodes is a tech solutions company with solid design and
            development expertise. We build state-of-the-art websites, mobile
            applications, and provide online business services.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
