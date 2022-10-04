import * as yup from 'yup';
import {TestFunction} from 'yup';

const checkAge: TestFunction<string | undefined, Object> = function (value) {
  if (Number(value) > 18) {
    return false;
  }
  return true;
};

const validationSchema = yup.object().shape({
  parrentName: yup
    .string()
    .required('Введіть ім’я дитини')
    .matches(/^[a-zA-Z]+$/, 'Ім’я повинно складатися тільки з букв')
    .max(30, 'Ім’я надто довге')
    .min(2, 'Ім’я надто коротке'),
  childAge: yup
    .string()
    .required('Введіть вік дитини')
    .matches(/\d/, 'Вік дитини цифрами')
    .min(1, 'Введіть вік дитини')
    .test('Check age', 'Дитина повинна бути молодша 18 років ', checkAge)
    .max(2, 'Дитина повинна бути молодша 18 років'),
  phoneNumber: yup
    .string()
    .required(
      'Номер телефону повинен складатися з 9 цифр, після коду України +380'
    )
    .matches(
      /\+380\d{9}/,
      'Номер телефону повинен складатися з 9 цифр, після коду України +380'
    ),
});

export default validationSchema;
