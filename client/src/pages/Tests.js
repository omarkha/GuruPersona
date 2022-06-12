import React from "react";
import Images from "../images/index";

const Tests = () => {
  return (
    <div className="tests-page">
      <article>
        <img src={Images.logo_1} />
        <div>
          <h3>Take The MBTI Test and find out YOUR type</h3>
          <p>
            Below is a simple and straight forward MBTI test designed with care.
            <br />
            Let's get to know what your personality!
          </p>
        </div>
      </article>
    </div>
  );
};

export default Tests;
