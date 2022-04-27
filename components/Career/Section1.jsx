import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="career_section1">
      <div className="section1_main_wrap">
        <div className="section1_main_img1 ">
          <div className="">
            <Image
              src="/assets/emoji3.jpg"
              width={360}
              height={410}
              alt="circle"
              priority
            />
          </div>
        </div>
        <div
          className="section1_main"
          data-aos="fade-right"
          data-aos-delay="400"
          data-aos-duration="1400"
        >
          <h1 className="cur_hov">
            Join{" "}
            <div className="us">
              <span>Us.</span>
              <div className="us_img">
                <Image
                  src="/assets/career_svg1.svg"
                  width={470}
                  height={389}
                  alt="circle"
                  priority
                />
              </div>
            </div>
          </h1>
          <p>
            We’re who we are, and at the heart for what we do is our unique
            perspective, culture and community.
          </p>
          <div
            className="section1_btn"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1400"
          >
            <button>See open positions</button>
          </div>
        </div>
        <div className="section1_main_img2">
          <Image
            src="/assets/emoji1.png"
            width={290}
            height={473}
            alt="circle"
          />
        </div>
      </div>
      <div
        className="section1_aux_wrap"
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="1400"
      >
        <div className="section1_aux_img1">
          <Image
            src="/assets/emoji2.png"
            width={247}
            height={420}
            alt="circle"
          />
        </div>
        <div className="section1_aux_img2">
          <Image
            src="/assets/emoji4.jpg"
            width={359}
            height={586}
            alt="circle"
          />
        </div>
      </div>
      <div
        className="section1_mob_wrap"
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="1400"
      >
        <div className="section1_aux_img1 emoji_bg ">
          <Image
            src="/assets/emoji3.png"
            width={248}
            height={318}
            alt="circle"
          />
        </div>
        <div className="section1_aux_img2">
          <Image
            src="/assets/emoji8.png"
            width={99}
            height={116}
            alt="circle"
          />
        </div>
        <div className="section1_aux_img3">
          <Image
            src="/assets/emoji9.png"
            width={202}
            height={217}
            alt="circle"
          />
        </div>
        <div className="section1_aux_img4">
          <Image
            src="/assets/emoji10.png"
            width={197}
            height={308}
            alt="circle"
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
