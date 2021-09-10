import React from "react";
function Index({ colors }) {
  return colors.map((color) => (
    <li key={color} style={{ color: color }}>
      {color}
    </li>
  ));
}
export default Index;
