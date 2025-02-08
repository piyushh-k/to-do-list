import React, { useState } from "react";
import "./App.css";

function Picker() {
  const [color, setColor] = useState("#FFFFFF");
  function handleColorChange(e){
    setColor(e.target.value)
    console.log(e)
  }

  return (  
    <div className="color-picker-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p style={{ fontSize: 28 }}>selected color : {color}</p>
      </div>
      <br />
      <br />
      <div className="label" style={{ fontSize: 30 }}>
        <label htmlFor="select">select a color: </label>
        <input
          type="color"
          id="select"
          value={color}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
}

export default Picker;
