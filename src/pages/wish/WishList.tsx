import React from "react";
import styled from "styled-components";
import { BasicWish } from "../../types/entity";
import WishItem from "./WishItem";

export interface WishListProps {
  wishes: BasicWish[];
}

const WishList = ({ wishes }: WishListProps) => {
  return (
    <Container>
      {wishes.map((wish) => (
        <WishItem wish={wish} key={wish.id} />
      ))}
    </Container>
  );
};

export default WishList;

const Container = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
`;
