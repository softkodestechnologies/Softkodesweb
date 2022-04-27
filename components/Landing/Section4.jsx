import Image from "next/image";
import React from "react";
import { Parallax } from "react-scroll-parallax";

const Section4 = () => {
  return (
    <section className="section4">
      <div className="container">
        <h1>WE ALSO TRAIN PEOPLE ON</h1>
        <div className="section4_parts">
          <div className="section4_part">
            <Parallax translateX={["400px", "0px"]}>
              <h2>WEB DESIGN</h2>
            </Parallax>
            <div className="section4_img">
              <Parallax rotate={[35, 0]}>
                <div className="parallax_wrap parallax_wrap1">
                  <Image
                    src="/assets/alt_2.png"
                    alt="image"
                    width={460}
                    height={460}
                  />
                </div>
              </Parallax>
            </div>
          </div>

          <div className="section4_part">
            <Parallax translateX={["400px", "0px"]}>
              <h2>MOBILE DEVELOPMENT</h2>
            </Parallax>
            <div className="section4_img">
              <Parallax rotate={[-35, 0]}>
                <div className="parallax_wrap parallax_wrap2">
                  <Image
                    src="/assets/image45.png"
                    alt="image"
                    width={460}
                    height={460}
                  />
                </div>
              </Parallax>
            </div>
          </div>

          <div className="section4_part">
            <Parallax translateX={["-400px", "0px"]}>
              <h2>GAME DEVELOPMENT</h2>
            </Parallax>
            <div className="section4_img">
              <Parallax rotate={[35, 0]}>
                <div className="parallax_wrap parallax_wrap3">
                  <Image
                    src="/assets/image12.png"
                    alt="image"
                    width={460}
                    height={460}
                  />
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
