export default function VerificationTag(props) {
  const {status="", } = props;

let verification = {
        backgroundColor: "lightgreen",
        color: "darkgreen",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        borderRadius: "40px",
        padding: "5px 10px",
        alignItems: "center",
        width: "fit-content",
        margin: "auto"
}

  return (
    <>
      <div className="property-status">
        <div className="status">
          <IoCheckmarkCircleOutline />
          <p>verified</p>
        </div>
      </div>
    </>
  );
}
