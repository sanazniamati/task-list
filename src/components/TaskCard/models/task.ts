/** @format */

import { TaskProgress } from "./TaskProgress";
import { TaskStatus } from "./TaskStatus";

export interface Task {
  id?: string;
  title: string;
  priority: "high" | "medium" | "low";
  status?: TaskStatus;
  progress?: TaskProgress;
}
