import {useModalWindowContext} from 'context/ModalWindowProvider';
import deviceDetector from 'deviceDetector/deviceDetector';
import {AnimatePresence} from 'framer-motion';
import useRouters from 'routes/useRouters';
import {
  StyledModalWrapper,
  StyledCloseButtton,
  StyledCloseButtonMobile,
  variants,
} from './ModalWindow.styled';
import {IoCloseOutline} from 'react-icons/io5';

interface ModalNewsWindowInterface {
  children: React.ReactNode;
}

const ModalNewsWindow: React.FC<ModalNewsWindowInterface> = ({children}) => {
  const {removeQueryString} = useRouters();
  const {isOpen, handleClose} = useModalWindowContext();
  const {isMobileDevice} = deviceDetector;

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
          {isMobileDevice && (
            <StyledCloseButtonMobile
              animate={'mobileCloseButtonShow'}
              initial={'mobileCloseButtonHide'}
              variants={variants}
              onClick={handleCloseModalWindow}
            >
              <IoCloseOutline size={20} color={'#fff'} />
            </StyledCloseButtonMobile>
          )}
          {!isMobileDevice && (
            <StyledCloseButtton
              onClick={handleCloseModalWindow}
              variants={variants}
              whileHover={'onHowerStart'}
            />
          )}

          {children}
        </StyledModalWrapper>
      )}
    </AnimatePresence>
  );
};

export default ModalNewsWindow;
