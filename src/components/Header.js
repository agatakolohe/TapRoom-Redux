import React from "react";

function Header() {
  const headerStyles = {
    opacity: "0.8",
    color: "white",

    textAlign: "center",
  };
  return (
    <React.Fragment>
      <div style={headerStyles}>
        <h1>
          <strong>HipHops</strong>
        </h1>
        <h3>
          <strong>Keg Tracker</strong>
        </h3>
        <img
          src="https://images-ext-1.discordapp.net/external/K1ZGwwUszobvaTtJq4vb2Qr1K68MVMPobqth0UBk1YY/https/images-ext-1.discordapp.net/external/4il03W1pYKJVskL_k2KPwHf7alD0sbfc8uXepxxwoJc/https/ih1.redbubble.net/image.2080344532.5562/st%252Csmall%252C507x507-pad%252C600x600%252Cf8f8f8.jpg"
          width="15%"
          height="auto"
        />
        <hr />
        <h5>
          <strong>
            {" "}
            I get no kick from champagne
            <br />
            Mere alcohol doesn't thrill me at all <br />
            So tell me why shouldn't it be true? <br />I get a kick out of brew{" "}
            <br />
          </strong>
        </h5>

        <p>
          <strong>-MF DOOM</strong>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Header;
