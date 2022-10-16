import React, { useState } from "react";
import ButtonAppBar from "./navbar/Navbar";
import BasicTabs from "./tabs/BasicTabs";
function App() {
  const [srcDoc, setSrcDoc] = useState("");

  return (
    <>
    <ButtonAppBar></ButtonAppBar>
      <BasicTabs  srcDoc={srcDoc}/>
      

      
    </>
  );
}

export default App;
