import styled from "styled-components";

export interface CutstomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * 인풋의 값
   */
  value?: string;
  /**
   * 인풋 핸들러
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * 인풋의 너비
   */
  width?: string | number;
}

const StyledInput = styled.input`
  border: 2px solid black;
  background-color: #ffffff;
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
  height: 2.5rem;
  min-width: 200px;
  width: ${(props) => props.width};
  box-sizing: border-box;
  :focus {
    outline: none;
  }
`;

/**
 * `Input` 컴포넌트는 사용자의 입력값을 제어합니다.
 */
const Input = ({ ...props }: CutstomInputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
