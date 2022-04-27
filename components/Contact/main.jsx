import Image from "next/image";
import React, { useState } from "react";

const budgetArr = [
  { id: 1, title: "<10,000" },
  { id: 2, title: "10K to 20K" },
  { id: 3, title: "30K to 40K" },
  { id: 4, title: "40K to 50K" },
  { id: 5, title: ">50K" },
];

const Main = () => {
  const [budget, setBudget] = useState(budgetArr[0].title);
  return (
    <section className="contact">
      <div className="container">
        <h1 data-aos="fade-down" data-aos-delay="400" data-aos-duration="1300">
          <div>Hi!</div> <div>Tell us what you</div>
          <span>
            want
            <div className="ser_em_wrap_aux">
              <Image
                alt="emoji"
                src="/assets/con_emoji3.svg"
                width={162}
                height={155}
              />
            </div>
          </span>
        </h1>

        <div
          className="contact_form_wrap"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-duration="1300"
        >
          <form
            action="https://formsubmit.co/info@softkodesllc.com"
            method="POST"
          >
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input
                required
                type="text"
                name="First Name"
                placeholder="Enter First Name"
              />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input
                required
                type="text"
                name="Last Name"
                placeholder="Enter Last Name"
              />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input
                required
                type="email"
                name="Email Address"
                placeholder="Enter Email "
              />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input
                required
                type="text"
                name="Phone Number"
                placeholder="Enter Phone Number"
              />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input
                required
                type="text"
                name="Website"
                placeholder="Enter Website"
              />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input
                required
                type="text"
                name="Company or Organization"
                placeholder="Enter Company/Organization"
              />
            </div>

            <div
              className="services"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <div className="ser_head_wrap">
                <h2>What services are you interested in</h2>
                <div className="ser_em_wrap">
                  <Image
                    alt="emoji"
                    src="/assets/con_emoji1.svg"
                    width={162}
                    height={155}
                  />
                </div>
              </div>
              <div className="services_wrap">
                <div className="check_control">
                  <input
                    type="checkbox"
                    name="Basic Website Service"
                    id="checkWebsite"
                  />
                  <label htmlFor="checkWebsite">Basic Website</label>
                </div>
                <div className="check_control">
                  <input
                    type="checkbox"
                    name="Digital Marketing Service"
                    id="checkMarketing"
                  />
                  <label htmlFor="checkMarketing">Digital Marketing</label>
                </div>
                <div className="check_control">
                  <input
                    type="checkbox"
                    name="Web Design Service"
                    id="checkWeb"
                  />
                  <label htmlFor="checkWeb">Web Design</label>
                </div>
                <div className="check_control">
                  <input
                    type="checkbox"
                    name="Animation 3D Service"
                    id="checkAni"
                  />
                  <label htmlFor="checkAni">Animation 3D</label>
                </div>
                <div className="check_control">
                  <input
                    type="checkbox"
                    name="Brand Website Service"
                    id="checkBrand"
                  />
                  <label htmlFor="checkBrand">Brand Website</label>
                </div>
                <div className="check_control">
                  <input
                    type="checkbox"
                    name="Mobile App Service"
                    id="checkMobile"
                  />
                  <label htmlFor="checkMobile">Mobile App</label>
                </div>
              </div>
            </div>

            <div
              className="budget"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <div className="ser_head_wrap">
                <h2>
                  Project Budget <span>(USD)</span>
                </h2>
                <div className="ser_em_wrap">
                  <Image
                    alt="emoji"
                    src="/assets/con_emoji2.svg"
                    width={122}
                    height={125}
                  />
                </div>
              </div>
              <div className="budget_wrap">
                {budgetArr.map((value, i) => (
                  <div
                    className={
                      value.title === budget
                        ? "budget_btn active"
                        : "budget_btn"
                    }
                    key={i}
                    onClick={() => setBudget(value.title)}
                  >
                    {" "}
                    {value.title}
                  </div>
                ))}
              </div>
            </div>
            <input
              type="text"
              required
              hidden
              name="Budget"
              readOnly
              value={budget}
            />

            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <textarea
                required
                name="Project Info"
                id=""
                rows="5"
                placeholder=" Tell Us About Your Project"
              ></textarea>
            </div>
            <div className="contact_btn">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Main;
