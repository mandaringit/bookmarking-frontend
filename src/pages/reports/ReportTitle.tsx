import React, { useState } from "react";
import Input from "../../components/atoms/Input";
import { updateReportTitleThunk } from "../../slices/reportsSlice";
import { useAppDispatch } from "../../store";
import { ID } from "../../types/entity";

interface ReportTitleProps {
  title: string;
  reportId: ID;
}

const ReportTitle = ({ title, reportId }: ReportTitleProps) => {
  const [value, setVaule] = useState<string>(title);
  const [update, setUpdate] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVaule(e.target.value);
  };

  const onUpdateOn = () => setUpdate(true);
  const onUpdateOff = () => {
    setUpdate(false);
    setVaule(title);
  };

  const onUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // TODO: 리포트 타이틀 수정 THUNK DISPATCH
    const { meta } = await dispatch(
      updateReportTitleThunk({ reportId, title: value })
    );

    if (meta.requestStatus === "fulfilled") {
      setUpdate(false);
    }
  };

  if (update) {
    return (
      <div>
        <div>
          <Input type='text' value={value} onChange={onChange} width='100%' />
          <button onClick={onUpdate}>타이틀수정</button>
        </div>
        <button onClick={onUpdateOff}>수정취소</button>
      </div>
    );
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onUpdateOn}>수정</button>
    </div>
  );
};

export default ReportTitle;
