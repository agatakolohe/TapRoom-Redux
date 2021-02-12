import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h2>Name: {props.name}</h2>
        <h3>Brand: {props.brand}</h3>
        <h4>ABV: {props.abv}</h4>
        <p>${props.price}</p>
        <h4>
          Pints:{" "}
          {props.pintQuantity > 0 ? (
            props.pintQuantity
          ) : (
            <div style={{ color: "red" }}>
              {" "}
              Can I kick it? (Yes, you can!) (Out of Stock)
            </div>
          )}
        </h4>
      </div>
      <button
        class="btn btn-warning"
        onClick={() => props.sellButton(props.id)}
      >
        One Beer
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
