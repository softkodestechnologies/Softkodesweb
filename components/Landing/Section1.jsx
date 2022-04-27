import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

const Section1 = () => {
  const [card1Pos, setCard1Pos] = useState(-800);
  const [card1Op, setCard1Op] = useState(1);
  const [card2Op, setCard2Op] = useState(0);
  const [card1Scale, setCard1Scale] = useState(1.3);
  const [card2Pos, setCard2Pos] = useState(800);
  useEffect(() => {
    // if (!window) return;
    // window.addEventListener("scroll", checkOp);
    // return () => {
    //   window.removeEventListener("scroll", checkOp);
    // };
  }, []);
  const checkOp = () => {
    if (window.scrollY * 8 - 820 < 0) {
      setCard1Op(0 + window.scrollY * 0.0125);
      setCard1Pos(window.scrollY * 8 - 800);
      setCard2Pos(-window.scrollY * 8 + 800);
      setCard1Scale(1.1 - window.scrollY * 0.0008);
      if (window.scrollY * 8 - 800 > -400 || window.scrollY * 8 - 800 < -800) {
        setCard2Op(1);
      } else {
        setCard2Op(0);
      }
    }
  };
  return (
    <>
      <section className="section1">
        <div className="container">
          <div className="section1_wrap">
            {/* <h1 data-aos="fade-down" data-aos-delay="300">
              WHAT WE DO
            </h1> */}

            <div className="section1_cards">
              <div className="sticky_styled">
                <Controller>
                  <Scene triggerHook="onLeave" duration={1000} pin>
                    {(progress) => (
                      <div className="section1_cards1">
                        <Timeline totalProgress={progress} paused>
                          <Tween
                            from={{ x: "-100%", opacity: 0, scale: "1.6" }}
                            to={{ x: "0%", opacity: 1, scale: "1" }}
                          >
                            <div
                              className="card"
                              // data-aos="fade-up-right"
                              // data-aos-delay="450"
                              // style={{
                              //   opacity: card1Op,
                              //   transform: `scale(${card1Scale}) translateX(${card1Pos}px)`,
                              // }}
                            >
                              <div className="card_image">
                                <Image
                                  src="/assets/image39.png"
                                  alt="test"
                                  width={343}
                                  height={455}
                                />
                              </div>
                            </div>
                          </Tween>
                        </Timeline>
                        <div
                          className="card"
                          // style={{
                          //   opacity: card2Op,
                          //   transition: "0.1s all ease",
                          // }}
                          // data-aos="fade-down"
                          // data-aos-delay="450"
                        >
                          <div className="card_image">
                            <Image
                              src="/assets/image41.png"
                              alt="test"
                              width={343}
                              height={455}
                            />
                          </div>
                          <div className="content cont_blur">
                            <h3>Development</h3>
                            <p>
                              We specialise in Web development, android
                              development, IOS development, HTML/CSS/JS,
                              Backend/API, integrated word press
                            </p>
                          </div>
                        </div>
                        <Timeline totalProgress={progress} paused>
                          <Tween
                            from={{ x: "100%", opacity: 0, scale: "1.6" }}
                            to={{ x: "0%", opacity: 1, scale: "1" }}
                          >
                            <div
                              className="card"
                              // style={{
                              //   opacity: card1Op,
                              //   transform: `scale(${card1Scale}) translateX(${card2Pos}px)`,
                              // }}
                              // data-aos="fade-down-left"
                              // data-aos-delay="450"
                            >
                              <div className="card_image">
                                <Image
                                  src="/assets/image42.png"
                                  alt="test"
                                  width={343}
                                  height={455}
                                />
                              </div>
                            </div>
                          </Tween>
                        </Timeline>
                      </div>
                    )}
                  </Scene>
                </Controller>
              </div>
              <div className="section1_cards2">
                <div
                  className="card"
                  id="bg-1"
                  data-aos="zoom-out-right"
                  data-aos-delay="450"
                >
                  <div className="card_image">
                    <Image
                      src="/assets/image43.png"
                      alt="test"
                      width={343}
                      height={455}
                    />
                  </div>
                  <div className="content cont_blur">
                    <h3>Design</h3>
                    <p>
                      We provide dhesign services ranging from Animation,
                      Iconography, 2D/3D graphics.
                    </p>
                  </div>
                </div>

                <div
                  className="card"
                  data-aos="zoom-out-down"
                  data-aos-delay="450"
                >
                  <div className="card_image">
                    <Image
                      src="/assets/image44.png"
                      alt="test"
                      width={343}
                      height={455}
                    />
                  </div>
                  <div className="content cont_blur">
                    <h3>Development</h3>
                    <p>
                      Our designs are tailored to be functional, aesthetically
                      pleasing and to represents the brand’s vision adequately.
                    </p>
                  </div>
                </div>

                <div
                  className="card"
                  data-aos="zoom-out-left"
                  data-aos-delay="450"
                >
                  <div className="card_image">
                    <Image
                      src="/assets/image_37.png"
                      alt="test"
                      width={343}
                      height={455}
                    />
                  </div>
                  <div className="content cont_blur">
                    <h3>Training</h3>
                    <p>
                      We offer intensive and thorough training on Ui/Ux Design,
                      Graphic Design, Mobile Development, Web Development and
                      Game Development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 mobile */}
      <section className="section1_mobile">
        <div className="container">
          <div className="mobile_pt1">
            <h1>WHAT WE DO</h1>
            <div
              className="head_image"
              data-aos="flip-down"
              data-aos-delay="400"
              data-aos-easing="ease-out-back"
              data-aos-duration="2000"
            >
              <Image
                src="/assets/image2.png"
                alt="test"
                width={285}
                height={201}
              />
            </div>
            <div className="mobile_pt1_wrap">
              <div
                className="content "
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <h2>Development</h2>
                <p className="cont_blur">
                  We specialise in Web development, android development, IOS
                  development, HTML/CSS/JS, Backend/API, integrated word press
                  at.
                </p>
              </div>
              <div className="image_wrap">
                <div className="arrow">
                  <Image
                    src="/assets/arrow3.svg"
                    alt="test"
                    width={88}
                    height={90}
                  />
                </div>
                <div
                  className="image"
                  data-aos="flip-right"
                  data-aos-delay="400"
                  data-aos-easing="ease-out-back"
                  data-aos-duration="2000"
                >
                  <Image
                    src="/assets/image39.png"
                    alt="test"
                    width={217}
                    height={243}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mobile_pt2" id="bg-1-mob">
            <div className="mobile_pt2_wrap">
              <div
                className="content "
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <h2>Design</h2>
                <p className="cont_blur">
                  We provide design services ranging from Animation,
                  Iconography, 2D/3D graphics, and Branding to graphic design
                  and Ui/Ux design.
                </p>
              </div>
              <div className="arrow">
                <Image
                  src="/assets/arrow4.svg"
                  alt="test"
                  width={88}
                  height={107}
                />
              </div>
              <div
                className="image"
                data-aos="flip-right"
                data-aos-delay="400"
                data-aos-easing="ease-out-back"
                data-aos-duration="2000"
              >
                <Image
                  src="/assets/image23.png"
                  alt="test"
                  width={185}
                  height={291}
                />
              </div>
            </div>
          </div>

          <div className="mobile_pt3">
            <div className="mobile_pt3_wrap">
              <div
                className="image"
                data-aos="flip-left"
                data-aos-delay="400"
                data-aos-easing="ease-out-back"
                data-aos-duration="2000"
              >
                <Image
                  src="/assets/image6.png"
                  alt="test"
                  width={185}
                  height={291}
                />
              </div>
              <div className="arrow">
                <Image
                  src="/assets/arrow5.svg"
                  alt="test"
                  width={88}
                  height={107}
                />
              </div>
              <div
                className="content"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className="fake"></div>
                <div className="content_wrap ">
                  <h2>Training</h2>
                  <p>
                    We offer intensive and thorough training on Ui/Ux Design,
                    Graphic Design, Mobile Development, Web Development and Game
                    Development
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
