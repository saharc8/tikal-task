import React from "react";
import Bar from "./Bar";
import Chart from "./Chart";

const BarChart = ({ data }) => {
  // console.log("planets", data);
  const barWidth = 100;
  const barMargin = 15;
  const chartWidth = data.length * (barWidth + barMargin);

  // reduce func to find the highest population for chartHeight
  const findHighest = (values) => {
    return values.reduce((a, b) => (b > a ? b : a), 0);
  };
  const chartHeight = findHighest(
    data.map((obj) => Math.round(Math.log(parseInt(obj.population))))
  );
  // because the numbers are very high I changed some ratios and used Math functions and custom variables
  const customHeight = 12;

  return (
    <div className="bar_chart" style={{ padding: "30px" }}>
      <h1>Part 2:</h1>
      <Chart width={chartWidth} height={chartHeight * customHeight}>
        {data.map((obj, i) => (
          <Bar
            key={i}
            name={obj.name}
            population={obj.population}
            x={i * (barWidth + barMargin)}
            y={
              Math.round(chartHeight - Math.log(parseInt(obj.population))) *
              customHeight
            }
            width={barWidth}
            height={
              Math.round(Math.log(parseInt(obj.population))) * customHeight
            }
          />
        ))}
      </Chart>
    </div>
  );
};

export default BarChart;
