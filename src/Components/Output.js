import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Output extends Component {
  render() {
    return (
      <div className="output">
        {this.props.text}
      </div>
    );
  }
}

Output.propTypes = {
  text: PropTypes.string,
};

export default Output;
