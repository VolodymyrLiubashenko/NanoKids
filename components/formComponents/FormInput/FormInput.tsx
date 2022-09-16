import {useField} from 'formik';
import Input, {InputPropsInterface} from 'components/Input/Input';

const FormInput: React.FC<InputPropsInterface> = ({
  name,
  label,
  placeholder,
  id,
}) => {
  const [field] = useField(name);
  const {name: fieldName, value, onChange} = field;
  console.log('value: ', value);

  return (
    <Input
      id={id}
      placeholder={placeholder}
      label={label}
      name={fieldName}
      onChange={onChange}
      value={value}
    />
  );
};

export default FormInput;
