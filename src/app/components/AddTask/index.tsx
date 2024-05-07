/** @format */

import { FC } from "react";
import classNames from "classnames";
import Modal from "../Modal";
import Input from "../Input";
import Close from "../Icons/CloseIcon";
import { Button } from "../Button";
import { FormWrapper } from "./style";

const AddTask: FC = () => {
  return (
    <Modal>
      <FormWrapper>
        <div className="add-edit-modal"></div>
        <div className=" flex justify-between">
          <span className=" text-[22px] font-bold text-[##121212] mb-[30px] ">Add Task </span>

          <Close />
        </div>
        <Input label="Task" placeholder="Type your task here..." onChange={() => {}} name="title" value="" />
        <div className="modal-priority">
          <span>Priority</span>
          <ul className="priority-buttons">
            {["high", "medium", "low"].map((priority) => (
              <li key={priority} className={classNames(`${priority}-selected`, priority)}>
                {priority}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end mt-[20px]">
          <Button bgColor="black" title="Add" onClick={() => {}} />
        </div>
      </FormWrapper>
    </Modal>
  );
};
export default AddTask;
