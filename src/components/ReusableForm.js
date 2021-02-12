import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div class="form-group">
          <h4>Name: </h4>
          <input
            type="text"
            name="name"
            placeholder="C.R.E.A.M."
            class="form-control"
          />
          <hr />
        </div>
        <div class="form-group">
          <h4>Brand: </h4>
          <input
            type="text"
            name="brand"
            placeholder="Bru-Tang Clan"
            class="form-control"
          />
          <hr />
        </div>
        <div class="form-group">
          <h4>Price: </h4>
          <input
            type="number"
            name="price"
            placeholder="Dollar, dollar bill y'all"
            class="form-control"
          />
          <hr />
        </div>
        <div class="form-group">
          <h4>Alcohol by Volume(ABV): </h4>
          <input
            type="text"
            name="abv"
            placeholder="5.0%"
            class="form-control"
          />
          <hr />
        </div>
        <div class="form-group">
          <h4>Quantity by Pint: </h4>
          <input
            type="number"
            name="pintQuantity"
            placeholder="124 = full keg"
            min="1"
            max="124"
            class="form-control"
          />
          <hr />
        </div>
        <button class="btn btn-success" type="submit">
          {props.buttonText}
        </button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
