import React from "react";
import { Link, useNavigate } from "react-router-dom";


const DashboardHeader = (props) => {
  const navigate = useNavigate()
  const { header, text, btn = false, btnbg = "#004274", link=false, path} = props;

  let style = {
    display: "flex",
    alignItem: "center",
  };

  let btnStyle = {
    fontSize: "1.2rem",
    padding: "10px 15px",
    borderRadius: "7px",
    backgroundColor: `${btnbg}`,
    color: "#fff",
    cursor: "pointer",
    border:'none'
  };


  return (
    <div className="headerbg1">
      <div className="headerbg2">
        <h1>{header}</h1>

        <div style={style}>
          <p>{text}</p>
          {btn ? <button style={btnStyle} onClick={()=> navigate(path)}> {btn} </button> : "" }
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
