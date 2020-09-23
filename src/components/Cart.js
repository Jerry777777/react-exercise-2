import React from 'react';
import PropTypes from 'prop-types';

export default class Cart extends React.Component {
  render() {
    return <p>现在有：{this.props.number}</p>;
  }
}
Cart.propTypes = {
  number: PropTypes.number,
};
