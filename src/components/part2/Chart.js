import React from "react";

const Chart = ({ children, width, height }) => {
  return (
    <svg className="chart" width={width} height={height}>
      {children}
    </svg>
  );
};

export default Chart;
