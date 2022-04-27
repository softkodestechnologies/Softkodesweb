import Image from "next/image";
import React from "react";

const Section6 = () => {
  return (
    <section className="section6">
      <div className="container">
        <h1>NEWS</h1>
        <div className="section6_cards">
          <div className="section6_card">
            <div
              className="content"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              Lorem ipsum dolor{" "}
              <span>
                {" "}
                sit amet, consectetur adipiscing elit. Tincidunt pellentesque
                vel ac consectetur ac vel tristique. A in urna, quis integer
                tincidunt viverra ornare. Ac cursus a auctor ut neque pharetra.
                Non pellentesque id sagittis sagittis, nullam elit lorem luctus
                lectus. Elementu{" "}
              </span>{" "}
              Lorem ipsum{" "}
              <span>
                {" "}
                dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit
                amet, consectetur adipiscing elit. Amet, laoreet nunc lacus
                turpis vulputate...{" "}
              </span>{" "}
              <a href="#">Read More</a>
            </div>
            <div
              className="image"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <Image
                src="/assets/image20.png"
                alt="news"
                width={486}
                height={356}
              />
              {/* <div className="btn">
                <button>Read More</button>
              </div> */}
            </div>
          </div>

          <div className="section6_card">
            <div
              className="image"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              <Image
                src="/assets/image21.png"
                alt="news"
                width={486}
                height={356}
              />
              {/* <div className="btn">
                <button>Read More</button>
              </div> */}
            </div>
            <div
              className="content"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1300"
            >
              Lorem ipsum{" "}
              <span>
                dolor sit amet, consectetur adipiscing elit. Tincidunt
                pellentesque vel ac consectetur ac vel tristique. A in urna,
                quis integer tincidunt viverra ornare.{" "}
              </span>{" "}
              Ac cursus{" "}
              <span>
                {" "}
                a auctor ut neque pharetra. Non pellentesque id sagittis
                sagittis, nullam elit lorem luctus lectus. ElementuLorem...
              </span>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
