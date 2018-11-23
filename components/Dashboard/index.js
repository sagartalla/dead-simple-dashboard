import React, { Component } from 'react';
import {connect} from 'react-redux';
import { SizeMe } from 'react-sizeme'
// import GridLayout from 'react-grid-layout';
import RGL, { WidthProvider } from "react-grid-layout";
import _ from 'lodash';

import Tile from '../Tile';

const ReactGridLayout = WidthProvider(RGL);

import './styles.css';


class Dashboard extends Component {
  static defaultProps = {
      className: "layout",
      items: 4,
      y: 3,
      onLayoutChange: function() {},
      cols: 12,
      graphs: ['g1', 'g2', 'g3']
    };

    constructor(props) {
      super(props);

      const layout = this.generateLayout();
      this.state = { layout };
    }

    generateDOM() {
      const { items,  graphs } = this.props;
      return _.map(_.range(this.props.items), function(i) {
        return (
          <div key={i}>
            <Tile i={i} id={graphs[i] || 'none'}/>
          </div>
        );
      });
    }

    generateLayout() {
      const p = this.props;
      return _.map(new Array(p.items), function(item, i) {
        const y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
        return {
          x: (i * 6) % 12,
          y: Math.floor(i / 6) * y,
          w: 5,
          h: y,
          i: i.toString()
        };
      });
    }

    onLayoutChange(layout) {
      this.props.onLayoutChange(layout);
    }

    render() {
      return (
        <SizeMe>
        {({ size }) => {
          return (
            <ReactGridLayout
              layout={this.state.layout}
              onLayoutChange={this.onLayoutChange}
              {...this.props}
            >
              {this.generateDOM()}
            </ReactGridLayout>
          );
        }}
        </SizeMe>
      );
    }
}

function mapStateToProps (state) {
  const { lastUpdate, light } = state
  return { lastUpdate, light };
}

export default connect(mapStateToProps)(Dashboard);
