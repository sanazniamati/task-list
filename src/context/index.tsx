/** @format */
"use client";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

type CurrentModalType = "add" | "edit" | "";
interface ContextProps {
  values: {
    open: boolean;
    currentModal: CurrentModalType;
    width: number;
    closable: boolean;
    showDeleteModal: boolean;
  };
  dispatch: {
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    setCurrentModal: Dispatch<SetStateAction<CurrentModalType>>;
    setShowDeleteModal: Dispatch<SetStateAction<boolean>>;
  };
  func: {
    onClose: () => void;
  };
}

const AppContext = createContext({
  values: {
    open: false,
    currentModal: "",
    width: 30,
    closable: true,
    showDeleteModal: false,
  },
  dispatch: {
    setOpenModal: (isOpen: boolean) => {},
    setCurrentModal: (current: CurrentModalType) => {},
    setShowDeleteModal: (isShow: boolean) => {},
  },
  func: {
    onClose: () => {},
  },
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentModal, setCurrentModal] = useState<CurrentModalType>("");
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  const closeFunc = () => {
    setOpenModal(false);
    setShowDeleteModal(false);
  };

  const contextValues: ContextProps = {
    values: {
      open: openModal,
      currentModal: currentModal,
      closable: true,
      width: 30,
      showDeleteModal: showDeleteModal,
    },
    dispatch: {
      setOpenModal,
      setCurrentModal,
      setShowDeleteModal,
    },
    func: {
      onClose: closeFunc,
    },
  };

  return <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
