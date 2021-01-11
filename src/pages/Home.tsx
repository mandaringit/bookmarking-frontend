import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <div>
        <span className='home__welcome'>책을 읽고 그때 그때 기록하세요.</span>
      </div>
      <div>
        <span className='home__logo'>북마킹</span>
      </div>
      {/* TODO: 여기에 추천 책들이 들어가면 좋겠네요 */}
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .home__welcome {
    font-size: 3rem;
    font-weight: bold;
  }

  .home__logo {
    font-size: 2rem;
  }
`;
