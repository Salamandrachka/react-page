import React, { useEffect } from 'react';
import Item from '../item';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'; 
import { closeCartModal, closeFavsDeleteModal, closeFavsModal } from '../../redux/actions/modalAction';
import { addToFavs, deleteFromFavs } from '../../redux/actions/favsAction';
import Modal from '../modal';
import Button from '../button';
import { addToCart} from '../../redux/actions/cartAction';

function ItemsList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items.items)
  const currentItem = useSelector(state => state.modal.currentItem)

  const {
    isOpenFavsModal,
    isOpenFavsDeleteModal,
    isOpenCartModal,
  } = useSelector((state) => state.modal);

  const addToFav = () => {
    dispatch(addToFavs(currentItem));
    dispatch(closeFavsModal())
  };

   const deleteFromFav = () => {
    dispatch(deleteFromFavs(currentItem.id));
    dispatch(closeFavsDeleteModal());
    // reducer({type: ..., payload: ...})
  };

  const addToOrders = () => {
    dispatch(addToCart(currentItem));
    console.log(currentItem);
    dispatch(closeCartModal())
  };

  return (
    <main>
      {items.map((el) => (
        <Item
          key={el.id}
          item={el}
        />
      ))}

      {isOpenFavsModal && (
        <Modal
          header="Do you want to add this item to your fav?"
          text={currentItem.title}
          onClose={() => dispatch(closeFavsModal())}
          actions={
            <>
              <div className="btnModalBloc">
                <Button
                  className="button-yes"
                  id="yes-btn"
                  backgroundColor="yellow"
                  text="YES"
                  onClick={() => addToFav()}
                />

                <Button
                  className="button-no"
                  id="no-btn"
                  backgroundColor="red"
                  text="NO"
                  onClick={() => dispatch(closeFavsModal())}
                />
              </div>
            </>
          }
        />
      )}

      {isOpenFavsDeleteModal && (
        <Modal
          header="Do you want to delete this item from your fav?"
          text={currentItem.title}
          onClose={() => dispatch(closeFavsDeleteModal())}
          actions={
            <>
              <div className="btnModalBloc">
                <Button
                  className="button-yes"
                  id="yes-btn"
                  backgroundColor="yellow"
                  text="YES"
                  onClick={() => deleteFromFav()}
                />

                <Button
                  className="button-no"
                  id="no-btn"
                  backgroundColor="red"
                  text="NO"
                  onClick={() => dispatch(closeFavsDeleteModal())}
                />
              </div>
            </>
          }
        />
      )}
      
      {isOpenCartModal && (
        <Modal
          header="Do you want to add this item to your cart?"
          text={currentItem.title}
          onClose={() => dispatch(closeCartModal())}
          actions={
            <>
              <div className="btnModalBloc">
                <Button
                  className="button-yes"
                  id="yes-btn"
                  backgroundColor="yellow"
                  text="YES"
                  onClick={() => addToOrders()}
                />

                <Button
                  className="button-no"
                  id="no-btn"
                  backgroundColor="red"
                  text="NO"
                  onClick={() => dispatch(closeCartModal())}
                />
              </div>
            </>
          }
        />
      )}

    </main>
  );
}

ItemsList.propTypes = {
    id: PropTypes.string,
    tiltle: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
    color: PropTypes.string,
    code: PropTypes.string,
}
export default ItemsList;