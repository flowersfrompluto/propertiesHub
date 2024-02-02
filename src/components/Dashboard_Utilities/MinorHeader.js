import React from "react";

const MinorHeader = (props) => {
  let { title, seperator = false, btn = false } = props;

  return (
    <div className="minor-header">
      <h2 className="minor-header-title">{title}</h2>
      {seperator ? <div className="seprator-line"> </div> : " "}
      {btn ? <button className="minor-header-btn">{btn}</button> : " "}
    </div>
  );
};

export default MinorHeader;
