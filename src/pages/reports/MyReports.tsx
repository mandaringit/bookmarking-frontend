import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  findMyReportThunk,
  selectReports,
  selectReportStatus,
} from "../../slices/reportsSlice";
import { useAppDispatch } from "../../store";
import { pageContainer } from "../../styles/shared";
import { BasicReport } from "../../types/entity";
import { LoadingState } from "../../types/utils";
import ReportList from "./ReportList";

export interface PureMyReportsProps {
  /**
   * 여러개의 기본 독후감 정보
   */
  reports: BasicReport[];
  status: LoadingState;
}

/**
 * 독후감 목록 등 나의 독후감 관련 정보를 보여주는 페이지 컴포넌트 입니다.
 */
export const PureMyReports = ({ reports, status }: PureMyReportsProps) => {
  return (
    <Container>
      <h1>나의 독후감 목록</h1>
      {status === "loading" && <div>로딩..</div>}
      {status === "failed" && <div>독후감을 가져오는데 실패했어요.</div>}
      {status === "succeeded" && reports.length === 0 && (
        <Link to='/search'>독후감을 추가해보세요!</Link>
      )}
      {status === "succeeded" && reports.length > 0 && (
        <ReportList reports={reports} />
      )}
    </Container>
  );
};

const MyReports = () => {
  const dispatch = useAppDispatch();
  const reports = useSelector(selectReports);
  const status = useSelector(selectReportStatus);

  useEffect(() => {
    dispatch(findMyReportThunk());
  }, [dispatch]);

  return <PureMyReports reports={reports} status={status.findMyReports} />;
};

export default MyReports;

const Container = styled.div`
  ${pageContainer}
  h1 {
    margin: 0;
    padding-bottom: 1rem;
  }
`;
