import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e1e1e1;
  z-index: 0;
  overflow: hidden;
  scroll
`;

const DrippingEffect = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: #f4a5b7;
  border-bottom-left-radius: 50% 100%;
  border-bottom-right-radius: 50% 100%;
`;

const Text = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  color: #4b2e59;
`;


const UdderContainer = styled.div`
  z-index: 10000;
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
  width: 100%;
  height: 100%;
  flex-direction: row;
`;

const TestUdder = styled.div`
  width: 7%;
  height: ${(props) => props.height || "50%"};
  background-color: #DDA5B2;
  border-radius: 100px;
`;

const UdderBodyContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 50%;
  justify-content: flex-start;
`

const UdderBody = styled.div`
  width: 100%;
  height: 50%;
  background-color: #DDA5B2;
  border-bottom-left-radius: 50% 100%;
  border-bottom-right-radius: 50% 100%;
  z-index: 10000;
`

const Home = () => {
  return (
    <Overlay>

      <UdderBodyContainer>
        <UdderBody />
      </UdderBodyContainer>

      <UdderContainer>
        <TestUdder height="35%" />
        <TestUdder height="45%" />
        <TestUdder height="55%" />
        <TestUdder height="45%" />
        <TestUdder height="35%" />
      </UdderContainer>



    </Overlay>
  );
};

export default Home;
