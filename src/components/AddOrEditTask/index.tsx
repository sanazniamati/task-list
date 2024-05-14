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
import { Task } from "../TaskCard/models/task";
// type NewTask = {
//   id?: string;
//   title: string;
//   priority: "high" | "medium" | "low";
//   status?: TaskStatus;
//   progress?: TaskProgress;
// };

interface IAddOrEditProps {
  addOrEditTaskFunc: (newTask: Task) => void;
  selectedTask: Task | undefined;
}

const AddOrEditTask: FC<IAddOrEditProps> = ({ addOrEditTaskFunc, selectedTask }) => {
  const [newTask, setNewTask] = useState<Task>({
    title: "",
    priority: "low",
    status: TaskStatus.TODO,
    progress: TaskProgress.TODO,
  });

  const { values, func } = useAppContext();

  const handleCloseModal = () => {
    func.onClose();
  };

  const handleAddOrEditTask = () => {
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

  useEffect(() => {
    if (values.currentModal !== "add" && selectedTask) {
      setNewTask(selectedTask);
    }
  }, [selectedTask, values.currentModal]);
  const { title } = newTask;

  return (
    <Modal show={values.open} width={values.width} closable={values.closable} onClose={func.onClose}>
      <FormWrapper
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
          {/* //TODO why onClick */}

          <Button bgColor="black" title="Add" onClick={handleAddOrEditTask}>
            {values.currentModal === "add" ? "Add" : "Edit"}
          </Button>
        </div>
      </FormWrapper>
    </Modal>
  );
};
export default AddOrEditTask;
