import React, { Component } from 'react'
import Item from '../item'
import PropTypes from 'prop-types';

export class ItemsList extends Component {
  render() {
    return (
        <main>
            {this.props.items.map(el => (
                <Item key={el.id} item={el} onAdd={this.props.onAdd} onAddToFav={this.props.onAddToFav} onDeleteFav={this.props.onDeleteFav}/>
            ))}
      </main>
    )
  }
}

export default ItemsList;

ItemsList.propTypes = {
    id: PropTypes.string,
    tiltle: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    color: PropTypes.string,
    code: PropTypes.string,
}