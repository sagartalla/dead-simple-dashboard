import React from "react";
import { Chart } from "react-charts";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const lineChart = (props) => {
  return (
    <div
      style={{
        width: "400px",
        height: "300px"
      }}
    >
      <Chart
        data={props.data}
        axes={[
          { primary: true, type: "linear", position: "bottom" },
          { type: "linear", position: "left" }
        ]}
      />
    </div>
  );
}

const mapStateToProps = (store) => {
  return ({
    data: store.line
  })
};

export default connect(mapStateToProps, null)(lineChart);

// export default lineChart;
