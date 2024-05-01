/** @format */

import { FC } from "react";
import Modal from "../Modal";
import Close from "../Icons/CloseIcon";

const AddTask: FC = () => {
  return (
    <Modal>
      <form>
        <div className="flx-between">
          <span className="modal-title">Add Task </span>
          <Close />
        </div>
      </form>
    </Modal>
  );
};
export default AddTask;
