import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import {
  clearReport,
  findReportByIdThunk,
  removeReportByIdThunk,
  selectReport,
} from "../../slices/reportsSlice";
import { useAppDispatch } from "../../store";
import { pageContainer } from "../../styles/shared";
import { BasicReportWithFragments } from "../../types/entity";
import FragmentAddFrom from "./FragmentAddForm";
import FragmentList from "./FragmentList";
import ReportTitle from "./ReportTitle";

export interface PureReportDetailProps {
  /**
   * 생각 조각들을 포함하는 기본 독후감 정보
   */
  report: BasicReportWithFragments;
  /**
   * 독후감 삭제 버튼 클릭 핸들러
   */
  onRemove: () => void;
}

/**
 * 독후감 하나의 세부 정보와 생각 조각들을 보거나 추가, 수정 할 수 있는 페이지 컴포넌트입니다.
 */
export const PureReportDetail = ({
  report,
  onRemove,
}: PureReportDetailProps) => {
  const { book, fragments } = report;
  return (
    <Container>
      <span onClick={onRemove}>X</span>
      <ReportTitle reportId={report.id} title={report.title} />
      <div className='book__info'>
        <span>📔 {book.title}</span>
        <span>✍️ {book.author.name}</span>
      </div>
      <FragmentAddFrom reportId={report.id} />
      <FragmentList fragments={fragments} />
    </Container>
  );
};

const ReportDetail = ({
  match,
  history,
}: RouteComponentProps<{ reportId: string }>) => {
  const { reportId } = match.params;
  const report = useSelector(selectReport);
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

  const onRemove = async () => {
    const { meta } = await dispatch(
      removeReportByIdThunk({ reportId: parseInt(reportId) })
    );
    if (meta.requestStatus === "fulfilled") {
      history.push("/myreports");
    }
  };

  if (!report) {
    return null;
  }

  return <PureReportDetail report={report} onRemove={onRemove} />;
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
