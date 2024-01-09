function Button({title, btnBg, classN, clickFunc}) {
  const btnStyle = {
    backgroundColor: btnBg,
    border: "none",
    borderRadius: "5px",
    textDecoration: "none",
    color: "white",
    outline: "none",
    cursor: "pointer",
    display: "inline-block",
    margin: "10px 0",
    padding: "10px 20px",
  };

  return (
    <button style={btnStyle} className={classN} onClick={clickFunc}>{title}</button>
  );
}

export default Button;
