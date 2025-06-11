// React Router
import { HashRouter, Routes, Route } from "react-router-dom";

// Contexts
import { LocaleProvider } from "./contexts";

// Components
import { Header, Footer } from "./components";

// Pages
import { Projects, AboutMe, Home } from "./pages";

export default function App() {
  return (
    <HashRouter>
      <LocaleProvider>
        <Header />
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about-me" element={<AboutMe />} />
          </Routes>
        </>
        <Footer />
      </LocaleProvider>
    </HashRouter>
  );
}
