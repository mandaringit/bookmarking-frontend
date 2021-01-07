import React from "react";
import styled from "styled-components";
import { BasicReport } from "../../types/entity";
import ReportItem from "./ReportItem";

export interface ReportListProps {
  /**
   * 기본 정보만을 가진 독후감들
   */
  reports: BasicReport[];
}

/**
 * `ReportList`는 독후감을 받아 그리드 형식으로 리스팅하는 컴포넌트 입니다.
 */
const ReportList = ({ reports }: ReportListProps) => {
  return (
    <Container>
      {reports.map((report) => (
        <ReportItem report={report} key={report.id} />
      ))}
    </Container>
  );
};

export default ReportList;

const Container = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
`;
