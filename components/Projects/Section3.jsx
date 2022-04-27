import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <section className="project3 pr1">
      <div className="container">
        <h1>Web Applications</h1>
        <div className="project3_cards">
          <div className="project3_card">
            <div
              className="project3_img"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1300"
            >
              <Image
                src="/assets/image31.png"
                alt="projects"
                width={549}
                height={412}
              />
            </div>
            <div
              className="project3_content"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="1300"
            >
              <p>Easy navigation through this interior design website</p>
            </div>
          </div>

          <div className="project3_card">
            <div
              className="project3_img"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="1300"
            >
              <Image
                src="/assets/image32.png"
                alt="projects"
                width={549}
                height={412}
              />
            </div>
            <div
              className="project3_content"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1300"
            >
              <p>This website lets you select and purchase the perfect drone</p>
            </div>
          </div>

          <div className="project3_card">
            <div
              className="project3_img"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1300"
            >
              <Image
                src="/assets/image33.png"
                alt="projects"
                width={549}
                height={412}
              />
            </div>
            <div
              className="project3_content"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="1300"
            >
              <p>Get appealing visuals on this furniture websites</p>
            </div>
          </div>

          <div className="project3_card">
            <div
              className="project3_img"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="1300"
            >
              <Image
                src="/assets/image34.png"
                alt="projects"
                width={549}
                height={412}
              />
            </div>
            <div
              className="project3_content"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1300"
            >
              <p>User friendly crypto investment assistant</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
