import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../assets/product_image_placeholder.png';

class Phone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section>
        <h3 className="model">{this.props.id}</h3>
        <img className="image-size" alt="product_image" src={Image}></img>
        <h3 className="price">
          {this.props.price}{' '}
          <button className="add-to-cart">add to cart</button>
        </h3>
      </section>
    );
  }
}
Phone.propTypes = {
  id: PropTypes.string,
  price: PropTypes.string,
};
export default Phone;
