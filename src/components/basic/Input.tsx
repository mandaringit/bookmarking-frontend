import styled from "styled-components";

export interface CutstomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled.input`
  border: none;
  background-color: #fafafa;
  border-radius: 3px;
  padding: 0.8rem 1rem;
  :focus {
    outline: none;
  }
`;

const Input = (props: CutstomInputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
