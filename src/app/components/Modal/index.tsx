/** @format */

import { FC, ReactNode } from "react";

// styles
import { ModalWrapper } from "./style";

interface ModalProps {
  show?: boolean;
  width?: number | undefined;
  closable?: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ show, width, closable, onClose, children }) => {
  if (!show) return <></>;

  return (
    <ModalWrapper $width={width}>
      <div className="mask" onClick={() => closable && onClose()}></div>
      <div className="modal-content">{children}</div>
    </ModalWrapper>
  );
};
export default Modal;
