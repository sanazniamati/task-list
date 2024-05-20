/** @format */

import { TaskProgress } from "./TaskProgress";
import { TaskStatus } from "./TaskStatus";

export enum TaskPriority {
  High = "high",
  Medium = "medium",
  Low = "low",
}

export interface Task {
  // TODO
  id: string;
  title: string;
  priority: "high" | "medium" | "low";
  status?: TaskStatus;
  progress?: TaskProgress;
}
