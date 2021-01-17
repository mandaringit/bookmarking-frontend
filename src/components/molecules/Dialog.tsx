import React from "react";
import styled, { css } from "styled-components";
import Button from "../atoms/Button";

export interface DialogProps {
  visible: boolean;
  children?: React.ReactNode;
  title?: string;
  description?: string;
  cancelText: string;
  confirmText: string;
  cancellable: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
}

const Dialog = ({
  children,
  visible,
  title,
  description,
  cancelText,
  confirmText,
  cancellable,
  onCancel,
  onConfirm,
}: DialogProps) => {
  if (!visible) return null;

  return (
    <>
      <DarkLayer />
      <WhiteBoxWrapper>
        <WhiteBox>
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
          {children}
          <div className='button__group'>
            {cancellable && <Button onClick={onCancel}>{cancelText}</Button>}
            <Button onClick={onConfirm}>{confirmText}</Button>
          </div>
        </WhiteBox>
      </WhiteBoxWrapper>
    </>
  );
};

Dialog.defaultProps = {
  cancelText: "취소",
  confirmText: "확인",
};

export default Dialog;

const fullScreen = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const DarkLayer = styled.div`
  ${fullScreen}
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

const WhiteBoxWrapper = styled.div`
  ${fullScreen}
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  box-sizing: border-box;
  width: 25rem;
  background: white;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 2rem;
  h3 {
    margin: 0;
  }

  p {
    color: grey;
  }

  .button__group {
    display: flex;
    justify-content: flex-end;
    button + button {
      margin-left: 0.5rem;
    }
  }
`;
