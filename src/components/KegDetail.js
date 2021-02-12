import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;
  return (
    <React.Fragment>
      <h1>Keg Details:</h1>
      <h2>Name: {keg.name}</h2>
      <h3>Brand: {keg.brand}</h3>
      <h4>ABV: {keg.abv}</h4>
      <h5>Price: {keg.price}</h5>
      <h4>
        Pints Left in Keg:{" "}
        {keg.pintQuantity > 0 ? (
          keg.pintQuantity
        ) : (
          <div style={{ color: "red" }}>
            Can I kick it? (Yes, you can!) (Out of Stock)
          </div>
        )}
      </h4>
      <hr />
      <button onClick={props.onClickingEdit}>
        Hold It Now, Hit It (Update Keg){" "}
      </button>
      <button
        class="btn btn-danger"
        onClick={() => props.onClickingDelete(keg.id)}
      >
        Push It Real Good (Delete Keg)
      </button>
    </React.Fragment>
  );
}
KegDetail.propTypres = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default KegDetail;
