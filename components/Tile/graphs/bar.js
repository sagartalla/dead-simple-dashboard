import React from "react";
import { Chart } from "react-charts";

const BarChart = () => {
  return (
    <div
      style={{
        width: "400px",
        height: "300px"
      }}
    >
      <Chart
        data={[
          {
            label: "Series 1",
            data: [[0, 1], [1, 2]]
          },
          {
            label: "Series 2",
            data: [[0, 3], [1, 1]]
          }
        ]}
        series={{ type: 'bar' }}
        axes={[
          { primary: true, type: "linear", position: "bottom" },
          { type: "linear", position: "left" }
        ]}
      />
    </div>
)
};



export default BarChart;
