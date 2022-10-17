import React from "react";

function Header({ lamp, setLamp }) {
  const switchLamp = () => {
    setLamp(!lamp);
  };
  return (
    <div className="container "
      style={{
        
        position: "relative",
        zIndex: "1",
        width: "50%",
       
      }}
    >
      <div 
      style={{
        backgroundColor: "white",
        width: "50%",
        paddingTop: "10px",
        position: "fixed",
        top: "0",
        left: "0",
        borderBottom: "1px solid black",
        
      }}>
        <h1>Your TO-DO App</h1>
      </div>
     
    </div>
  );
}

export default Header;
