import styled from "styled-components";

export interface CutstomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled.input`
  border: 1px solid #e0e0e0;
  background-color: #ffffff;
  border-radius: 3px;
  padding: 0.8rem 0.5rem;
  min-width: 200px;
  :focus {
    outline: none;
  }
`;

const Input = (props: CutstomInputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
