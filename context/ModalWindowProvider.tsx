import {createContext, useContext, useState} from 'react';

interface initialModalWindowStateInterface {
  isOpen: boolean;
  handleOpenModalWindow: () => void;
  handleCloseModalWindow: () => void;
}

const initialModalWindowState: initialModalWindowStateInterface = {
  isOpen: false,
  handleOpenModalWindow: () => {},
  handleCloseModalWindow: () => {},
};

const ModalWindowContext = createContext(initialModalWindowState);

interface ModalWindowProviderPropsInterface {
  children: React.ReactNode;
}

const ModalWindowProvider: React.FC<ModalWindowProviderPropsInterface> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModalWindow = () => {
    setIsOpen(true);
  };
  const handleCloseModalWindow = () => {
    setIsOpen(false);
  };
  return (
    <ModalWindowContext.Provider
      value={{isOpen, handleOpenModalWindow, handleCloseModalWindow}}
    >
      {children}
    </ModalWindowContext.Provider>
  );
};

export const useModalWindowContext = () => {
  return useContext(ModalWindowContext);
};

export default ModalWindowProvider;
