import React from "react";
import styled from "styled-components";

export interface ButtonGroupProps {
  children: React.ReactNode;
  /**
   * 버튼 그룹의 정렬 방향
   */
  align?: "start" | "center" | "flex-end";
}

const ButtonGroup = ({ children, ...props }: ButtonGroupProps) => {
  return <Container {...props}>{children}</Container>;
};

export default ButtonGroup;

ButtonGroup.defaultProps = {
  align: "start",
};

const Container = styled.div<ButtonGroupProps>`
  display: flex;
  justify-content: ${(props) => props.align};
  button + button {
    margin-left: 0.5rem;
  }
`;
