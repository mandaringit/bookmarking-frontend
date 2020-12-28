import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼 안의 내용
   */
  children: React.ReactNode;
  /**
   * 클릭 시 호출할 콜백 함수
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * 버튼의 생김새를 설정
   */
  theme: "primary" | "secondary" | "tertiary";
  /**
   * 버튼의 크기를 설정
   */
  size: "small" | "medium" | "large";
  /**
   * 버튼을 비활성화
   */
  disabled?: boolean;
  /**
   * 버튼의 너비를 임의로 설정
   */
  width?: string | number;
}

/**
 * `Button` 컴포넌트는 어떠한 작업을 트리거할 때 사용합니다.
 */
const Button = ({ children, onClick, ...props }: CustomButtonProps) => {
  return (
    <StyledButton {...props} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  theme: "primary",
  size: "small",
};

const StyledButton = styled.button<CustomButtonProps>`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  font-weight: bold;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 1rem;
  transition-duration: 0.3s;
  width: ${(props) => props.width};
  ${(props) => themes[props.theme]}
  ${(props) => size[props.size]}

  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

const themes: { [key: string]: FlattenSimpleInterpolation } = {
  primary: css`
    background: #ef6c00;
    color: white;
    &:disabled {
      background: #ffe0b2;
    }
  `,
  secondary: css`
    background: #e9ecef;
    color: #343a40;
    &:disabled {
      color: #c6d3e1;
    }
  `,
  tertiary: css`
    background: none;
    color: #ef6c00;
    &:disabled {
      color: #ffe0b2;
    }
  `,
};

const size: { [key: string]: FlattenSimpleInterpolation } = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  large: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
};

export default Button;
