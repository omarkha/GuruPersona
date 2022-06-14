import React from "react";

const Results_JP = (props) => {
  const type = () => {
    if (props.judgingPercentage > props.percievingPercentage) {
      return "Judging";
    } else if (props.percievingPercentage > props.judgingPercentage) {
      return "Percieving";
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
        <div id={type() === "Percieving" ? "win" : "lose"}>
          percieving: <h5>{Math.floor(props.percievingPercentage)}%</h5>
        </div>
        <div id={type() == "Judging" ? "win" : "lose"}>
          judging: <h5>{Math.floor(props.judgingPercentage)}%</h5>
        </div>
      </div>
    </div>
  );
};

export default Results_SN;
