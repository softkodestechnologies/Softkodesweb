import React, { useEffect, useRef, useState } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

const Hero = () => {
  const [currOp, setCurrOp] = useState(1);
  const [currSc, setCurrSc] = useState(1);
  useEffect(() => {
    if (!window) return;
    window.addEventListener("scroll", checkOp);
    return () => {
      window.removeEventListener("scroll", checkOp);
    };
  }, []);
  const checkOp = () => {
    setCurrOp(1 - window.scrollY * 0.0125);
    setCurrSc(1 - window.scrollY * 0.00125);
  };
  return (
    <div className="sticky_styled">
      <Controller>
        <Scene triggerHook="onLeave" duration={700} pin>
          {(progress) => (
            <section
              className="landing_hero"
              // style={
              //   window.innerWidth > 768
              //     ? { opacity: currOp, transform: `scale(${currSc})` }
              //     : {}
              // }
            >
              <Timeline totalProgress={progress} paused>
                <Tween from={{ opacity: 1 }} to={{ opacity: 0 }}>
                  <div className="container">
                    <div className="hero_bread">
                      <li>Development</li>
                      <li>Design</li>
                      <li>Training</li>
                    </div>
                    <div className="landing_hero_wrap">
                      <div className="hero_content">
                        <div
                          className="div_1"
                          data-aos="fade-left"
                          data-aos-delay="500"
                          data-aos-duration="1200"
                        >
                          <p>
                            Do you need your brand to look endearing on the web?
                            need a user friendly app to create value?
                          </p>
                        </div>
                        <div
                          className="div_2"
                          data-aos="fade-right"
                          data-aos-delay="500"
                          data-aos-duration="1200"
                        >
                          <div className="div_2_content">
                            <p>
                              Softkodes is a tech solutions company with solid
                              design and development expertise. We build
                              state-of-the-art websites, mobile applications,
                              and provide online business services.
                            </p>
                          </div>

                          <div className="arrow_wrap">
                            <div className="arrow">
                              <div className="mid"></div>
                              <div className="down"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tween>
              </Timeline>
            </section>
          )}
        </Scene>
      </Controller>
    </div>
  );
};

export default Hero;
