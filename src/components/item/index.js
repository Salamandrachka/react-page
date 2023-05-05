import React, { Component } from 'react'
import { FaStar } from "react-icons/fa"
import PropTypes from 'prop-types';

export class Item extends Component {
   constructor(props) {
    super(props);
    this.state = {
      active: false // начальное значение свойства "active" - false
    };
    this.handleAddToFav = this.handleAddToFav.bind(this);
  }

handleAddToFav(item) {
  if (this.state.active) {
    this.props.onDeleteFav(item.id);
  } else {
    this.props.onAddToFav(item);
  }
  this.setState({ active: !this.state.active });
}
  render() {
    return (
        <div className='item'>
            <img src={"./img/" + this.props.item.img}/>
            <h2>{this.props.item.title}</h2>
        <p>{this.props.item.code}</p>
        <p>{this.props.item.color}</p>
        <b>{this.props.item.price}$</b>
        <FaStar
          className={this.state.active ? 'add-to-fav active' : 'add-to-fav'}
          onClick={() => {this.handleAddToFav(this.props.item); }}
        />
            <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
        </div>
    )
  }
}

export default Item;

Item.propTypes = {
  props: PropTypes.object,
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    color: PropTypes.string,
    code: PropTypes.string,
}