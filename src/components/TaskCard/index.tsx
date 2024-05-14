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

// context
import { useAppContext } from "@/context";

interface TaskProps {
  id: string;
  title: string;
  priority: string;
  status: string;
  progress: number;
  setCurrentModal: any;
}

const TaskCard: FC<TaskProps> = ({ title, priority, status, progress, setCurrentModal }) => {
  const { dispatch } = useAppContext();

  const handleEditBtn = () => {
    dispatch.setOpenModal(true);
    setCurrentModal("edit");
  };

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
        <button className="status">{status}</button>
      </div>
      <div className="progress">
        <ProgressBar strokeWidth={2} sqSize={24} percentage={progress} />
      </div>
      <div className=" flex">
        <Image src={DeleteIcon} alt="" className="mr-[20px] cursor-pointer" />
        <Image src={EditIcon} alt="" className=" cursor-pointer" onClick={handleEditBtn} />
      </div>
    </TaskWrapper>
  );
};

export default TaskCard;
