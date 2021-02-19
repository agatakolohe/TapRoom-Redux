import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h4>Name: {props.name}</h4>
        <h5>Brand: {props.brand}</h5>
        <h5>ABV: {props.abv}</h5>
        <hr />
        <h6>
          <span
            style={{
              color: "orange",
              border: "2px dotted #98cb72",
              padding: "1%",
              margin: "3% 1% 3%",
            }}
          >
            Price: ${props.price}
          </span>
        </h6>
        <hr />
        <h5>
          Pints Left in Keg:{" "}
          {props.pintQuantity > 0 ? (
            props.pintQuantity
          ) : (
            <div style={{ color: "#7a0000" }}>
              {" "}
              Can I kick it? (Yes, you can!) (Out of Stock)
            </div>
          )}
        </h5>
      </div>
      <button
        className="btn btn-success"
        onClick={() => props.sellButton(props.id)}
      >
        One Beer (Sell Pint)
      </button>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  abv: PropTypes.string,
  pintQuantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  sellButton: PropTypes.func,
};

export default Keg;
