import {withFormik, FormikProps} from 'formik';
import Button from 'components/Button/Button';
import FormInput from 'components/formComponents/FormInput/FormInput';
import {
  StyledForm,
  StyledFormWrapper,
  StyledFormMessage,
  variants,
} from './ContactForm.styled';
import {AnimatePresence} from 'framer-motion';
import validationSchema from './validation';
import {ErrorMessage} from 'components/Input/Input.styled';

interface initialValuesInterface {
  parrentName: string;
  childAge: string;
  phoneNumber: string;
}

const initialValue: initialValuesInterface = {
  parrentName: '',
  childAge: '',
  phoneNumber: '+380',
};

interface ContactFormPropsInterface {
  isOpen: Boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const sent = async (
  values: initialValuesInterface,
  setStatus: (status?: any) => void
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/api/contact-form`,
      {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {'Content-type': 'aplication/json'},
      }
    );
    setStatus(res.ok);
  } catch (error) {}
};

const ContactForm: React.FC<
  ContactFormPropsInterface & FormikProps<initialValuesInterface>
> = ({isOpen, setIsOpen, isValid, status}) => {
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
            {status === true ? (
              <StyledFormMessage>
                Дякуємо за Вашу заявку, менеджер в найближчий час з Вами
                зв’яжеться!
              </StyledFormMessage>
            ) : (
              <>
                {status === false ? (
                  <ErrorMessage>
                    Нажаль сервер недоступний, будь ласка спробуйте пізніше
                  </ErrorMessage>
                ) : null}
                <FormInput
                  label="Ваше ім'я"
                  name="parrentName"
                  placeholder="Введіть ваше ім'я"
                />
                <FormInput
                  label="Скільки років дитині?"
                  name="childAge"
                  placeholder="Введіть вік дитини"
                />
                <FormInput
                  label="Ваш номер телефону"
                  name="phoneNumber"
                  placeholder="Введіть Ваш номер телефону"
                  type="tel"
                />
                <Button title="Відправити" type="submit" disabled={!isValid} />
              </>
            )}
          </StyledForm>
        </StyledFormWrapper>
      )}
    </AnimatePresence>
  );
};

export default withFormik<ContactFormPropsInterface, initialValuesInterface>({
  mapPropsToValues: () => initialValue,
  handleSubmit: (values, {setStatus}) => {
    sent(values, setStatus);
  },
  validationSchema,
})(ContactForm);
