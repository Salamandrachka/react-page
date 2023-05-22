import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Modal(props) {
  // const isActive = useSelector(state => state.fvs.isActive)

  return (
    <div className="blur">
      <div className="modal" id="modal">

                <div className="closePointer" onClick={props.onClose}>
          X
        </div>

        <div className="modal-overlay">
          <h2 className="modalHeader">{props.header}</h2>
        </div>

        <p className="modalText">{props.text}</p>
 
        <div>{props.actions}</div>
      </div>
    </div>
  );
}

export default Modal;

// Modal.propTypes = {
//     text: PropTypes.string,
//     header: PropTypes.string,
//     actions: PropTypes.object,
    
// }