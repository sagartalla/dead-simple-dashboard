import React, {Component} from 'react';

class Popup extends Component {
  render(){
    const { type } = this.props;
    return (
      <div>
        {type}
      </div>
    );
  }
}

export default Popup;
