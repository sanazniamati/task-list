/** @format */

// library
import { ChangeEvent, FC, MouseEventHandler, useEffect, useState } from "react";

// components
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Close from "@/components/Icons/CloseIcon";
import { Button } from "../Button";

// styles
import { FormWrapper } from "./style";
import { useAppContext } from "@/context";
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
  addOrEditTaskFunc: (newTask: NewTask) => void;
  selectedTask: NewTask;
}

const AddOrEditTask: FC<IAddOrEditProps> = ({ addOrEditTaskFunc, selectedTask }) => {
  const [newTask, setNewTask] = useState<NewTask>({
    title: "",
    priority: "low",
    status: TaskStatus.TODO,
    progress: TaskProgress.TODO,
  });

  // useEffect(() => {
  //   if (values.currentModal !== "add") {
  //     setNewTask({
  //       id: selectedTask.id,
  //       title: selectedTask.title,
  //       priority: selectedTask.priority,
  //       status: selectedTask.status,
  //       progress: selectedTask.progress,
  //     });
  //   }
  // }, []);

  const { values, func } = useAppContext();

  const handleCloseModal = () => {
    func.onClose();
  };

  const handleAddOrEditTask = (e: MouseEventHandler<HTMLButtonElement>) => {
    // e.preventDefault();
    addOrEditTaskFunc(newTask);
    handleCloseModal();
  };

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNewTask({
      ...newTask,
      title: value,
      id: values.currentModal === "add" ? Date.now().toString() : selectedTask.id,
    });

    console.log(newTask);
  };

  const { title } = newTask;

  return (
    <Modal show={values.open} width={values.width} closable={values.closable} onClose={func.onClose}>
      <FormWrapper>
        <div className=" flex justify-between">
          <span className=" text-[22px] font-bold text-[#121212] mb-[30px] ">
            {values.currentModal === "add" ? "Add Task" : "Edit Task"}
          </span>
          <button onClick={handleCloseModal} className="cursor-pointer select-none">
            <Close />
          </button>
        </div>
        <Input
          label="Task"
          placeholder="Type your task here..."
          onChange={handleInputOnChange}
          name="title"
          value={title}
        />
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
            {values.currentModal === "add" ? "Add" : "Edit"}
          </Button>
        </div>
      </FormWrapper>
    </Modal>
  );
};
export default AddOrEditTask;
