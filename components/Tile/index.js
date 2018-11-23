import React, { Component } from 'react';
import LineChart from './graphs/line';
import BarChart from './graphs/bar';
import AreaChart from './graphs/area';
import './styles.css';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      title: 'test title',
    }
    this.handleChange = this.handleChange.bind(this);
    this.editModeOn = this.editModeOn.bind(this);
    this.editModeOff = this.editModeOff.bind(this);
  }

  handleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  editModeOn(e) {
    this.setState({
      edit: true
    })
  }

  editModeOff(e) {
    this.setState({
      edit: false
    })
  }

  render() {
    const {i, type} = this.props;
    const { edit, title } = this.state;
    return (
      <div>
        {
          edit
          ?
          <input type="text" defaultValue={title} onChange={this.handleChange}/>
          :
          <span className='tile-title'>{title}</span>
        }
        &nbsp;
        {
          edit
          ?
          <a href="javascript:void(0)" onClick={this.editModeOff}><span>save</span></a>
          :
          <a href="javascript:void(0)" onClick={this.editModeOn}><span>edit</span></a>
        }
        <div>
          {
            (() => {
                return {
                  line: <LineChart />,
                  bar: <BarChart />,
                  area: <AreaChart />,
                  none: <div>none</div>
                }[type]
            })()
          }
        </div>
      </div>
    );
  }
}

export default Tile;
