import React, { useState } from "react";
import styled from "styled-components";
import Dialog from "../../components/molecules/Dialog";
import { createFragmentThunk } from "../../slices/reportsSlice";
import { useAppDispatch } from "../../store";
import { BasicReport } from "../../types/entity";
import { VisibleType } from "./ReportDetail";

interface FragmentAddDialogProps {
  report: BasicReport;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<VisibleType>>;
}

const FragmentAddDialog = ({
  report,
  visible,
  setVisible,
}: FragmentAddDialogProps) => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState<string>("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setText(e.target.value);

  const onCancelHandler = () => {
    setText("");
    setVisible(null);
  };

  const onConfirmHandler = async () => {
    const { meta } = await dispatch(
      createFragmentThunk({ reportId: report.id, text })
    );
    if (meta.requestStatus === "fulfilled") {
      setText("");
      setVisible(null);
    }
  };

  return (
    <Dialog
      cancellable
      visible={visible}
      confirmText='추가'
      onConfirm={onConfirmHandler}
      onCancel={onCancelHandler}
    >
      <TextArea
        value={text}
        onChange={onChangeHandler}
        placeholder='책을 읽고 생각한 내용을 메모해보세요.'
      />
    </Dialog>
  );
};

export default FragmentAddDialog;

const TextArea = styled.textarea`
  box-sizing: border-box;
  height: 400px;
  width: 100%;
  border: none;
  resize: none;
  :focus {
    outline: none;
  }
`;
