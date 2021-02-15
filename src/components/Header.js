import React from "react";

function Header() {
  const headerStyles = {
    opacity: "0.7",
    marginBottom: "2%",
  };
  return (
    <React.Fragment>
      <div style={headerStyles}>
        <nav class="nav bar navbar-light bg-light">
          <a class="navbar-brand" href="/">
            <img
              src="https://images-ext-1.discordapp.net/external/K1ZGwwUszobvaTtJq4vb2Qr1K68MVMPobqth0UBk1YY/https/images-ext-1.discordapp.net/external/4il03W1pYKJVskL_k2KPwHf7alD0sbfc8uXepxxwoJc/https/ih1.redbubble.net/image.2080344532.5562/st%252Csmall%252C507x507-pad%252C600x600%252Cf8f8f8.jpg"
              width="90"
              height="90"
              class="d-inline-block align-top"
            />
            <strong>HipHops Tap Room | Keg Tracker</strong>
          </a>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Header;
