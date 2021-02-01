import React from "react";
import { useHistory } from "react-router-dom";
import Dialog from "../../components/molecules/Dialog";
import { removeReportByIdThunk } from "../../slices/reportsSlice";
import { useAppDispatch } from "../../store";
import { BasicReport } from "../../types/entity";
import { VisibleType } from "./ReportDetail";

export interface ReportRemoveDialogProps {
  visible: boolean;
  report: BasicReport;
  setVisible: React.Dispatch<React.SetStateAction<VisibleType>>;
}

const ReportRemoveDialog = ({
  visible,
  report,
  setVisible,
}: ReportRemoveDialogProps) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const onRemove = async () => {
    const { meta } = await dispatch(
      removeReportByIdThunk({ reportId: report.id, isbn: report.book.isbn })
    );

    if (meta.requestStatus === "fulfilled") {
      history.push("/myreports");
    }
  };
  return (
    <Dialog
      visible={visible}
      cancellable
      title='독후감 삭제'
      description={`${report.title}을 정말 삭제합니까?`}
      confirmText='삭제'
      onCancel={() => setVisible(null)}
      onConfirm={onRemove}
    />
  );
};

export default ReportRemoveDialog;
