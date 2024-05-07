/** @format */
"use client";
// library
import { useState } from "react";

// styles
import { Container } from "./styles";

// components
import TaskCard from "./components/TaskCard";
import AddTask from "./components/AddTask";
import { Button } from "./components/Button";
import Add from "./components/Icons/AddIcon/index";
import Image from "next/image";
// mock data
import { taskList } from "./Data/taskList";

export default function Home() {
  const [showAddModal, setAddShowModal] = useState<boolean>(false);

  const handleShowAddModal = () => {
    setAddShowModal(!showAddModal);
    console.log(showAddModal);
  };

  return (
    <Container>
      <div className="page-wrapper">
        <div className="top-title">
          <h2 className="header">Task List</h2>
          <Button
            bgColor={"#713fff"}
            disabled={true}
            icon={<Add />}
            onClick={handleShowAddModal}
          >
            Add Task
          </Button>
          {showAddModal && <AddTask />}
        </div>
        <div>
          <Image
            src="/assets/icons/add.svg"
            alt="add"
            fill={true}
            className={"img"}
          />
        </div>
        <div className="task-container">
          {taskList.map((task) => (
            <TaskCard key={task.id} {...task} />
          ))}
        </div>
      </div>
    </Container>
  );
}
