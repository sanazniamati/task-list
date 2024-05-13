/** @format */
"use client";
import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";

interface ContextProps {
  values: {
    open: boolean;
    width: number;
    closable: boolean;
  };
  dispatch: {
    setOpenModal: Dispatch<SetStateAction<boolean>>;
  };
  func: {
    onClose: () => void;
  };
}

const AppContext = createContext({
  values: {
    open: false,
    width: 30,
    closable: true,
  },
  dispatch: {
    setOpenModal: (isOpen: boolean) => {},
  },
  func: {
    onClose: () => {},
  },
});

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const closeFunc = () => {
    setOpenModal(false);
  };

  const contextValues: ContextProps = {
    values: {
      open: openModal,
      closable: true,
      width: 30,
    },
    dispatch: {
      setOpenModal,
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
