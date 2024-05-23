/** @format */
// library
import React, { FC } from "react";
import Image from "next/image";

// components
import ProgressBar from "@/components/ProgressBar";
// icons
import DeleteIcon from "../../../public/assets/icons/delete.svg";
import EditIcon from "../../../public/assets/icons/edit.svg";

// style
import { TaskWrapper } from "./style";

// type
import { Task } from "../../components/TaskCard/models/task";

interface TaskProps {
  task: Task;
  onEdit: () => void;
  onDelete: () => void;
  handleUpdateTaskStatus: () => void;
}

const TaskCard: FC<TaskProps> = ({ task, onDelete, onEdit, handleUpdateTaskStatus }) => {
  const { title, priority, status, progress } = task;

  return (
    <TaskWrapper>
      <div className="flex flex-col w-[170px]">
        <span className="task-title">Task</span>
        <span className="task">{title}</span>
      </div>
      <div className="flex flex-col">
        <span className="priority-title">Priority</span>
        <span className={`${priority}-priority priority`}>{priority}</span>
      </div>
      <div className="task-status-wrapper">
        <button className="status" onClick={handleUpdateTaskStatus}>
          {status}
        </button>
      </div>
      <div className="progress">
        <ProgressBar strokeWidth={2} sqSize={24} percentage={progress} />
      </div>
      <div className=" flex">
        <Image src={DeleteIcon} alt="" className="mr-[20px] cursor-pointer" onClick={onDelete} />
        <Image src={EditIcon} alt="" className=" cursor-pointer" onClick={onEdit} />
      </div>
    </TaskWrapper>
  );
};

export default TaskCard;
