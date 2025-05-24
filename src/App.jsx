import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home"; // Создай компонент для главной, если нет

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
