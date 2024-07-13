import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

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
          <Route path="/projects" element={<Home />} />
          <Route path="/shinanigans" element={<Home />} />
          <Route path="/life" element={<Home />} />

          <Route path="/design" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
