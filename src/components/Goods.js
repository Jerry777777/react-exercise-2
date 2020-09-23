import React from 'react';
import PropTypes from 'prop-types';

export default class Goods extends React.Component {
  render() {
    return (
      <section>
        <p>iPhone</p>
        <button onClick={this.props.cartHandler}>add to cart</button>
      </section>
    );
  }
}
Goods.propTypes = {
  cartHandler: PropTypes.cartHandler,
};
