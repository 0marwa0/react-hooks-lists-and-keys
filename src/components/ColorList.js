import React from "react";
import ColorElements from "./ColorEelement";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        <ColorElements colors={colors} />
      </ol>
    </div>
  );
}

export default ColorList;
