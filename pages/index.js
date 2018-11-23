import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { ModalContainer } from 'react-router-modal';
import {startClock, serverRenderClock} from '../store';
import Dashboard from '../components/Dashboard';


class Index extends React.Component {
  render () {
    return (
      <Fragment>
        <Dashboard />
        <ModalContainer />
      </Fragment>
    )
  }
}

export default connect()(Index);
