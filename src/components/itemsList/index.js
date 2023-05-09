import React from 'react';
import Item from '../item';
import PropTypes from 'prop-types';

function ItemsList(props) {
  return (
    <main>
      {props.items.map((el) => (
        <Item
          key={el.id}
          item={el}
          onAdd={props.onAdd}
          onAddToFav={props.onAddToFav}
          onDeleteFav={props.onDeleteFav}
        />
      ))}
    </main>
  );
}

// ItemsList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       title: PropTypes.string,
//       price: PropTypes.number,
//       img: PropTypes.string,
//       color: PropTypes.string,
//       code: PropTypes.string,
//     })
//   ),
//   onAdd: PropTypes.func,
//   onAddToFav: PropTypes.func,
//   onDeleteFav: PropTypes.func,
// };

ItemsList.propTypes = {
    id: PropTypes.string,
    tiltle: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    color: PropTypes.string,
    code: PropTypes.string,
}
export default ItemsList;