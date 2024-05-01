/** @format */
"use client";
import { useState } from "react";
import { Button } from "./components/Button";
import { Container } from "./styles";
import TaskCard from "./components/TaskCard";
import { taskList } from "./Data/taskList";
import Image from "next/image";
// import { ReactComponent as Add } from "../../public/assets/icons/add.svg";
// import Add from "../../public/assets/icons/add.svg";
import Add from "./components/Icons/AddIcon/index";
import AddTask from "./components/AddTask.tsx";

// let intialValue=taskList

export default function Home() {
  const [showAddModal, setAddShowModal] = useState<boolean>(false);

  const handleShowAddModal = () => {
    setAddShowModal((prev) => !prev);
    console.log(showAddModal);
  };
  // const[taskList,setTaskList]=useState(intialValue)
  return (
    <Container>
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Task List</h2>
          <Button bgColor={"#713fff;"} title="Add Task" disabled={false} icon={<Add />} onClick={handleShowAddModal} />
          {showAddModal && <AddTask />}
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
