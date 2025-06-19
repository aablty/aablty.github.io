// React Router
import { HashRouter, Routes, Route } from "react-router-dom";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Contexts
import { LocaleProvider } from "./contexts";

// Components
import { Header, Footer } from "./components";

// Pages
import { Projects, AboutMe, Home } from "./pages";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      retry: 1,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <LocaleProvider>
          <Header />
          <div className="container content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about-me" element={<AboutMe />} />
            </Routes>
          </div>
          <Footer />
        </LocaleProvider>
      </HashRouter>
    </QueryClientProvider>
  );
}
