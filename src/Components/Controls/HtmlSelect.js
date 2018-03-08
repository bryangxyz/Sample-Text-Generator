import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HtmlSelect extends Component {
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
        <select className="form-control" onChange={this.onChange}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
    );
  }
}

HtmlSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.bool,
};

export default HtmlSelect;
