import React, { useState } from "react";
import PropTypes from "prop-types";

ColorBox.propTypes = {};

function ColorBox(props) {
  const [color, setColor] = useState("black"); // Corrected setColor

  return (
    <div>
      <p style={{ color }}>{color}</p>
      <button onClick={() => setColor("blue")}>Change to Blue</button>

      <button onClick={() => setColor("Red")}>Change to Red</button>
    </div>
  );
}

export default ColorBox;
