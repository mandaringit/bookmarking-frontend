import React from "react";
import styled, { css } from "styled-components";
import Button from "../atoms/Button";
import { useTransition, animated } from "react-spring";
import ButtonGroup from "./ButtonGroup";

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
  const fadeTransition = useTransition(visible, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const slideUpTransition = useTransition(visible, null, {
    from: {
      transform: `translateY(200px) scale(0.8)`,
      opacity: 0,
    },
    enter: {
      transform: `translateY(0px) scale(1)`,
      opacity: 1,
    },
    leave: {
      transform: `translateY(200px) scale(0.8)`,
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 15,
    },
  });

  return (
    <>
      {fadeTransition.map(({ item, key, props }) =>
        item ? <DarkLayer key={key} style={props} /> : null
      )}
      {slideUpTransition.map(({ item, key, props }) =>
        item ? (
          <WhiteBoxWrapper key={key} style={props}>
            <WhiteBox>
              {title && <h3>{title}</h3>}
              {description && <p>{description}</p>}
              {children}
              <ButtonGroup align='flex-end'>
                {cancellable && (
                  <Button onClick={onCancel}>{cancelText}</Button>
                )}
                <Button onClick={onConfirm}>{confirmText}</Button>
              </ButtonGroup>
            </WhiteBox>
          </WhiteBoxWrapper>
        ) : null
      )}
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

const DarkLayer = styled(animated.div)`
  ${fullScreen}
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
`;

const WhiteBoxWrapper = styled(animated.div)`
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
`;
