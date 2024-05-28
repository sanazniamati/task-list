/** @format */
"use client";
// library
import { useEffect, useState } from "react";

// components
import TaskCard from "../TaskCard";
import AddOrEditTask from "../AddOrEditTask";
import { Button } from "../Button";
import Add from "../Icons/AddIcon/index";

// mock data
import { taskList } from "../../Data/taskList";
import { useAppContext } from "../../context";
import { Task } from "../TaskCard/models/task";
import DeleteTask from "../DeleteTask";
import { TaskStatus } from "../TaskCard/models/TaskStatus";
import { TaskProgress } from "../TaskCard/models/TaskProgress";
import { title } from "process";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    // get the todos from localstorage
    const savedTasks = localStorage.getItem("tasks");

    // if there are todos stored
    if (savedTasks) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTasks);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });
  const [selectedTask, setSelectedTask] = useState<Task>();
  const [selectedTaskId, setSelectedTaskId] = useState<string>("");

  const handleUpdateTaskStatus = (id: string) => {
    const updateStatus = tasks.map((task) => {
      if (task.id === id) {
        switch (task.status) {
          case TaskStatus.TODO:
            return {
              ...task,
              status: TaskStatus.IN_PROGRESS,
              progress: TaskProgress.IN_PROGRESS,
            };
          case TaskStatus.IN_PROGRESS:
            return {
              ...task,
              status: TaskStatus.DONE,
              progress: TaskProgress.DONE,
            };
          case TaskStatus.DONE:
            return {
              ...task,
              status: TaskStatus.TODO,
              progress: TaskProgress.TODO,
            };
          default:
            return task;
        }
      } else {
        return task;
      }
    });
    setTasks(updateStatus);
  };

  const { values, dispatch } = useAppContext();

  const handleAddButton = () => {
    dispatch.setOpenModal(true);
    dispatch.setCurrentModal("add");
  };

  const addOrEditTaskFunc = (newTask: Task) => {
    if (values.currentModal === "add") {
      if (newTask.title !== "") {
        id: tasks.length + 1;
        title: newTask.title.trim();
      }
      setTasks([newTask, ...tasks]);
    } else {
      const editedTasks = tasks.map((task) => (selectedTask && task.id === selectedTask.id ? newTask : task));
      setTasks(editedTasks);
    }
  };

  const handleEditBtn = (task: Task) => {
    dispatch.setOpenModal(true);
    dispatch.setCurrentModal("edit");
    setSelectedTask(task);
  };

  // open DeleteModal
  const handleDeleteButton = (id: string) => {
    dispatch.setShowDeleteModal(true);
    setSelectedTaskId(id);
    handleDeleteTask(selectedTaskId);
  };

  // delete task
  const handleDeleteTask = (id: string) => {
    const deleteTask = tasks.filter((item) => item.id !== id);
    setTasks(deleteTask);
  };

  // useEffect to run once the component mounts
  useEffect(() => {
    // localstorage only support storing strings as keys and values
    // - therefore we cannot store arrays and objects without converting the object
    // into a string first. JSON.stringify will convert the object into a JSON string
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // add the todos as a dependancy because we want to update
    // localstorage anytime the todos state changes
  }, [tasks]);

  return (
    <>
      <div className="page-wrapper">
        <div className="top-title">
          <h2 className="header">Task List</h2>
          <Button bgColor={"#713fff"} disabled={false} icon={<Add />} onClick={handleAddButton}>
            Add Task
          </Button>
        </div>

        <div className="task-container">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              handleUpdateTaskStatus={() => handleUpdateTaskStatus(task.id)}
              onEdit={() => handleEditBtn(task)}
              onDelete={() => handleDeleteButton(task.id)}
            />
          ))}
        </div>
      </div>

      <AddOrEditTask addOrEditTaskFunc={addOrEditTaskFunc} selectedTask={selectedTask} />

      <DeleteTask handleDeleteTask={handleDeleteTask} selectedTaskId={selectedTaskId} />
    </>
  );
}
