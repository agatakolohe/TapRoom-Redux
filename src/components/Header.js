import React from "react";

function Header() {
  const headerStyles = {
    textAlign: "center",
  };
  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>Hip Hops</h1>
        <h3>Keg Tracker</h3>
        <hr />
        <h4>Can You Kick It?</h4>
      </div>
    </React.Fragment>
  );
}

export default Header;
