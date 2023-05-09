import React, { useState, useRef } from 'react';
import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import  Modal from '../modal';
import  Button from '../button';

const Item = (props) => {
const modalRef = useRef(null);
const [active, setActive] = useState(false);
const [firstModalShow, setFirstModalShow] = useState(false);
const [secondModalShow, setSecondModalShow] = useState(false);

const handleAddToFav = (item) => {
if (active) {
props.onDeleteFav(item.id);
setActive(false);
} else {
setSecondModalShow(true);
document.body.classList.add('modal-open');
}
}

const handleYesClick = () => {
console.log('Товар добавлен в корзину');
props.onAdd(props.item);
setFirstModalShow(false);
document.body.classList.remove('modal-open');
}

const handleNoClick = () => {
setFirstModalShow(false);
document.body.classList.remove('modal-open');
}

const handleYesClickFav = () => {
console.log('Товар добавлен в fav');
props.onAddToFav(props.item);
setSecondModalShow(false);
setActive(true);
document.body.classList.remove('modal-open');
}

const handleNoClickFav = () => {
setSecondModalShow(false);
document.body.classList.remove('modal-open');
}

return (
<div className='item' ref={modalRef}>
<img src={"./img/" + props.item.img} />
<h2>{props.item.title}</h2>
<p>{props.item.code}</p>
<p>{props.item.color}</p>
<b>{props.item.price}$</b>

 <FaStar
    className={active ? 'add-to-fav active' : 'add-to-fav'}
    onClick={() => { handleAddToFav(props.item); }}
  />

  {secondModalShow && (
    <Modal
      header="Do you want to add this item to your fav?"
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

  <div
    className='add-to-card'
    onClick={() => { setFirstModalShow(true); document.body.classList.add('modal-open') }}>
    +
  </div>

  {firstModalShow && (
    <Modal
      header="Do you want to add this item to your cart?"
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
  </div>
  
)
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
onAdd: PropTypes.func,
onAddToFav: PropTypes.func,
onDeleteFav: PropTypes.func,
}


