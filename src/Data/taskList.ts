/** @format */

import { TaskProgress } from "@/components/TaskCard/models/TaskProgress";
import { TaskStatus } from "@/components/TaskCard/models/TaskStatus";
import { Task } from "@/components/TaskCard/models/task";

export const taskList: Task[] = [
  {
    id: "01",
    title: "Go to gym",
    priority: "high",
    status: TaskStatus.TODO,
    progress: TaskProgress.TODO,
  },
  {
    id: "02",
    title: "Read a book",
    priority: "low",
    status: TaskStatus.DONE,
    progress: TaskProgress.DONE,
  },
  {
    id: "03",
    title: "Go to market",
    priority: "medium",
    status: TaskStatus.IN_PROGRESS,
    progress: TaskProgress.IN_PROGRESS,
  },
  // {
  //   id: "04",
  //   title: "Restart Learning Solidworks",
  //   priority: "high",
  //   status: TaskStatus.TODO,
  //   progress: TaskProgress.TODO,
  // },
  // {
  //   id: "05",
  //   title: "change slider to scroll",
  //   priority: "high",
  //   status: TaskStatus.DONE,
  //   progress: TaskProgress.DONE,
  // },
  // {
  //   id: "06",
  //   title: "To publish the article",
  //   priority: "medium",
  //   status: TaskStatus.IN_PROGRESS,
  //   progress: TaskProgress.IN_PROGRESS,
  // },
];
