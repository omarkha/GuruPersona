import React from "react";

const Results_TF = (props) => {
  const type = () => {
    if (props.thinkingPercentage > props.feelingPercentage) {
      return "Thinking";
    } else if (props.feelingPercentage > props.thinkingPercentage) {
      return "Feeling";
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
        <div id={type() === "Feeling" ? "win" : "lose"}>
          feeling: <h5>{Math.floor(props.feelingPercentage)}%</h5>
        </div>
        <div id={type() == "Thinking" ? "win" : "lose"}>
          thinking: <h5>{Math.floor(props.thinkingPercentage)}%</h5>
        </div>
      </div>
    </div>
  );
};

export default Results_TF;
