import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import useIsVisible from "../components/isVisible";
import NavBar from "../components/NavBar";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #e1e1e1;
  z-index: 0;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge, and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
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

const StyledTestUdder = styled(animated.div)`
  width: 7%;
  height: ${(props) => props.height || "50%"};
  background-color: #dda5b2;
  border-radius: 100px;
  transition: transform 0.3s ease; /* Smooth transition */
  z-index: 1;
  &:hover {
    transform: translateY(70px); /* Translate down on hover */
  }
`;

const UdderBodyContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`;

const UdderBody = styled.div`
  width: 100%;
  height: 50%;
  background-color: #dda5b2;
  border-bottom-left-radius: 62% 100%;
  border-bottom-right-radius: 62% 100%;
  z-index: 10000;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 7.5rem;
  font-weight: 900;
  color: #4b2e59;
  margin-top: 5%;
  z-index: 10000;
`;

const TestContainer = styled.div`
  width: 100%;
  height: 900px;
  display: flex;
  background-color: #fff;
`;

const Home = () => {
  const [jiggleIdx, setJiggleIdx] = useState(null);
  const section1Ref = useRef(null);
  const isVisible = useIsVisible(section1Ref);

  const handleUdderClick = (idx) => {
    setJiggleIdx(idx);
    setTimeout(() => setJiggleIdx(null), 200);
  };

  const jiggleAnimation = useSpring({
    transform:
      jiggleIdx !== null
        ? "translateY(70px) scale(1.5)"
        : "translateY(70px) scale(1)",
    config: { tension: 300, friction: 100, precision: 0.01 },
  });

  return (
    <Overlay>
      {/* nav bar */}
      <NavBar />

      {/* udder body */}
      <UdderBodyContainer ref={section1Ref}>
        <UdderBody>
          <Title>BO FIND</Title>
        </UdderBody>
      </UdderBodyContainer>

      {/* udders */}
      <UdderContainer>
        {[55, 65, 75, 65, 55].map((height, idx) => (
          <StyledTestUdder
            key={idx}
            style={jiggleIdx === idx ? jiggleAnimation : {}}
            height={`${height}%`}
            onClick={() => handleUdderClick(idx)}
          />
        ))}
      </UdderContainer>

      <TestContainer />
      <TestContainer />
      <TestContainer />
    </Overlay>
  );
};

export default Home;
