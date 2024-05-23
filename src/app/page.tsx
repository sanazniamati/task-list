/** @format */
// styles
import { Container } from "./styles";

// components
import TaskList from "@/components/TaskList";

export default function Home() {
  return (
    <Container>
      <TaskList />
    </Container>
  );
}
