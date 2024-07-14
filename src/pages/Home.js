import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import useIsVisible from "../components/isVisible";
import NavBar from "../components/NavBar";
import Image from "react-bootstrap";
import HomeCarousel from "../components/Carousel";

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
  height: ${(props) => props.height || "100vh"};
  display: flex;
  background-color: ${(props) => props.backgroundColor || "#fff"};
`;

const Body = styled.div`
  width: 100%;
  height: ${(props) => props.height || "100vh"};
  display: flex;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  padding: 5px;
  align-items: center;
  justify-content: center;
`;

const SideNav = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SideNavButtons = styled.button`
  width: 100%;
  height: 10%;
  background-color: #dda5b2;
  border: none;
  border-radius: 10px;
  margin-top: 10%;
`;

const Test = styled.div`
  width: 90%;
  justify-content: center;
  height: 70%;
`;

const Home = () => {
  const [jiggleIdx, setJiggleIdx] = useState(null);

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
      <UdderBodyContainer>
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
      {/* <Test>
        <HomeCarousel />
      </Test> */}

      <Body/>

      <TestContainer backgroundColor="#653159" height="20vh" />
    </Overlay>
  );
};

export default Home;
