import {
  StyledInput,
  StyledLabel,
  ErrorMessage,
  StyledInputPropsInterface,
} from './Input.styled';

export interface InputPropsInterface extends StyledInputPropsInterface {
  name: string;
  placeholder?: string;
  id?: string;
  value?: string;
  type?: 'text' | 'tel';
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
}

const Input: React.FC<InputPropsInterface> = ({
  label,
  placeholder,
  name,
  id,
  type,
  value,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <StyledLabel>
      <h3>{label}</h3>
      <StyledInput
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        error={error}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error ? <ErrorMessage>{error}</ErrorMessage> : null}
    </StyledLabel>
  );
};

export default Input;
