import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  const listStyles = {
    color: "white",
    backgroundColor: "#576f48",
    padding: "2%",
    opacity: "0.8",
  };
  const headerListStyle = {
    textAlign: "center",
    color: "#2b3724",
  };
  const { kegList, onClickingSellPint } = props;
  return (
    <React.Fragment>
      <div style={listStyles}>
        <div style={headerListStyle}>
          <h1>
            <strong>Keg Flow</strong>
          </h1>
          <h5>
            <strong>(Current Kegs)</strong>
          </h5>
          <hr />
        </div>
        {Object.values(props.kegList).map((keg) => (
          <Keg
            whenKegClicked={props.onKegSelection}
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            abv={keg.abv}
            pintQuantity={keg.pintQuantity}
            id={keg.id}
            key={keg.id}
            sellButton={onClickingSellPint}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func,
  onClickingSellPint: PropTypes.func,
};
export default KegList;
