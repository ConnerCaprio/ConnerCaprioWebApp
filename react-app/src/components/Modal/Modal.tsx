// Modal.tsx

import React, { ReactNode } from "react";
import styles from  "./Modal.module.css";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div className={styles.modal_overlay} onClick={props.toggle}>
          <div onClick={(e) => e.stopPropagation()} className={styles.modal_box}>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
