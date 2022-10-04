import {withFormik, FormikProps} from 'formik';
import Button from 'components/Button/Button';
import FormInput from 'components/formComponents/FormInput/FormInput';
import {StyledForm, StyledFormMessage, variants} from './ContactForm.styled';
import validationSchema from './validation';
import {ErrorMessage} from 'components/Input/Input.styled';
import {UseMutateFunction} from '@tanstack/react-query';
import {useEffect} from 'react';
import Spinner from 'components/Spinner/Spinner';

export interface InitialValuesInterface {
  parrentName: string;
  childAge: string;
  phoneNumber: string;
}

const initialValue: InitialValuesInterface = {
  parrentName: '',
  childAge: '',
  phoneNumber: '+380',
};

interface ContactFormPropsInterface {
  sent: UseMutateFunction<
    Response | undefined,
    unknown,
    InitialValuesInterface,
    unknown
  >;
  response: Response | undefined;
  isLoading: boolean;
}

const ContactForm: React.FC<
  ContactFormPropsInterface & FormikProps<InitialValuesInterface>
> = ({isValid, status, setStatus, response, isLoading}) => {
  useEffect(() => {
    setStatus(response?.ok);
  }, [response, setStatus]);

  return (
    <StyledForm
      onClick={(e) => e.stopPropagation()}
      variants={variants}
      animate={'visibleForm'}
      initial={'invisibleForm'}
      exit={'invisibleForm'}
    >
      {status === true ? (
        <StyledFormMessage>
          Дякуємо за Вашу заявку, менеджер в найближчий час з Вами зв’яжеться!
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
          <Button
            title={isLoading ? <Spinner /> : 'Відправити'}
            type="submit"
            disabled={!isValid}
          />
        </>
      )}
    </StyledForm>
  );
};

export default withFormik<ContactFormPropsInterface, InitialValuesInterface>({
  mapPropsToValues: () => initialValue,
  handleSubmit: (values, {props}) => {
    props.sent(values);
  },
  validationSchema,
})(ContactForm);
