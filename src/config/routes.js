// Pages
import { Home, AboutMe, Projects } from "../pages";

// ===== ROUTE CONFIGURATION =====
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about-me", element: <AboutMe /> },
  { path: "/projects", element: <Projects /> },
];

export default routes;
