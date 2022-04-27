import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Image from "next/image";
import { useWindowDimensions } from "../../hooks";

const Section5 = () => {
  const slideNo = useWindowDimensions();
  return (
    <section className="section5" id="bg-3">
      <h1>PROJECTS</h1>
      <div className="carousel_wrap">
        <CarouselProvider
          naturalSlideWidth={180}
          naturalSlideHeight={600}
          totalSlides={21}
          visibleSlides={slideNo ? slideNo : 4}
        >
          <Slider className="carouselProvider">
            {/* repeat1 */}
            <Slide index={0} className="slide1">
              <div
                className="carousel_item"
                style={{ height: 600, margin: 6, marginLeft: 0 }}
              >
                <Image
                  src="/assets/image13.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={1} className="slide2">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image14.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={2} className="slide3">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image15.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={3} className="slide4">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image17.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={4} className="slide5">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image18.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={5} className="slide6">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image16.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={6} className="slide7">
              <div
                className="carousel_item"
                style={{ height: 600, margin: 6, marginRight: 0 }}
              >
                <Image
                  src="/assets/image19.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            {/* repeat2 */}
            <Slide index={0} className="slide1">
              <div
                className="carousel_item"
                style={{ height: 600, margin: 6, marginLeft: 10 }}
              >
                <Image
                  src="/assets/image13.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={1} className="slide2">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image14.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={2} className="slide3">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image15.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={3} className="slide4">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image17.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={4} className="slide5">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image18.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={5} className="slide6">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image16.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={6} className="slide7">
              <div
                className="carousel_item"
                style={{ height: 600, margin: 6, marginRight: 0 }}
              >
                <Image
                  src="/assets/image19.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            {/* repeat3 */}
            <Slide index={0} className="slide1">
              <div
                className="carousel_item"
                style={{ height: 600, margin: 6, marginLeft: 10 }}
              >
                <Image
                  src="/assets/image13.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={1} className="slide2">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image14.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={2} className="slide3">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image15.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={3} className="slide4">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image17.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={4} className="slide5">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image18.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={5} className="slide6">
              <div className="carousel_item" style={{ height: 600, margin: 6 }}>
                <Image
                  src="/assets/image16.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
            <Slide index={6} className="slide7">
              <div
                className="carousel_item"
                style={{ height: 600, margin: 6, marginRight: 0 }}
              >
                <Image
                  src="/assets/image19.png"
                  width={180}
                  height={600}
                  alt="carousel"
                />
              </div>
            </Slide>
          </Slider>
          {/* <DotGroup /> */}
          <div className="carousel_btns">
            {slideNo === 4 && (
              <>
                <Dot slide={0} />
                <Dot slide={4} />
                <Dot slide={8} />
                <Dot slide={12} />
                <Dot slide={16} />
              </>
            )}
            {slideNo === 7 && (
              <>
                <Dot slide={0} />
                <Dot slide={7} />
                <Dot slide={14} />
              </>
            )}
          </div>
        </CarouselProvider>
      </div>
    </section>
  );
};

export default Section5;
