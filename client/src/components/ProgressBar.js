import React from "react";
import RatingQuestion from "./RatingQuestion";

const ProgressBar = (props) => {
  let colorChanger1 = 0;
  let colorChanger2 = 255;
  let widthChanger = 0;
  let percentAchieved = 0;

  colorChanger1 = (props.currentScore * 255) / props.topScore;
  colorChanger2 = 255 - (props.currentScore * 255) / props.topScore;

  widthChanger = (props.currentScore * 100) / props.topScore;
  percentAchieved = Math.ceil((props.currentScore * 100) / props.topScore);

  let moverStyle;

  moverStyle = {
    padding: "0 " + widthChanger + "% " + "0 " + "0",
    backgroundColor:
      "rgb(" +
      colorChanger2 +
      ", " +
      colorChanger1 +
      ", " +
      colorChanger2 +
      ")",
  };

  return (
    <div className="progress">
      <h5>{percentAchieved + "%"}</h5>
      <div className="progress-bar">
        <div className="progress-mover" style={moverStyle}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
