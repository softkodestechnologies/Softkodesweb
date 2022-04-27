import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="section2">
      <div className="part1">
        <div className="container">
          <div className="content">
            <h1 data-aos="fade-right" data-aos-delay="300">
              Design Interactive & Responsive Prototypes
            </h1>
            <h2 data-aos="fade-right" data-aos-delay="300">
              Our <span>Prototypes</span> are created with{" "}
              <span>responsive design</span> which displays impeccably any
              screen size, including mobile, tablet, and desktop.
            </h2>
          </div>
          <div className="dir">
            <Image
              alt="arrow"
              width={427}
              height={158}
              src="/assets/arrow1.svg"
            />
          </div>
          <div
            className="image"
            data-aos="flip-left"
            data-aos-delay="300"
            data-aos-easing="ease-out-back"
            data-aos-duration="2000"
          >
            <Image
              alt="image"
              width={401}
              height={587}
              src="/assets/image40.png"
            />
          </div>
        </div>
      </div>

      <div className="part2" id="bg-2">
        <div className="container">
          <div
            className="image"
            data-aos="flip-right"
            data-aos-delay="300"
            data-aos-easing="ease-out-back"
            data-aos-duration="2000"
          >
            <Image
              alt="image"
              width={401}
              height={587}
              src="/assets/image7.png"
            />
          </div>
          <div className="part2_prime">
            <div className="dir">
              <Image
                alt="arrow"
                width={293}
                height={205}
                src="/assets/arrow2.svg"
              />
            </div>
            <div className="content">
              <h1 data-aos="fade-left" data-aos-delay="300">
                Development
              </h1>
              <h2 data-aos="fade-left" data-aos-delay="300">
                Code Quickly with us.
              </h2>
              <h3 data-aos="fade-left" data-aos-delay="300">
                <span>With us, you don’t have a problem with urgency.</span> Our
                pace though swift, will provide you with the best possible
                results.{" "}
                <span>
                  {" "}
                  We are committed to providing amazing products in a timely
                  manner.
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
