import React, { useState } from "react";
import { Link } from "react-router-dom";

const RatingQuestion = (props) => {
  const name = props.name;

  const [data, setData] = useState({
    index: 0,
    value: 0,
  });

  return (
    <div className="question">
      <h3 id="question-number">Statement {props.id + 1}</h3>
      <h3>{props.question}</h3>

      <div className="radios">
        <h6>Disagree</h6>
        <input
          type="radio"
          onClick={(e) => props.getValue(0, e.target.value)}
          id="o1"
          name={props.name}
          value="0"
        />
        <input
          type="radio"
          onClick={(e) => props.getValue(1, e.target.value)}
          id="o2"
          name={props.name}
          value="1"
        />
        <input
          type="radio"
          onClick={(e) => props.getValue(2, e.target.value)}
          id="o3"
          name={props.name}
          value="2"
        />
        <input
          type="radio"
          onClick={(e) => props.getValue(3, e.target.value)}
          id="o4"
          name={props.name}
          value="3"
        />
        <input
          type="radio"
          onClick={(e) => props.getValue(4, e.target.value)}
          id="o5"
          name={props.name}
          value="4"
        />
        <h6>Agree</h6>
      </div>
    </div>
  );
};

export default RatingQuestion;
