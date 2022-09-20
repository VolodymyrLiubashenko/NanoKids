import {useField} from 'formik';
import Input, {InputPropsInterface} from 'components/Input/Input';

const FormInput: React.FC<InputPropsInterface> = ({
  name,
  label,
  placeholder,
  id,
  type,
}) => {
  const [field, meta, helpers] = useField(name);
  const {name: fieldName, value, onChange} = field;
  const {touched, error} = meta;
  const {setTouched} = helpers;

  return (
    <Input
      id={id}
      placeholder={placeholder}
      label={label}
      name={fieldName}
      value={value}
      type={type}
      error={touched && error}
      onBlur={() => {
        setTouched(true, true);
      }}
      onChange={onChange}
    />
  );
};

export default FormInput;
