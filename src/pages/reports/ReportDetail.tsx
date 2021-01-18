import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import ButtonGroup from "../../components/molecules/ButtonGroup";
import {
  clearReport,
  findReportByIdThunk,
  selectReport,
} from "../../slices/reportsSlice";
import { useAppDispatch } from "../../store";
import { pageContainer } from "../../styles/shared";
import { BasicReportWithFragments } from "../../types/entity";
import FragmentAddFrom from "./FragmentAddForm";
import FragmentList from "./FragmentList";
import ReportRemoveDialog from "./ReportRemoveDialog";
import ReportUpdateDialog from "./ReportUpdateDialog";

export interface PureReportDetailProps {
  /**
   * 생각 조각들을 포함하는 기본 독후감 정보
   */
  report: BasicReportWithFragments;
  visible: VisibleType;
  setVisible: React.Dispatch<React.SetStateAction<VisibleType>>;
}

/**
 * 독후감 하나의 세부 정보와 생각 조각들을 보거나 추가, 수정 할 수 있는 페이지 컴포넌트입니다.
 */
export const PureReportDetail = ({
  report,
  visible,
  setVisible,
}: PureReportDetailProps) => {
  const { book, fragments } = report;
  return (
    <>
      <Container>
        <ButtonGroup align='flex-end'>
          <Button onClick={() => setVisible("remove")} size='small'>
            삭제
          </Button>
          <Button onClick={() => setVisible("update")} size='small'>
            수정
          </Button>
        </ButtonGroup>
        <h2>{report.title}</h2>
        <div className='book__info'>
          <span>📔 {book.title}</span>
          <span>✍️ {book.author.name}</span>
        </div>
        <FragmentAddFrom reportId={report.id} />
        <FragmentList fragments={fragments} />
      </Container>
      {/* 삭제 다이얼로그 */}
      <ReportRemoveDialog
        report={report}
        visible={visible}
        setVisible={setVisible}
      />
      {/* 수정 다이얼로그 */}
      <ReportUpdateDialog
        report={report}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

export type VisibleType = null | "remove" | "update";

const ReportDetail = ({ match }: RouteComponentProps<{ reportId: string }>) => {
  const { reportId } = match.params;
  const report = useSelector(selectReport);
  const [visible, setVisible] = useState<VisibleType>(null);
  const dispatch = useAppDispatch();
  /**
   * mount & unmount
   */
  useEffect(() => {
    dispatch(findReportByIdThunk({ reportId: parseInt(reportId) }));
    return () => {
      dispatch(clearReport());
    };
  }, [dispatch, reportId]);

  if (!report) {
    return null;
  }

  return (
    <PureReportDetail
      report={report}
      visible={visible}
      setVisible={setVisible}
    />
  );
};

export default ReportDetail;

const Container = styled.div`
  ${pageContainer}
  margin-top:2rem;

  .book__info {
    color: #bdbdbd;
    span + span {
      ::before {
        content: "•";
      }
    }
  }
`;
