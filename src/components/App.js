import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import Navigator from "./Navigator/Navigator";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import BasicTabs from "./tabs/BasicTabs";
function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <BasicTabs/>
      <div className="pane">
        <Navigator srcDoc={srcDoc} />
      </div>

      
    </>
  );
}

export default App;
