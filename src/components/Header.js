import React from "react";

function Header({ lamp, setLamp }) {
  const switchLamp = () => {
    setLamp(!lamp);
  };
  return (
    <div
      style={{
        minHeight: "10vh",
        
      }}
    >
      
      <div className="card-header">
      <div className="form-check form-switch d-flex" style={{justifyContent:"space-evenly"}}  onClick={switchLamp}>
      Dark Mode
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
        <label style={{marginLeft:"-50px"}}>{lamp ? "ON" : "OFF"}</label>
        
      </div>
        <h1 >Your TO-DO App</h1>
      </div>
    </div>
  );
}

export default Header;
