import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import { getFullThumbnailUrl } from "../../lib/utils";
import { findReportByIdThunk, selectReport } from "../../slices/reportsSlice";
import { BasicReportWithFragments } from "../../types/entity";
import FragmentList from "./FragmentList";

export interface PureReportDetailProps {
  /**
   * 생각 조각들을 포함하는 기본 독후감 정보
   */
  report: BasicReportWithFragments;
}

/**
 * 독후감 하나의 세부 정보와 생각 조각들을 보거나 추가, 수정 할 수 있는 페이지 컴포넌트입니다.
 */
export const PureReportDetail = ({ report }: PureReportDetailProps) => {
  const { book, fragments } = report;
  return (
    <Container>
      <h1>{report.title}</h1>
      <div className='book__info'>
        <span>📔 {book.title}</span>
        <span>✍️ {book.author.name}</span>
      </div>
      <div>
        <Button>생각 조각 추가</Button>
      </div>
      <FragmentList fragments={fragments} />
    </Container>
  );
};

const ReportDetail = ({ match }: RouteComponentProps<{ reportId: string }>) => {
  const { reportId } = match.params;
  const dispatch = useDispatch();
  const report = useSelector(selectReport);
  useEffect(() => {
    // reportId를 가진 리포트 가져오기. "기억조각"과 함께 가져와야 함
    dispatch(findReportByIdThunk({ reportId }));

    return () => {
      // report 클린하게 정리
    };
  }, [dispatch, reportId]);

  if (!report) {
    return null;
  }

  return <PureReportDetail report={report} />;
};

export default ReportDetail;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  & > h1 {
    margin: 0;
  }
  .book__info {
    color: #bdbdbd;
    span + span {
      ::before {
        content: "•";
      }
    }
  }
`;
