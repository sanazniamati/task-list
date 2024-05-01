/** @format */

import { Button } from "./components/Button";
import { Container } from "./styles";
// import Add from '../../public/assets/icons/add.svg'

export default function Home() {
  return (
    <Container>
      <div className="page-wrapper">
        <div className="top-title">
          <h2>Task List</h2>
          <Button bgColor={"#713fff;"} title="Add" disabled={true} />
        </div>
        <div className="task-container">task-container</div>
      </div>
    </Container>
  );
}
