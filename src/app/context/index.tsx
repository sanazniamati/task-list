/** @format */
"use client";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface ContextProps {
  values: {
    open: boolean;
    // currentModal: string;
    width: number;
    closable: boolean;
  };
  dispatch: {
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    // TODO:what is type setStateAction ?
    // setCurrentModal:Dispatch<SetStateAction<string>>
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
  },
  dispatch: {
    setOpenModal: (isOpen: boolean) => {},
    setCurrentModal: (current: string) => {},
  },
  func: {
    onClose: () => {},
  },
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [currentModal, setCurrentModal] = useState<"add" | "edit" | "">("");

  const closeFunc = () => {
    setOpenModal(false);
  };

  const contextValues: ContextProps = {
    values: {
      open: openModal,
      // currentModal:currentModal,
      closable: true,
      width: 30,
    },
    dispatch: {
      setOpenModal,
      // setCurrentModal,
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
