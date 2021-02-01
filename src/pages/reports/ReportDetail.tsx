import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/atoms/Button";
import ButtonGroup from "../../components/molecules/ButtonGroup";
import { getFullThumbnailUrl } from "../../lib/utils";
import {
  clearReport,
  findReportByIdThunk,
  selectReport,
} from "../../slices/reportsSlice";
import { useAppDispatch } from "../../store";
import { pageContainer } from "../../styles/shared";
import { BasicReportWithFragments } from "../../types/entity";
import FragmentAddDialog from "./FragmentAddDialog";
import FragmentList from "./FragmentList";
import ReportRemoveDialog from "./ReportRemoveDialog";
import ReportUpdateDialog from "./ReportUpdateDialog";

export type VisibleType = null | "remove" | "update" | "addFragment";
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
        <Article>
          <img src={getFullThumbnailUrl(book.thumbnail, 150)} alt='' />
          <div
            style={{
              display: "flex",
              flexGrow: 1,
              flexDirection: "column",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingLeft: "1rem",
            }}
          >
            <h1 style={{ fontSize: "2rem", textAlign: "end" }}>
              {report.title}
            </h1>
            <div>
              <span>📔 {book.title}</span>
              <span>✍️ {book.author.name}</span>
            </div>
          </div>
        </Article>
        <Button
          onClick={() => setVisible("addFragment")}
          size='medium'
          width='100%'
        >
          + 생각 조각
        </Button>
        <FragmentList fragments={fragments} />
      </Container>
      <FragmentAddDialog
        report={report}
        visible={visible === "addFragment"}
        setVisible={setVisible}
      />
      {/* 삭제 다이얼로그 */}
      <ReportRemoveDialog
        report={report}
        visible={visible === "remove"}
        setVisible={setVisible}
      />
      {/* 수정 다이얼로그 */}
      <ReportUpdateDialog
        report={report}
        visible={visible === "update"}
        setVisible={setVisible}
      />
    </>
  );
};

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
  padding-top:2rem;
`;

const Article = styled.article`
  position: relative;
  display: flex;
  padding: 1rem 0.5rem;
  border-bottom: 2px solid black;
  margin-bottom: 1rem;

  img {
    border: 1px solid #e0e0e0;
    border-radius: 5px;
  }
  span + span {
    ::before {
      content: "•";
    }
  }
`;
