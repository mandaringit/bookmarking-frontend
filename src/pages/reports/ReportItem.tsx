import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import { getFullThumbnailUrl } from "../../lib/utils";
import { removeReportByIdThunk } from "../../slices/reportsSlice";
import { BasicReport } from "../../types/entity";

export interface PureReportItemProps extends ReportItemProps {
  /**
   * 독후감 삭제 버튼 클릭 핸들러
   */
  onRemove: () => void;
}

export const PureReportItem = ({ report, onRemove }: PureReportItemProps) => {
  return (
    <Container>
      <Button onClick={onRemove}>X</Button>
      <Link to={`/report/${report.id}`}>
        <img
          className='item__thumbnail'
          src={getFullThumbnailUrl(report.book.thumbnail, 152)}
          alt={`${report.book.title} 썸네일`}
        />
        <span className='item__title'>{report.title}</span>
      </Link>
    </Container>
  );
};

export interface ReportItemProps {
  /**
   * 기본 독후감 정보
   */
  report: BasicReport;
}

/**
 * `ReportItem`은 독후감 하나를 받아 간단한 정보를 표시하고, 디테일 페이지로 이동할 수 있게끔 하는 컴포넌트입니다.
 */
const ReportItem = ({ report }: ReportItemProps) => {
  const dispatch = useDispatch();
  const onRemove = () => {
    dispatch(removeReportByIdThunk({ reportId: report.id }));
  };
  return <PureReportItem report={report} onRemove={onRemove} />;
};

export default ReportItem;

const Container = styled.li`
  list-style: none;
  position: relative;
  width: 152px;
  & > a {
    color: black;
    text-decoration: none;
  }
  .item__thumbnail {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    width: 152px;
    height: 225px;
  }
  .item__title {
    font-size: 0.875rem;
  }
`;
