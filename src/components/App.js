import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div class="container">
        <KegControl />
      </div>
    </React.Fragment>
  );
}

export default App;
