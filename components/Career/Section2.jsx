import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="career_section2 cu1">
      <h1>
        Our{" "}
        <div className="ring">
          <span>Culture</span>{" "}
          <div className="ring_img">
            <Image src="/assets/curl.svg" alt="img" width={439} height={108} />
          </div>{" "}
        </div>
      </h1>
      <div className="container">
        <div className="section2_cards">
          <div className="section2_card">
            <div
              className="section2_content"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1400"
            >
              <div className="no">01.</div>
              <div className="letter">
                <h2>Stay inspired every day</h2>
                <p>
                  We show up to work every day inspired to pour our brains,
                  hearts and vision into a product that matters to us because we
                  care about the community of people who use it.
                </p>
              </div>
            </div>
            <div
              className="section2_img "
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1400"
            >
              <div className="emoji2">
                <Image
                  src="/assets/emoji5.png"
                  alt="img"
                  width={409}
                  height={508}
                />
              </div>
            </div>
          </div>

          <div className="section2_card_mul">
            <div className="section2_img">
              <div
                className="section2_img1"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1400"
              >
                <div className="emoji3">
                  <Image
                    src="/assets/emoji4.png"
                    alt="img"
                    width={412}
                    height={376}
                  />
                </div>
              </div>
              <div
                className="section2_img2"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1400"
              >
                <Image
                  src="/assets/emoji6.png"
                  alt="img"
                  width={412}
                  height={672}
                />
              </div>
            </div>
            <div className="section2_content">
              <div
                className="section2_content1"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1400"
              >
                <div className="letter">
                  <div className="no">02.</div>
                  <h2>Inclusive & fresh team.</h2>
                </div>
                <p>
                  Softkodes is built for the global population, so we make sure
                  our team actually reflects the global population. It’s a
                  fresh, focused, inclusive and exciting work environment
                </p>
              </div>
              <div
                className="section2_content2"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1400"
              >
                <div className="letter">
                  <div className="no">03.</div>
                  <h2>Believe in each other</h2>
                </div>
                <p>
                  We belive in each other, rely on each other, hold the bar high
                  for each other and have each other’s backs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
