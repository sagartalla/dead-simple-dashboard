import React, { Component } from 'react';
import { Modal } from "react-router-modal";

import LineChart from './graphs/line';
import BarChart from './graphs/bar';
import AreaChart from './graphs/area';

import Popup from '../Popup';

import './styles.css';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      showModal: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.editModeOn = this.editModeOn.bind(this);
    this.editModeOff = this.editModeOff.bind(this);
    this.modalToggle = this.modalToggle.bind(this);
    this.openModal = this.openModal.bind(this);
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

  modalToggle() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  openModal() {
    this.setState({
      showModal: true
    });
  }

  render() {
    const {i, type} = this.props;
    const { edit } = this.state;
    return (
      <div>
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
        <div className='tile-edit-btn' onClick={this.openModal}><a href="javascript:void(0)">edit</a></div>
        {
          this.state.showModal ?
            <div>
              <Modal className={`react-router-modal__modal`} onBackdropClick={this.modalToggle}>
                <Popup type={this.props.type} close={this.modalToggle}/>
              </Modal>
            </div> : null
        }
      </div>
    );
  }
}

export default Tile;
