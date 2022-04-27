import Image from "next/image";
import React from "react";
import { rolesData } from "../../Utils/data";

const Section4 = () => {
  return (
    <section className="career_section4 cu2">
      <div className="container">
        <div className="search_wrap">
          <h1>Like the way we see the world? Join Us.</h1>
          <div className="search_control">
            <input type="text" placeholder="Search open roles" />
            <div className="search_svg">
              <Image
                alt="search"
                width={25}
                height={21}
                src="/assets/search.svg"
              />
            </div>
          </div>
        </div>
        <div className="search_cards">
          {rolesData.map((value, index) => (
            <div
              className="search_card"
              key={index}
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1400"
            >
              <h1>{value.role}</h1>
              <div className="card_body">
                <div className="card_body_wrap">
                  <h2>{value.type}</h2>
                  <h3>{value.location}</h3>
                </div>
              </div>
              <div className="role_btn">
                <button>
                  <span>View Role</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
