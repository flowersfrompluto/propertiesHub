function Banner({title, btnBg, classN, clickFunc}) {
  const divStyle = {
    background: btnBg,
    minHeight: "100vmin",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    flexDirection: "column",
    color: "white",
    height: "100vmin",

    // background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(./img/dillon-kydd-pvdx8c6Y5BY-unsplash.jpg),
  };

  return (
    // <button style={btnStyle} className={classN} onClick={clickFunc}>{title}</button>
    <div style={bannerStyle} className={classN}>
      {title}
    </div>
  );
}

export default Banner;
