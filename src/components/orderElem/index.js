import React, { Component } from 'react';
import { FaTrash } from "react-icons/fa"
import PropTypes from 'prop-types';

export class OrderElem extends Component {
  render() {
    const { type } = this.props;
    return (
        <div className='item'>
             <img src={"./img/" + this.props.item.img}/>
            <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price}$</b>
        {type === 'cart' && (
          <FaTrash className='delete-icon' onClick={() => { this.props.onDelete(this.props.item.id) }} />
        )}
        
         {type === 'fav' && (
          <FaTrash className='delete-icon' onClick={() => { this.props.onDeleteFav(this.props.item.id) }} />
        )}
      </div>
    )
  }
}

export default OrderElem;

OrderElem.propTypes = {
    props: PropTypes.object,
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
};