import React from "react";
import { trainingData } from "../../Utils/data";
import { useRouter } from "next/router";

const Section2 = () => {
  const router = useRouter();
  return (
    <section className="training2">
      <div className="container">
        <h1>OUR COURSES</h1>
        <div className="training2_cards">
          {trainingData.map((value, i) => (
            <div
              className="training2_card"
              data-aos="fade-down"
              data-aos-delay="600"
              data-aos-duration="1300"
              key={i}
            >
              <h2>{value.course}</h2>
              <h3>{value.code}</h3>
              <p>{value.desc}</p>
              <button
                className="button_card btn_card_hover"
                onClick={() =>
                  router.push({
                    pathname: "/member/[name]",
                    query: { name: value.course },
                  })
                }
              >
                ${value.price} ({value.dur})
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
