import { useRef, useEffect } from "react";
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
  /**
   * 인풋의 포커싱 여부
   */
  focus: boolean;
}

const StyledInput = styled.input`
  border: 2px solid black;
  background-color: #ffffff;
  border-radius: 3px;
  padding: 0.3rem 0.5rem;
  height: 3rem;
  min-width: 200px;
  width: ${(props) => props.width};
  box-sizing: border-box;
  /* 포커스 시 오토 줌 안되게 만들기 */
  font-size: 16px;
  :focus {
    outline: none;
  }
`;

/**
 * `Input` 컴포넌트는 사용자의 입력값을 제어합니다.
 */
const Input = ({ ...props }: CutstomInputProps) => {
  const inputEl = useRef<HTMLInputElement>(null);
  // focus 옵션 시 포커싱
  useEffect(() => {
    inputEl.current && props.focus && inputEl.current.focus();
  }, [inputEl, props.focus]);
  return <StyledInput {...props} ref={inputEl} />;
};

export default Input;

Input.defaultProps = {
  focus: false,
};
