import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Modal from '../modal';
import Button from '../button';
import { useDispatch, useSelector } from 'react-redux';
import { closeCartDeleteModal, closeFavsDeleteModal, openCartDeleteModal, openFavsDeleteModal } from '../../redux/actions/modalAction';
import { deleteFromFavs } from '../../redux/actions/favsAction';
import { deleteFromCart } from '../../redux/actions/cartAction';

function OrderElem(props) {
  const { type, item} = props;
  const dispatch = useDispatch();
  const currentItem = useSelector(state => state.modal.currentItem)
      const {
    isOpenFavsDeleteModal,
    isOpenCartDeleteModal,
  } = useSelector((state) => state.modal);


  const deleteFromFav = () => {
    dispatch(deleteFromFavs(currentItem.id));
    dispatch(closeFavsDeleteModal());

    // reducer({type: ..., payload: ...})
  };
 const deleteFromOrders= () => {
    dispatch(deleteFromCart(currentItem.id));
    dispatch(closeCartDeleteModal());
  };

return (
<div className='item'>
<img src={'./img/' + item.img} />
<h2>{item.title}</h2>
<b>{item.price}$</b>
        
{type === 'cart' && (
<FaTrash className='delete-icon' onClick={() => { dispatch(openCartDeleteModal(item)) }} />
)}

      {isOpenCartDeleteModal && (
        <Modal
          header="Do you want to delete this item from your cart?"
          text={currentItem.title}
          onClose={() => dispatch(closeCartDeleteModal())}
          actions={
            <>
              <div className="btnModalBloc">
                <Button
                  className="button-yes"
                  id="yes-btn"
                  backgroundColor="yellow"
                  text="YES"
                  onClick={() => deleteFromOrders()}
                />

                <Button
                  className="button-no"
                  id="no-btn"
                  backgroundColor="red"
                  text="NO"
                  onClick={() => dispatch(closeCartDeleteModal())}
                />
              </div>
            </>
          }
        />
      )}


{type === 'fav' && (
<FaTrash className='delete-icon' onClick={() => { dispatch(openFavsDeleteModal(item)) }} />
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

</div>
);
}

export default OrderElem;

OrderElem.propTypes = {
    props: PropTypes.object,
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
};