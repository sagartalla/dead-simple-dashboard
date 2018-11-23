import React from "react";
import { Chart } from "react-charts";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const GraphCompoent = (props) => {
  const { id } = props;
  return (
    <div
      style={{
        width: "400px",
        height: "300px"
      }}
    >
      <span className='tile-title'>{props.data.title}</span>
      <Chart
        data={props.data[id].graph}
        series={{ type: props.data[id].type }}
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
    data: store
  })
};

export default connect(mapStateToProps, null)(GraphCompoent);
