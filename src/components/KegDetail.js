import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;
  const detailStyles = {
    color: "white",
    backgroundColor: "#6d8b5a",
    opacity: "0.8",
    padding: "2%",
  };
  const headerDetailStyle = {
    textAlign: "center",
    color: "#2b3724",
  };
  return (
    <React.Fragment>
      <div style={detailStyles}>
        <div style={headerDetailStyle}>
          <h1>
            <strong>Beer Beats</strong>
          </h1>
          <h5>(Details)</h5>
        </div>
        <h2>Name: {keg.name}</h2>
        <h3>Brand: {keg.brand}</h3>
        <h4>ABV: {keg.abv}</h4>
        <h5>Price: ${keg.price}</h5>
        <h4>
          Pints Left in Keg:{" "}
          {keg.pintQuantity > 0 ? (
            keg.pintQuantity
          ) : (
            <div style={{ color: "#7a0000" }}>
              Can I kick it? (Yes, you can!) (Out of Stock)
            </div>
          )}
        </h4>
        <hr />
        <button className="btn btn-success" onClick={props.onClickingEdit}>
          Hold It Now, Hit It (Update Keg){" "}
        </button>
        <hr />
        <button
          className="btn btn-danger"
          onClick={() => props.onClickingDelete(keg.id)}
        >
          Push It Real Good (Delete Keg)
        </button>
      </div>
    </React.Fragment>
  );
}
KegDetail.propTypres = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default KegDetail;
