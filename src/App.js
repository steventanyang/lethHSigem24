import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Project from "./pages/Project";
import Safety from "./pages/Safety";
import HumanPractices from "./pages/HumanPractices";
import Awards from "./pages/Awards";

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

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/human-practices" element={<HumanPractices />} />
          <Route path="/awards" element={<Awards />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
