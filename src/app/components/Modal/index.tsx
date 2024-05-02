/** @format */

import { FC, ReactNode } from "react";
import { ModalWrapper } from "./style";

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <ModalWrapper>
      <div className="modal-content">{children}</div>
    </ModalWrapper>
  );
};
export default Modal;
