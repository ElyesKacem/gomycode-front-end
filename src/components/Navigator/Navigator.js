import React from "react";
import { Rnd } from "react-rnd";

export default function Navigator({data}) {
  const style = {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    border: "solid 1px #ddd",
    background: "#f0f0f0",
  };

  return (
    <div>
      <Rnd
        style={style}
        default={{
          x: 0,
          y: 0,
          width: 320,
          height: 200,
        }}
      >
        <div>
          <div className="Header">
        
          </div>
          <p>Here ... !</p>
        </div>
        
      <div className="Results">
      <iframe
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            >
              
            </iframe>
      </div>
      </Rnd>
      
    </div>
  );
}


