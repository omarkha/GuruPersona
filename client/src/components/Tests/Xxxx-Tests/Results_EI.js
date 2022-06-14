import React from "react";

const Results_SN = (props) => {
  const type = () => {
    if (props.sensingPercentage > props.intuitionPercentage) {
      return "Sensing";
    } else if (props.intuitionPercentage > props.sensingPercentage) {
      return "Intuitive";
    } else {
      return "hmmm we can't tell for sure if you know what I mean. Take the test again!";
    }
  };

  return (
    <div className="results">
      <h3>Results</h3>
      <p>
        The data suggests that you are <strong>{type()}</strong>
      </p>
      <div className="results-percent">
        <div id={type() === "Intuitive" ? "win" : "lose"}>
          intuitive: <h5>{Math.floor(props.intuitionPercentage)}%</h5>
        </div>
        <div id={type() == "Sensing" ? "win" : "lose"}>
          sensing: <h5>{Math.floor(props.sensingPercentage)}%</h5>
        </div>
      </div>
    </div>
  );
};

export default Results_SN;
