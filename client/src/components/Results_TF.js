import React from "react";

const Results_TF = (props) => {
  const type = () => {
    if (props.sensingPercentage > props.intuitionPercentage) {
      return "Thinker";
    } else if (props.intuitionPercentage > props.sensingPercentage) {
      return "Feeler";
    } else {
      return "hmmm we can't tell for sure if you know what I mean. Take the test again!";
    }
  };

  return (
    <div className="results">
      <h3>Results</h3>
      <p>
        The Results show that you are a... <strong>{type()}</strong>
      </p>
      <div>
        feeling: <h5>{Math.floor(props.intuitionPercentage)}%</h5>
      </div>
      <div>
        thinking: <h5>{Math.floor(props.sensingPercentage)}%</h5>
      </div>
    </div>
  );
};

export default Results_TF;
