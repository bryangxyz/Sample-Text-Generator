import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Paras extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value,
    }, () => {
      this.props.onChange(this.state.value);
    })
  }

  render() {
    return (
      <div>
        <input className="form-control" type="number" value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}

Paras.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
};

export default Paras;
