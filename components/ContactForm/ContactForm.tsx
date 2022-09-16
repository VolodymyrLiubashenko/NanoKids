import {withFormik} from 'formik';
import Button from 'components/Button/Button';
import FormInput from 'components/formComponents/FormInput/FormInput';
import {StyledForm, StyledFormWrapper, variants} from './ContactForm.styled';
import {AnimatePresence} from 'framer-motion';

interface initialValuesInterface {
  parrentName: string;
  childAge: string;
  phoneNumber: string;
}

const initialValue: initialValuesInterface = {
  parrentName: '',
  childAge: '',
  phoneNumber: '',
};

interface ContactFormPropsInterface {
  isOpen: Boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactForm: React.FC<ContactFormPropsInterface> = ({
  isOpen,
  setIsOpen,
}) => {
  const toggleContactForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <StyledFormWrapper
          variants={variants}
          animate={'showModal'}
          initial={'hideModal'}
          exit={'hideModal'}
          onClick={toggleContactForm}
        >
          <StyledForm
            onClick={(e) => e.stopPropagation()}
            variants={variants}
            animate={'visibleForm'}
            initial={'invisibleForm'}
            exit={'invisibleForm'}
          >
            <FormInput
              label="Ваше ім'я"
              name="parrentName"
              placeholder="Enter your name"
            />
            <FormInput
              label="Скільки років дитині?"
              name="childAge"
              placeholder="Enter child age"
            />
            <FormInput
              label="Ваш номер телефону"
              name="phoneNumber"
              placeholder="Enter your phone number"
            />
            <Button title="Відправити" type="submit" />
          </StyledForm>
        </StyledFormWrapper>
      )}
    </AnimatePresence>
  );
};

export default withFormik<ContactFormPropsInterface, initialValuesInterface>({
  mapPropsToValues: () => initialValue,
  handleSubmit: (values) => {
    console.log(values);
  },
})(ContactForm);
