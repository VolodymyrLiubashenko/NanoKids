import {useModalWindowContext} from 'context/ModalWindowProvider';
import {AnimatePresence} from 'framer-motion';
import useRouters from 'routes/useRouters';
import {
  StyledModalWrapper,
  StyledCloseButtton,
  variants,
} from './ModalWindow.styled';

interface ModalNewsWindowInterface {
  children: React.ReactNode;
}

const ModalNewsWindow: React.FC<ModalNewsWindowInterface> = ({children}) => {
  const {removeQueryString} = useRouters();
  const {isOpen, handleClose} = useModalWindowContext();

  const handleCloseModalWindow = () => {
    removeQueryString();
    document.body.classList.remove('lock');
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <StyledModalWrapper
          variants={variants}
          animate={'shown'}
          initial={'closed'}
          exit={'closed'}
        >
          <StyledCloseButtton
            onClick={handleCloseModalWindow}
            variants={variants}
            whileHover={'onHowerStart'}
          />
          {children}
        </StyledModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default ModalNewsWindow;
