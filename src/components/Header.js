import React from 'react';
import Cart from './Cart';
import PropTypes from 'prop-types';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 id="title">Store</h1>
        <Cart number={this.props.number} />
      </header>
    );
  }
}
Header.propTypes = {
  number: PropTypes.number,
};
