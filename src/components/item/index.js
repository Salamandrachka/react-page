import React, { useState, useRef } from "react";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  openFavsModal,
  openFavsDeleteModal,
  openCartModal,
} from "../../redux/actions/modalAction";

const Item = (props) => {
  const dispatch = useDispatch();
  const modalRef = useRef(null);

  const favs = useSelector((state) => state.favs.favs);

  const isActive = favs.some((f) => f.id === props.item.id);

  return (
    <div className="item" ref={modalRef}>
      <img src={"./img/" + props.item.img} />
      <h2>{props.item.title}</h2>
      <p>{props.item.code}</p>
      <p>{props.item.color}</p>
      <b>{props.item.price}$</b>

      <FaStar
        className={isActive ? "add-to-fav active" : "add-to-fav"}
        onClick={() => {
          if (!isActive) dispatch(openFavsModal(props.item));
          else dispatch(openFavsDeleteModal(props.item));
        }}
      />

      <div
        className="add-to-card"
        onClick={() => {
          dispatch(openCartModal(props.item));
        }}
      >
        +
      </div>
    </div>
  );
};

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
};
