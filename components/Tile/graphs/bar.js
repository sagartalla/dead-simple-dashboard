import React from "react";
import { Chart } from "react-charts";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const BarChart = (props) => {
  return (
    <div
      style={{
        width: "400px",
        height: "300px"
      }}
    >
      <span className='tile-title'>{props.data.title}</span>
      <Chart
        data={props.data.graph}
        series={{ type: 'bar' }}
        axes={[
          { primary: true, type: "linear", position: "bottom" },
          { type: "linear", position: "left" }
        ]}
      />
    </div>
)
};


const mapStateToProps = (store) => {
  return ({
    data: store.bar
  })
};

export default connect(mapStateToProps, null)(BarChart);
