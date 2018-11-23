import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveData } from '../../store';

import './styles.css';

class Popup extends Component {
  constructor(props){
    super(props);
    const { type, data } = props;
    const graphData = data[type];
    this.state = {
      ...graphData,
      graph: JSON.stringify(graphData.graph)
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.saveGraphConfig = this.saveGraphConfig.bind(this);
    this.handleDataChange = this.handleDataChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  saveGraphConfig() {
    const { type, close } = this.props;
    try {
      this.props.saveData({
        type: type,
        data: {
          title: this.state.title,
          graph: JSON.parse(this.state.graph)
        }
      });
    } catch(e){
      alert('invalid data');
    }
    close();
  }

  handleDataChange(e) {
    this.setState({
      graph: e.target.value
    });
  }

  render(){
    const { type, data } = this.props;
    const graphData = data[type];
    return (
      <div className='popup'>
        <div>
          <label> title: <input type="text" value={this.state.title} onChange={this.handleTitleChange}/></label>
        </div>
        <div>
          <label> data: <textarea rows={10} cols={40} value={this.state.graph} onChange={this.handleDataChange}></textarea></label>
        </div>
        <button onClick={this.saveGraphConfig}>save</button>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return ({
    data: store
  })
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
		{
			saveData: saveData
		},
		dispatch,
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
