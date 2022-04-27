/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useGeneralContext } from "../../context/GeneralContext";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const whatVariants = {
  initial: {
    opacity: 0,
    // y: -50,
  },
  animate: {
    opacity: 1,
    // y: 0,
  },
};

const Nav = () => {
  const { navOpen, setNavOpen } = useGeneralContext();
  const [whatShow, setWhatShow] = useState(false);
  const [traShow, setTraShow] = useState(false);
  const [culShow, setCulShow] = useState(false);
  const [newsShow, setNewsShow] = useState(false);
  const [currColor, setCurrColor] = useState("#fff");
  const router = useRouter();
  const move = (route) => {
    router.push(route);
  };
  const removeNav = () => {
    setNavOpen(false);
  };

  return (
    <AnimatePresence>
      {navOpen && (
        <motion.div
          className="nav"
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 500, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="nav_con"
            // variants={orangeVariants}
            // animate={!orangeBg ? "initial" : "animate"}
            initial={{ background: "#fff" }}
            animate={{ background: currColor }}
          >
            {/* What we do images */}
            <motion.div
              className="nav_img_wrap"
              variants={whatVariants}
              animate={!whatShow ? "initial" : "animate"}
            >
              <Image
                src="/assets/nav_img1.png"
                alt="nav img"
                width={273}
                height={455}
              />
            </motion.div>
            {/* Training images */}
            <motion.div
              className="nav_img_wrap"
              variants={whatVariants}
              animate={!traShow ? "initial" : "animate"}
            >
              <Image
                src="/assets/nav_img2.png"
                alt="nav img"
                width={140}
                height={485}
              />
              <div className="nav_img_training2">
                <Image
                  src="/assets/nav_img3.png"
                  alt="nav img"
                  width={140}
                  height={485}
                />
              </div>
            </motion.div>
            {/* Culture images */}
            <motion.div
              className="nav_img_wrap"
              variants={whatVariants}
              animate={!culShow ? "initial" : "animate"}
            >
              <Image
                src="/assets/nav_img9.png"
                alt="nav img"
                width={323}
                height={315}
              />
            </motion.div>
            {/* Career images */}

            <motion.div
              className="nav_img_wrap"
              variants={whatVariants}
              animate={!newsShow ? "initial" : "animate"}
            >
              <div className="nav_img_culture_wrap">
                <div
                  className="nav_img_culture nav_drop"
                  style={{ position: "relative", zIndex: 10 }}
                >
                  <Image
                    src="/assets/nav_img8.png"
                    alt="nav img"
                    width={241}
                    height={212}
                  />
                </div>
                <div
                  className="nav_img_culture img_culture_2"
                  style={{
                    position: "relative",
                    zIndex: 9,
                    transform: "translateY(-96%) translateX(-30px)",
                  }}
                >
                  <Image
                    src="/assets/nav_img5.png"
                    alt="nav img"
                    width={281}
                    height={252}
                  />
                </div>
              </div>
            </motion.div>

            <div className="nav_header">
              <div className="title" onClick={() => router.push("/")}>
                <Image
                  src="/assets/title.svg"
                  width={201}
                  height={79}
                  alt="logo"
                />
              </div>
              <div className="nav_icon" onClick={removeNav}>
                X
              </div>
            </div>
            <div
              className="nav_body"
              data-aos="flip-right"
              data-aos-delay="300"
              data-aos-easing="ease-out-back"
              data-aos-duration="2000"
            >
              <div className="nav_links1">
                <ul>
                  <motion.li
                    onClick={() => move("/projects")}
                    onMouseEnter={() => setWhatShow(true)}
                    onMouseLeave={() => setWhatShow(false)}
                  >
                    <span>01.</span>What we do
                  </motion.li>
                  <motion.li
                    onClick={() => move("/training")}
                    onMouseEnter={() => setTraShow(true)}
                    onMouseLeave={() => setTraShow(false)}
                  >
                    <span>02.</span>Training
                  </motion.li>
                  <motion.li
                    onClick={() => move("/culture")}
                    onMouseEnter={() => setCulShow(true)}
                    onMouseLeave={() => setCulShow(false)}
                  >
                    <span>03.</span>Culture
                  </motion.li>
                  <motion.li
                    onClick={() => move("/career")}
                    onMouseEnter={() => setNewsShow(true)}
                    onMouseLeave={() => setNewsShow(false)}
                  >
                    <span></span>Career
                  </motion.li>
                  {/* <motion.li
                    onClick={() => move("news")}
                    onMouseEnter={() => setCurrColor("#e5e5e5")}
                    onMouseLeave={() => setCurrColor("#fff")}
                  >
                    <span></span>News
                  </motion.li> */}
                  <motion.li
                    onMouseEnter={() => setCurrColor("#fff")}
                    onMouseLeave={() => setCurrColor("#fff")}
                    className="con_hov"
                    onClick={() => move("/contact")}
                  >
                    <span></span>Contact{" "}
                    <div className="nav_links_img">
                      <Image
                        src="/assets/nav_angle_arrow.svg"
                        width={25}
                        height={40}
                        alt="arrow"
                      />
                    </div>
                  </motion.li>
                </ul>
              </div>
              <div className="nav_links2">
                <ul>
                  <h1>More</h1>
                  <li>Twitter</li>
                  <Link
                    href="https://www.instagram.com/softkodesworld"
                    target="_blank"
                  >
                    <li>Instagram</li>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/softkodes-tech-lim"
                    target="_blank"
                  >
                    <li>Linkedin</li>
                  </Link>
                  <li>Subscribe to our newsletter</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Nav;
