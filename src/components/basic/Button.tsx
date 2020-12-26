import React from "react";
import styled from "styled-components";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼 텍스트
   */
  label: string;
  /**
   * 버튼 배경색
   */
  backgroundColor?: string;
}

const StyledButton = styled.button<CustomButtonProps>`
  background-color: ${(props) => props.backgroundColor || "#35baf6"};

  border: none;
  border-radius: 5px;
  width: 150px;
  padding: 0.6rem 0.5rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  opacity: 0.8;
  transition-duration: 0.3s;

  :focus {
    outline: none;
  }

  :hover {
    opacity: 1;
  }
`;

const Button = (props: CustomButtonProps) => {
  return <StyledButton {...props}>{props.label}</StyledButton>;
};

export default Button;
