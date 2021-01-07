import React from "react";
import styled from "styled-components";
import { BasicFragment } from "../../types/entity";
import FragmentItem from "./FragmentItem";

export interface FragmentListProps {
  fragments: BasicFragment[];
}

const FragmentList = ({ fragments }: FragmentListProps) => {
  return (
    <Container>
      {fragments.map((fragment) => (
        <FragmentItem fragment={fragment} />
      ))}
    </Container>
  );
};

export default FragmentList;

const Container = styled.ul`
  padding: 0;
  margin: 0;

  margin: 1rem 0;
`;
