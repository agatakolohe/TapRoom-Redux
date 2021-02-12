import React from "react";

function Header() {
  const headerStyles = {
    backgroundColor: "#41501c",
    opacity: "0.8",
    color: "#d2c071",
    padding: "1%",
    textAlign: "center",
  };
  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>Hip Hops</h1>
        <h3>Keg Tracker</h3>
        <hr />
        <h5>
          I get no kick from champagne
          <br />
          Mere alcohol doesn't thrill me at all <br />
          So tell me why shouldn't it be true? <br />I get a kick out of brew
        </h5>
        <p>- MF DOOM</p>
      </div>
    </React.Fragment>
  );
}

export default Header;
