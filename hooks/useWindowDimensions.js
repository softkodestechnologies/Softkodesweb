import React, { useState, useEffect } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: undefined,
    height: undefined,
  });
  const [slideNo, setSlideNo] = useState(4);
  useEffect(() => {
    window.innerWidth >= 768 ? setSlideNo(7) : setSlideNo(4);
    // function handleResize() {
    //   setWindowDimensions({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   });
    //   window.innerWidth >= 768 ? setSlideNo(7) : setSlideNo(4);
    // }

    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  return slideNo;
};

export default useWindowDimensions;
