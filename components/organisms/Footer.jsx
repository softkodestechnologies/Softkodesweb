/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  return (
    <footer>
      <div className="footer_wrap">
        <div className="top">
          <div
            className="left"
            data-aos="fade-right"
            data-aos-delay="400"
            data-aos-duration="1300"
          >
            <div className="image" onClick={() => router.push("/")}>
              <Image
                src="/assets/white.png"
                width={336}
                height={30}
                alt="title"
              />
            </div>
            <h3>Info@softkodesllc.com</h3>
            <p>km 5 Refinery road opp Chicken Republic. Effurun Delta state</p>
          </div>
          <div
            className="center"
            data-aos="fade-bottom"
            data-aos-delay="400"
            data-aos-duration="1300"
          >
            <h1>Quick Links</h1>
            <ul>
              <li onClick={() => router.push("/")}>Home</li>
              <li onClick={() => router.push("/member")}>Get to know us</li>
              <li onClick={() => router.push("/culture")}>Culture</li>
              <li onClick={() => router.push("/projects")}>Our Works</li>
              <li onClick={() => router.push("/training")}>Training</li>
            </ul>
          </div>
          <div
            className="right"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1300"
          >
            <h1 onClick={() => router.push("/contact")}>Contact Us</h1>
            <ul>
              {/* <li>Dribble</li> */}
              <Link
                href="https://www.instagram.com/softkodesworld"
                target="_blank"
              >
                <li>Instagram</li>
              </Link>
              <li>Twitter</li>
              {/* <li>Behance</li> */}
              <Link
                href="https://www.linkedin.com/company/softkodes-tech-lim"
                target="_blank"
              >
                <li>Linkedin</li>
              </Link>
              {/* <li>Medium</li> */}
            </ul>
          </div>
        </div>
        <div
          className="bottom"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1300"
        >
          <div className="copy">Copyright Softkode all rights reserved.</div>
          <div className="list">
            <p>Terms Condition </p>
            <p onClick={() => router.push("/privacy")}>Privacy Policy</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
