import Image from "next/image";
import React from "react";

const main = ({ name }) => {
  return (
    <section className="member">
      <div className="container">
        <h1 data-aos="fade-down" data-aos-delay="400" data-aos-duration="1300">
          Welcome to Apply, a member of our Team will respond to you shortly
          after submission want
        </h1>
        <div
          className="member_form_wrap"
          data-aos="fade-down"
          data-aos-delay="400"
          data-aos-duration="1300"
        >
          <div className="member_head">
            <div className="member_head_img">
              <Image src="/assets/ring.svg" alt="ring" width={63} height={63} />
            </div>
            <h2>{name}</h2>
          </div>
          <h3
            data-aos="fade-down"
            data-aos-delay="400"
            data-aos-duration="1300"
          >
            Fill-in your details and a representative will be in touch with you
            shortly.
          </h3>
          <form
            action="https://formsubmit.co/info@softkodesllc.com"
            method="POST"
          >
            <input
              type="text"
              required
              hidden
              name="Course Name"
              readOnly
              value={name}
            />
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
                type="date"
                name="Date of Birth"
                required
                placeholder="Date Of birth*"
              />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <input
                type="text"
                name="Home Address"
                required
                placeholder="Home Address*"
              />
            </div>
            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <textarea
                name="Academic Background"
                id=""
                required
                rows="5"
                placeholder="Tell Us About Your Academic Background*"
              ></textarea>
            </div>

            <div
              className="control"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            ></div>
            {/* <div
              className="two_btns"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <button>Add Course</button>
              <button>Delete Course</button>
            </div> */}
            <div
              className="one"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default main;
