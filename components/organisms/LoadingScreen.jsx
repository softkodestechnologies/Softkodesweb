import React from "react";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";

const LoadingScreen = ({ loading, percent }) => {
  return (
    <div className={loading ? "loading_wrap" : "none"}>
      <div className="loading_left">
        <div className="loading_left_img">
          <Image src="/assets/title_new.svg" alt="" height={75} width={271} />
        </div>
        <h1 className="blink_anim">Experience</h1>
      </div>
      <div className="loading_centre">
        <div className="loading_centre_wrap">
          <h1>{percent}%</h1>
        </div>
      </div>
      <div className="loading_right">
        <h1 className="blink_anim">Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
