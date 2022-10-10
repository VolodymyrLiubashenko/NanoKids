import {createContext, useContext, useEffect, useState} from 'react';
import useRouters from 'routes/useRouters';

interface initialModalWindowStateInterface {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const initialModalWindowState: initialModalWindowStateInterface = {
  isOpen: false,
  handleOpen: () => {},
  handleClose: () => {},
};

const ModalWindowContext = createContext(initialModalWindowState);

interface ModalWindowProviderPropsInterface {
  children: React.ReactNode;
}

const ModalWindowProvider: React.FC<ModalWindowProviderPropsInterface> = ({
  children,
}) => {
  const {query} = useRouters();
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   setIsOpen(true);
  // }, [query.newsId]);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <ModalWindowContext.Provider value={{isOpen, handleOpen, handleClose}}>
      {children}
    </ModalWindowContext.Provider>
  );
};

export const useModalWindowContext = () => {
  return useContext(ModalWindowContext);
};

export default ModalWindowProvider;
