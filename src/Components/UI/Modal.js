import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClick}></div>;
}
function ModalOverLay(props) {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
}
const portalElement = document.getElementById("modal-root");
function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        portalElement
      )}
      ;
      {ReactDOM.createPortal(
        <ModalOverLay>{props.children}</ModalOverLay>,
        portalElement
      )}
      ;
    </Fragment>
  );
}

export default Modal;
