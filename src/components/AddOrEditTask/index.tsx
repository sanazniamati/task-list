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
import { Controller, useForm } from "react-hook-form";
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

const AddOrEditTask: FC<IAddOrEditProps> = ({
  addOrEditTaskFunc,
  selectedTask,
}) => {
  const [newTask, setNewTask] = useState<Task>(defultValue);
  const [errors, setErrors] = useState<IErrors>({});
  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      id:
        values.currentModal === "add"
          ? Date.now().toString()
          : selectedTask!.id,
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
  const {
    register,
    formState: { errors: formError },
    handleSubmit,
    watch,
    control,
  } = useForm();

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

  const onSubmit = (value: any) => {
    console.log(value, "Submit");
    alert(JSON.stringify(value));
  };
  console.log(formError.title);
  return (
    <Modal
      show={values.open}
      width={values.width}
      closable={values.closable}
      onClose={func.onClose}
    >
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex justify-between">
          <span className=" text-[22px] font-bold text-[#121212] mb-[30px] ">
            {values.currentModal === "add" ? "Add Task" : "Edit Task"}
          </span>
          <button
            onClick={handleCloseModal}
            className="cursor-pointer select-none"
          >
            <Close />
          </button>
        </div>
        <Controller
          name="title"
          control={control}
          rules={{ required: true, max: 10, min: 3 }}
          render={({ field }) => {
            return (
              <Input
                {...field}
                label="Task"
                placeholder="Type your task here..."
                // onChange={handleInputOnChange}
                // name="title"
                //value={title}
              />
            );
          }}
        />

        {/* <input {...register("title")} /> */}

        {/* {errors.name && <p style={{ color: "red" }}>{errors.name}</p>} */}
        {formError.title && (
          <p style={{ color: "red" }}>{formError.title.message?.toString()}</p>
        )}
        <div className="modal-priority">
          <span>Priority</span>
          <ul className="priority-buttons">
            {(["high", "medium", "low"] as TaskPriorityType[]).map(
              (priority) => (
                <li
                  key={priority}
                  className={classNames(
                    priority === newTask.priority && `${priority}-selected`,
                    priority
                  )}
                  onClick={() => selectPriority(priority)}
                >
                  {priority}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="flex justify-end mt-[20px]">
          <Button
            bgColor="black"
            title="Add"
            onClick={handleAddOrEditTask}
            type="submit"
          >
            {values.currentModal === "add" ? "Add" : "Edit"}
          </Button>
        </div>
      </FormWrapper>
    </Modal>
  );
};
export default AddOrEditTask;
