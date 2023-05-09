import React, { useState, useRef } from 'react';
import { FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Modal from '../modal';
import Button from '../button';

function OrderElem(props) {
const { type, item, onDelete, onDeleteFav } = props;
const [firstModalShow, setFirstModalShow] = useState(false);
const [active, setActive] = useState(false);
const [secondModalShow, setSecondModalShow] = useState(false);
    
    
const handleYesClick = () => {
console.log('The item was deleted from your cart');
onDelete(item.id)
setFirstModalShow(false);
document.body.classList.remove('modal-open');
}

const handleNoClick = () => {
setFirstModalShow(false);
document.body.classList.remove('modal-open');
}

const handleYesClickFav = () => {
console.log('The item was deleted from your cart');
onDeleteFav(item.id);
setSecondModalShow(false);
setActive(true);
document.body.classList.remove('modal-open');
}

const handleNoClickFav = () => {
setSecondModalShow(false);
document.body.classList.remove('modal-open');
}  
    
    
return (
<div className='item'>
<img src={'./img/' + item.img} />
<h2>{item.title}</h2>
<b>{item.price}$</b>

{/* {type === 'cart' && (
<FaTrash className='delete-icon' onClick={() => onDelete(item.id)} />
)}
        
{type === 'fav' && (
<FaTrash className='delete-icon' onClick={() => onDeleteFav(item.id)} />
)} */}
        
{type === 'cart' && (
<FaTrash className='delete-icon' onClick={() => { setFirstModalShow(true); document.body.classList.add('modal-open') }} />
)}
 
{firstModalShow && (
    <Modal
      header="Do you want to delete this item from your cart?"
      text={props.item.title}
      onClose={() => handleNoClick()}
      actions={
        <>
          <div className="btnModalBloc">
            <Button
              className="button-yes"
              id="yes-btn"
              backgroundColor="yellow"
              text="YES"
              onClick={() => handleYesClick()}
            />

            <Button
              className="button-no"
              id="no-btn"
              backgroundColor="red"
              text="NO"
              onClick={() => handleNoClick()}
            />

          </div>
        </>
      }
    />
  )}


{type === 'fav' && (
<FaTrash className='delete-icon' onClick={() => { setSecondModalShow(true); document.body.classList.add('modal-open') }} />
)}
        
 
   {secondModalShow && (
    <Modal
      header="Do you want to delete this item from your fav?"
      text={props.item.title}
      onClose={() => handleNoClickFav()}
      actions={
        <>
          <div className="btnModalBloc">
            <Button
              className="button-yes"
              id="yes-btn"
              backgroundColor="yellow"
              text="YES"
              onClick={() => handleYesClickFav()}
            />

            <Button
              className="button-no"
              id="no-btn"
              backgroundColor="red"
              text="NO"
              onClick={() => handleNoClickFav()}
            />

          </div>
        </>
      }
    />
  )}    
        
</div>
);
}

// OrderElem.propTypes = {
// type: PropTypes.string,
// item: PropTypes.shape({
// id: PropTypes.string,
// title: PropTypes.string,
// price: PropTypes.number,
// img: PropTypes.string,
// }),
// onDelete: PropTypes.func,
// onDeleteFav: PropTypes.func,
// };

export default OrderElem;

OrderElem.propTypes = {
    props: PropTypes.object,
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    img: PropTypes.string,
};