import React, { useState } from "react";
import BasicTabs from "./tabs/BasicTabs";
function App() {
  const [srcDoc, setSrcDoc] = useState("");

  return (
    <>
      <BasicTabs  srcDoc={srcDoc}/>
      

      
    </>
  );
}

export default App;
