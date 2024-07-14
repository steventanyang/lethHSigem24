import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #d3d3d3;
  overflow: hidden;
`;

const DrippingEffect = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  background-color: #f4a5b7;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
`;

const Text = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5rem;
  color: #4b2e59;
`;

const Drip = styled.div`
  position: absolute;
  bottom: -25px;
  width: 40px;
  height: 100px;
  background-color: #f4a5b7;
  border-radius: 50%;
  left: ${props => props.left};
  animation: drip 3s infinite ease-in-out;

  @keyframes drip {
    0% {
      height: 100px;
    }
    50% {
      height: 120px;
    }
    100% {
      height: 100px;
    }
  }

  &::before {
    content: '*';
    position: absolute;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 1.5rem;
    color: white;
  }
`;

const Project = () => {
  return (
    <Container>
      <DrippingEffect>
        <Text>BOFIND</Text>
        <Drip left="20%" />
        <Drip left="40%" />
        <Drip left="60%" />
        <Drip left="80%" />
      </DrippingEffect>
    </Container>
  );
};


export default Project;
