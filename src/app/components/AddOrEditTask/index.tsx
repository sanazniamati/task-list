/** @format */

// library
import { FC, useEffect, useState } from "react";
import classNames from "classnames";

// components
import Modal from "../Modal";
import Input from "../Input";
import Close from "../Icons/CloseIcon";
import { Button } from "../Button";

// styles
import { FormWrapper } from "./style";
import { useAppContext } from "@/app/context";

interface IAddOrEditProps {
  currentModal: any;
  // newRecordId?: number | undefined;
  // AddOrEditTask: (tsk: Task) => void;
}

const AddOrEditTask: FC<IAddOrEditProps> = ({ currentModal }) => {
  // const [showModal, setShowModal] = useState<boolean>(open);
  // useEffect(() => {
  //   setShowModal(open);
  // }, [open]);

  // if (!showModal) {
  //   return <></>;
  // }
  const { values, func } = useAppContext();
  const handleCloseModal = () => {
    func.onClose();
  };
  return (
    <Modal show={values.open} width={values.width} closable={values.closable} onClose={func.onClose}>
      <FormWrapper>
        <div className=" flex justify-between">
          <span className=" text-[22px] font-bold text-[#121212] mb-[30px] ">
            {currentModal === "add" ? "Add Task" : "Edit Task"}
          </span>
          <button onClick={handleCloseModal} className="cursor-pointer select-none">
            <Close />
          </button>
        </div>
        <Input label="Task" placeholder="Type your task here..." onChange={() => {}} name="title" value="" />
        <div className="modal-priority">
          <span>Priority</span>
          <ul className="priority-buttons">
            {["high", "medium", "low"].map((priority) => (
              <li key={priority} className={` ${priority}-selected ${priority}`}>
                {priority}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end mt-[20px]">
          <Button bgColor="black" title="Add" onClick={() => {}}>
            {currentModal === "add" ? "Add" : "Edit"}
          </Button>
        </div>
      </FormWrapper>
    </Modal>
  );
};
export default AddOrEditTask;
