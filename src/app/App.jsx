import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocaleProvider } from "./tools/localeContext";

import Header from "./components/Header";
import Projects from "./views/Projects";
import AboutMe from "./views/AboutMe";
import Home from "./views/Home";

export default function App() {
  return (
    <BrowserRouter>
      <LocaleProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </main>
      </LocaleProvider>
    </BrowserRouter>
  );
}
