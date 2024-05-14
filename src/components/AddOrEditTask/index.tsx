/** @format */

// library
import { ChangeEvent, FC, useEffect, useState } from "react";
import classNames from "classnames";

// components
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Close from "@/components/Icons/CloseIcon";
import { Button } from "../Button";

// styles
import { FormWrapper } from "./style";
import { useAppContext } from "@/app/context";
import { TaskStatus } from "@/components/TaskCard/models/TaskStatus";
import { TaskProgress } from "@/components/TaskCard/models/TaskProgress";

type NewTask = {
  id?: string;
  title: string;
  priority: "high" | "medium" | "low";
  status?: TaskStatus;
  progress?: TaskProgress;
};

interface IAddOrEditProps {
  currentModal: "add" | "edit" | "";
  addEditTask: (newTask: NewTask) => void;
  selectedTask: NewTask;
  newRecordId?: number | undefined;
}

const AddOrEditTask: FC<IAddOrEditProps> = ({ currentModal, addEditTask, selectedTask }) => {
  const [newTask, setNewTask] = useState<NewTask>({
    title: "",
    priority: "low",
    status: TaskStatus.TODO,
    progress: TaskProgress.TODO,
  });
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

  const handleAddOrEditTask = () => {
    addEditTask(newTask);
    console.log("add task or edit task");
    handleCloseModal();
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewTask(
      //   (prevState) => ({
      //   ...prevState,
      //   title: value,
      //   id: currentModal === "add" ? Date.now().toString() : selectedTask.id,
      // })
      { ...newTask, title: value, id: currentModal === "add" ? Date.now().toString() : selectedTask.id }
    );
    console.log(newTask);
  };

  const { title } = newTask;

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
        <Input label="Task" placeholder="Type your task here..." onChange={handleOnChange} name="title" value={title} />
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
          <Button bgColor="black" title="Add" onClick={handleAddOrEditTask}>
            {currentModal === "add" ? "Add" : "Edit"}
          </Button>
        </div>
      </FormWrapper>
    </Modal>
  );
};
export default AddOrEditTask;
