/** @format */

import React from "react";
import Modal from "../Modal";
import { useAppContext } from "@/context";
import { Button } from "../Button";
interface DeleteTaskPrpos {
  handleDeleteTask: (id: string) => void;
  selectedTaskId: string;
}

function DeleteTask({ handleDeleteTask, selectedTaskId }: DeleteTaskPrpos) {
  const { values, func, dispatch } = useAppContext();

  const onClickDeleteButton = () => {
    handleDeleteTask(selectedTaskId);
    func.onClose();
  };

  const handleCloseModal = () => {
    dispatch.setShowDeleteModal(false);
    func.onClose();
  };

  return (
    <Modal show={values.showDeleteModal} width={values.width} closable={values.closable} onClose={func.onClose}>
      <p className=" text-[20px] font-bold text-center">Are you sure you want to delete this task?</p>
      <div className=" flex justify-center gap-[25px] mt-[30px]">
        <Button bgColor={"#713fff"} onClick={onClickDeleteButton}>
          Delete
        </Button>
        <Button bgColor={"#b1aeb6"} onClick={handleCloseModal}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
}

export default DeleteTask;
