import React, { Component } from 'react'
import { FaShoppingBag, FaStar } from "react-icons/fa"
import PropTypes from 'prop-types';
import OrderElem from '../orderElem';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOpen: false,
      favOpen: false,
    };
    this.toggleCart = this.toggleCart.bind(this);
     this.toggleFav = this.toggleFav.bind(this);
  }

showOrders() {
    return (
      <div>
        {this.props.orders.map(el => (
          <OrderElem onDelete={this.props.onDelete} onDeleteFav={this.props.onDeleteFav} key={el.id} item={el} type='cart'/>
        ))}
    </div>
  )
  }

  showFavs() {
    return (
      <div>
        {this.props.favs.map(el => (
          <OrderElem onDeleteFav={this.props.onDeleteFav} onDelete={this.props.onDelete} key={el.id} item={el} type='fav' />
        ))}
    </div>
  )
}

  showNothing() {
    return (
      <div className='empty'>
       <h2>No items added</h2>
    </div>
  )
  }
  
  toggleCart() {
    this.setState(prevState => ({
      cartOpen: !prevState.cartOpen,
      favOpen: false
    }));
  }
    toggleFav() {
    this.setState(prevState => ({
      favOpen: !prevState.favOpen,
      cartOpen: false
    }));
  }

  render() {
    const { cartOpen, favOpen } = this.state;
    return (
      <header>
        <div>
          <span className="logo">Luxury Bags</span>
          <FaShoppingBag
            onClick={this.toggleCart}
            className={`shop-cart-btn ${cartOpen && 'active'}`}
          />
          {cartOpen && (
            <div className='shop-cart'>
              {this.props.orders.length > 0 ? this.showOrders() : this.showNothing()}
            </div>
          )}
          <span className="cart-count">{this.props.orders.length}</span>


          <FaStar onClick={this.toggleFav}
            className={`shop-star-btn ${favOpen && 'active'}`} />
          {favOpen && (
            <div className='shop-cart'>
              {this.props.favs.length > 0 ? this.showFavs() : this.showNothing()}
            </div>
          )}

 <span className="fav-count">{this.props.favs.length}</span>
        </div>
        <div className="presentation"></div>
      </header>
    );
  }
}

export default Header;


Header.propTypes = {
  orders: PropTypes.array.isRequired,
  favs: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDeleteFav: PropTypes.func.isRequired,
};