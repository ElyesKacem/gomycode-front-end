import React, { useState } from "react";
import Login from "../api/login/login";
import ButtonAppBar from "./navbar/Navbar";
import BasicTabs from "./tabs/BasicTabs";
function App() {
  const [srcDoc, setSrcDoc] = useState("");

  return (
    <>
    {
      /**
       * <ButtonAppBar></ButtonAppBar>
       <BasicTabs  srcDoc={srcDoc}/>
       * 
       */
    }
    
        <Login/>

      
    </>
  );
}

export default App;
