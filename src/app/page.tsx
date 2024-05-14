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
import { taskList } from "../Data/taskList";
import { useAppContext } from "../context";
import { Task } from "../components/TaskCard/models/task";

interface IObject {
  [key: string]: string | number;
}

export default function Home() {
  // TODO:why type taslkist not asynable to Task[]
  const [tasks, setTasks] = useState<Task[]>(taskList);
  const [selectedTask, setSelectedTask] = useState<Task>();
  // const lastId = tasks[tasks.length - 1].id;

  const { values, dispatch } = useAppContext();

  const handleAddButton = () => {
    dispatch.setOpenModal(true);
    dispatch.setCurrentModal("add");
  };

  const addOrEditTaskFunc = (newTask: Task) => {
    if (values.currentModal === "add") {
      setTasks([newTask, ...tasks]);
      console.log("add btn clieked" + newTask);
    } else {
      const editedTasks = tasks.map((task) => (task.id === selectedTask.id ? newTask : task));
      setTasks(editedTasks);
    }
  };

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
            <TaskCard key={task.id} {...task} selectedTask={selectedTask} />
          ))}
        </div>
      </div>

      <AddOrEditTask addOrEditTaskFunc={addOrEditTaskFunc} selectedTask={selectedTask} />
    </Container>
  );
}
