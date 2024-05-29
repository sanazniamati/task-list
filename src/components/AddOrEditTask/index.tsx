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
// validation

import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { themeLite } from "@/app/styles/theme";

const dataInputFromUser = z.string().min(8).max(16);
interface IAddOrEditProps {
  addOrEditTaskFunc: (newTask: Task) => void;
  selectedTask: Task | undefined;
}

interface IErrors {
  [errorTitle: string]: string;
}
type InputValue = {
  title: string;
};

const schema = z.object({
  title: z.string().min(1, "min 1").max(20, "max 10"),
});

const defultValue = {
  id: "",
  title: "",
  priority: TaskPriority.Low,
  status: TaskStatus.TODO,
  progress: TaskProgress.TODO,
};

const AddOrEditTask: FC<IAddOrEditProps> = ({ addOrEditTaskFunc, selectedTask }) => {
  const [newTask, setNewTask] = useState<Task>(defultValue);
  const [isDisable, setIsDisable] = useState<boolean>(true);

  const { values, func } = useAppContext();

  const handleCloseModal = () => {
    func.onClose();
  };

  const handleInputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value.trim().length > 0) setIsDisable(false);
    else {
      setIsDisable(true);
    }
    setNewTask({
      ...newTask,
      title: value,
      id: values.currentModal === "add" ? Date.now().toString() : selectedTask!.id,
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
    addOrEditTaskFunc(newTask);
    setNewTask(defultValue);
    handleCloseModal();
  };

  const onSubmit = (value: any) => {
    console.log(value, "Submit");
    alert(JSON.stringify(value));
    // handleAddOrEditTask();
  };

  const { register, handleSubmit, control } = useForm();

  return (
    <Modal show={values.open} width={values.width} closable={values.closable} onClose={func.onClose}>
      <FormWrapper
        onSubmit={
          // (e) => e.preventDefault()
          handleSubmit(onSubmit)
        }
      >
        <div className=" flex justify-between">
          <span className=" text-[22px] font-bold text-[#121212] mb-[30px] ">
            {values.currentModal === "add" ? "Add Task" : "Edit Task"}
          </span>
          <button onClick={handleCloseModal} className="cursor-pointer select-none">
            <Close />
          </button>
        </div>
        {/* <Controller
          name="title"
          control={control}
          render={(field) => {
            return (
              <Input
                {...field}
                label="Task"
                placeholder="Type your task here..."
                onChange={handleInputOnChange}
                // name="title"
                // value={title}
              />
            );
          }}
        /> */}

        {/* <Input
          {...register("title")}
          label="Task"
          placeholder="Type your task here..."
          onChange={handleInputOnChange}
          // name="title"
          // value={title}
        /> */}

        {/* <input {...register("title")} /> */}

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
            {(["high", "medium", "low"] as TaskPriorityType[]).map((priority) => (
              <li
                key={priority}
                className={classNames(priority === newTask.priority && `${priority}-selected`, priority)}
                onClick={() => selectPriority(priority)}
              >
                {priority}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-end mt-[20px]">
          <Button
            bgColor={`${themeLite.tertiary}`}
            title="Add"
            type="submit"
            onClick={handleAddOrEditTask}
            isdisabled={isDisable}
          >
            {values.currentModal === "add" ? "Add" : "Edit"}
          </Button>
        </div>
      </FormWrapper>
    </Modal>
  );
};
export default AddOrEditTask;
