import React from "react";

const main = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <h1>Subsccribe to our Newsletter</h1>
        <div className="control">
          <input type="text" placeholder="Enter Email Address" />
        </div>
        <div className="control">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default main;
