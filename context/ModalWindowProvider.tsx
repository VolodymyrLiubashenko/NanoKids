import {createContext, useContext, useEffect, useState} from 'react';
import useRouters from 'routes/useRouters';

interface initialTeamInterface {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

const initialModalWindowState: initialTeamInterface = {
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
  const [isOpen, setIsOpen] = useState(!!query.newsId);
  useEffect(() => {
    setIsOpen(!!query.newsId);
  }, [query.newsId]);
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
