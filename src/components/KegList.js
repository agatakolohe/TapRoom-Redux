import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  const { kegList, onClickingSellPint } = props;
  return (
    <React.Fragment>
      <hr />
      {kegList.map((keg) => (
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
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func,
  onClickingSellPint: PropTypes.func,
};
export default KegList;
