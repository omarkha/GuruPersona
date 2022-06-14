import React from "react";
import { Link } from "react-router-dom";

const PageCard = (props) => {
  return (
    <div className="pagecard">
      <Link className="pagecard-title" to={props.dest}>
        <h3>{props.title}</h3>

        <p>{props.disc}</p>
      </Link>
    </div>
  );
};

export default PageCard;
