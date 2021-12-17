import React from "react";

const Bar = ({ name, population, x, y, width, height }) => {
  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        style={{
          fill: "teal",
          stroke: "black",
          strokeWidth: 2,
          fillOpacity: 0.7,
          strokeOpacity: 0.5,
        }}
      />
      <text style={{ fill: "white", fontSize: "1.6rem" }} x={x + 5} y={330}>
        {name}
      </text>
      <text
        style={{
          fill: "white",
          fontSize: "1.2rem",
        }}
        x={x + 0.06 * width}
        y={y + 15}
      >
        {population}
      </text>
    </>
  );
};

export default Bar;
