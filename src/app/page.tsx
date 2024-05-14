/** @format */
"use client";
// library
import { useState } from "react";

// styles
import { Container } from "./styles";

// components
import TaskCard from "../components/TaskCard";
import AddOrEditTask from "../components/AddOrEditTask";
import { Button } from "../components/Button";
import Add from "../components/Icons/AddIcon/index";

// mock data
import { taskList } from "./Data/taskList";
import { useAppContext } from "./context";
import { Task } from "../components/TaskCard/models/task";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(taskList);
  const [currentModal, setCurrentModal] = useState<"add" | "edit" | "">("");
  // const lastId = tasks[tasks.length - 1].id;
  const [selectedTask, setSelectedTask] = useState<any | {}>({});

  const { dispatch } = useAppContext();

  const handleAddButton = () => {
    dispatch.setOpenModal(true);
    setCurrentModal("add");
    console.log("currentModal :" + currentModal);
  };

  const addOrEditTask = (newTask: Task) => {
    if (currentModal === "add") {
      setTasks([newTask, ...tasks]);
      console.log("add btn clieked" + newTask);
    } else {
      return;
    }
  };

  // const onChangeEditModal = () => {
  //   setCurrentModal("edit");
  //   console.log("currentModal :" + currentModal);
  // };

  return (
    <Container>
      <div className="page-wrapper">
        <div className="top-title">
          <h2 className="header">Task List</h2>
          <Button bgColor={"#713fff"} disabled={false} icon={<Add />} onClick={handleAddButton}>
            Add Task
          </Button>
        </div>

        <div className="task-container">
          {tasks.map((task) => (
            <TaskCard key={task.id} {...task} setCurrentModal={setCurrentModal} />
          ))}
        </div>
      </div>

      <AddOrEditTask currentModal={currentModal} addOrEditTask={addOrEditTask} selectedTask={selectedTask} />
    </Container>
  );
}
