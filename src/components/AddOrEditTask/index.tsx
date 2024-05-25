/** @format */

// library
import { ChangeEvent, FC, useEffect, useState } from "react";

// components
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import Close from "@/components/Icons/CloseIcon";
import { Button } from "../Button";

// styles
import { FormWrapper } from "./style";
import { useAppContext } from "@/context";
import { TaskStatus } from "@/components/TaskCard/models/TaskStatus";
import { Task, TaskPriority, TaskPriorityType } from "../TaskCard/models/task";
import classNames from "classnames";
import { TaskProgress } from "../TaskCard/models/TaskProgress";

interface IAddOrEditProps {
  addOrEditTaskFunc: (newTask: Task) => void;
  selectedTask: Task | undefined;
}

interface IErrors {
  [errorTitle: string]: string;
}

const defultValue = {
  id: "",
  title: "",
  priority: TaskPriority.Low,
  status: TaskStatus.TODO,
  progress: TaskProgress.TODO,
};

const AddOrEditTask: FC<IAddOrEditProps> = ({ addOrEditTaskFunc, selectedTask }) => {
  const [newTask, setNewTask] = useState<Task>(defultValue);
  const [errors, setErrors] = useState<IErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [newTask.title]);

  // Validate form
  const validateForm = () => {
    let errors: IErrors = {};

    if (!newTask.title) {
      errors.name = "task's min length is 3 charecters";
    }

    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const { values, func } = useAppContext();

  const handleCloseModal = () => {
    func.onClose();
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
    if (values.currentModal == "edit" && selectedTask) {
      setNewTask(selectedTask);
    }
  }, [selectedTask, values.currentModal]);

  const selectPriority = (priority: TaskPriorityType) => {
    setNewTask((prevTasks) => ({ ...prevTasks, priority: priority }));
  };

  const { title } = newTask;

  const handleAddOrEditTask = () => {
    if (isFormValid) {
      addOrEditTaskFunc(newTask);
      setNewTask(defultValue);
      handleCloseModal();
    } else {
      console.log("Form has errors. Please correct them.");
      return;
    }
  };

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
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        <div className="modal-priority">
          <span>Priority</span>
          <ul className="priority-buttons">
            {["high", "medium", "low"].map((priority) => (
              <li
                key={priority}
                // className={`${priority === newTask.priority && }`,priority}
                className={classNames(priority === newTask.priority && `${priority}-selected`, priority)}
                onClick={() => selectPriority(priority)}
              >
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
