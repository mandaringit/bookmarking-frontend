import React, { useState } from "react";
import styled from "styled-components";
import Input from "../../components/atoms/Input";
import Dialog from "../../components/molecules/Dialog";
import { updateReportTitleThunk } from "../../slices/reportsSlice";
import { useAppDispatch } from "../../store";
import { BasicReport } from "../../types/entity";
import { VisibleType } from "./ReportDetail";

interface ReportUpdateDialogProps {
  visible: VisibleType;
  report: BasicReport;
  setVisible: React.Dispatch<React.SetStateAction<VisibleType>>;
}

const ReportUpdateDialog = ({
  visible,
  report,
  setVisible,
}: ReportUpdateDialogProps) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<string>(report.title);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const onUpdate = async () => {
    // TODO: 리포트 타이틀 수정 THUNK DISPATCH
    const { meta } = await dispatch(
      updateReportTitleThunk({ reportId: report.id, title })
    );

    if (meta.requestStatus === "fulfilled") {
      setVisible(null);
    }
  };

  const onCancel = () => {
    setVisible(null);
    setTitle(report.title); // 취소시 원상복구
  };

  return (
    <Dialog
      visible={visible === "update"}
      cancellable
      title='독후감 수정'
      description={`${report.title}의 제목을 수정합니다.`}
      confirmText='수정'
      onCancel={onCancel}
      onConfirm={onUpdate}
    >
      <Container>
        <Input value={title} onChange={onChange} width='100%' focus />
      </Container>
    </Dialog>
  );
};

export default ReportUpdateDialog;

const Container = styled.div`
  padding: 0.5rem 0;
`;
