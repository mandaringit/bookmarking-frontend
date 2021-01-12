import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { findMyReportsThunk, selectReports } from "../../slices/reportsSlice";
import { pageContainer } from "../../styles/shared";
import { BasicReport } from "../../types/entity";
import ReportList from "./ReportList";

export interface PureMyReportsProps {
  /**
   * 여러개의 기본 독후감 정보
   */
  reports: BasicReport[];
}

/**
 * 독후감 목록 등 나의 독후감 관련 정보를 보여주는 페이지 컴포넌트 입니다.
 */
export const PureMyReports = ({ reports }: PureMyReportsProps) => {
  return (
    <Container>
      <h1>나의 독후감 목록</h1>
      <ReportList reports={reports} />
    </Container>
  );
};

const MyReports = () => {
  const dispatch = useDispatch();
  const reports = useSelector(selectReports);

  useEffect(() => {
    dispatch(findMyReportsThunk());
  }, [dispatch]);

  return <PureMyReports reports={reports} />;
};

export default MyReports;

const Container = styled.div`
  ${pageContainer}
`;
