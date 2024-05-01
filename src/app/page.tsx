/** @format */

// import { useState } from "react";
import { Button } from "./components/Button";
import { Container } from "./styles";
import TaskCard from "./components/TaskCard";
import { taskList } from "./Data/taskList";
import Image from "next/image";
// import { ReactComponent as Add } from "../../public/assets/icons/add.svg";
// import Add from "../../public/assets/icons/add.svg";
import Add from "./components/Icons/AddIcon/index";
// let intialValue=taskList

export default function Home() {
  // const[taskList,setTaskList]=useState(intialValue)
  return (
    <Container>
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Task List</h2>
          {/* <button className="flex justify-between items-center">
              <Image src={Add} alt="" />
              Add Task
            </button> */}

          <Button bgColor={"#713fff;"} title="Add Task" disabled={false} icon={<Add />} onClick={() => {}} />
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
