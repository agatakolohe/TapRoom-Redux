import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const formStyles = {
    backgroundColor: "#607629",
    opacity: "0.9",
    padding: "4%",
    color: "black",
  };
  return (
    <React.Fragment>
      <div style={formStyles}>
        <form onSubmit={props.formSubmissionHandler}>
          <div className="form-group">
            <h4>Name: </h4>
            <input
              type="text"
              name="name"
              placeholder="C.R.E.A.M."
              className="form-control"
            />
            <hr />
          </div>
          <div className="form-group">
            <h4>Brand: </h4>
            <input
              type="text"
              name="brand"
              placeholder="Bru-Tang Clan"
              className="form-control"
            />
            <hr />
          </div>
          <div className="form-group">
            <h4>Price: </h4>
            <input
              type="number"
              name="price"
              placeholder="Dollar, dollar bill y'all"
              className="form-control"
            />
            <hr />
          </div>
          <div className="form-group">
            <h4>Alcohol by Volume(ABV): </h4>
            <input
              type="text"
              name="abv"
              placeholder="5.0%"
              className="form-control"
            />
            <hr />
          </div>
          <div className="form-group">
            <h4>Quantity by Pint: </h4>
            <input
              type="number"
              name="pintQuantity"
              placeholder="124 = full keg"
              min="1"
              max="124"
              className="form-control"
            />
            <hr />
          </div>
          <button className="btn btn-success" type="submit">
            {props.buttonText}
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
