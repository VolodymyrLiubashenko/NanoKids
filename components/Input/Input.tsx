import {StyledInput, StyledLabel} from './Input.styled';

export interface InputPropsInterface {
  name: string;
  placeholder?: string;
  id?: string;
  value?: string;
  type?: 'text';
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputPropsInterface> = ({
  label,
  placeholder,
  onChange,
  name,
  id,
  type,
  value,
}) => {
  return (
    <StyledLabel>
      <h3>{label}</h3>
      <StyledInput
        name={name}
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </StyledLabel>
  );
};

export default Input;
