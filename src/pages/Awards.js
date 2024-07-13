import styled from "styled-components";

const Main = styled.div`
  background-color: "E1E1E1";
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #e1e1e1;
  z-index: 0;
  overflow: scroll;
`;

const Awards = () => {
  return (
    <Main>
      <Overlay>
        <div>testing!!</div>
      </Overlay>
    </Main>
  );
}

export default Awards;
