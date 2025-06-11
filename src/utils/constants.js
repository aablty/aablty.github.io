// ===== NAVIGATION =====
export const navLinks = [
  { to: "/", labelKey: "home" },
  { to: "/projects", labelKey: "projects" },
  { to: "/about-me", labelKey: "about_me" },
];

// ===== SKILLS =====
export const skills = [
  {
    title_key: "skills_langs",
    items: ["Python", "JavaScript", "Java", "C++"],
  },
  {
    title_key: "skills_fws",
    items: ["React", "FastAPI", "aiogram", "disnake"],
  },
  {
    title_key: "skills_dbs",
    items: ["MongoDB", "SQLite"],
  },
  {
    title_key: "skills_tools",
    items: ["Git", "VS Code"],
  },
];

// ===== PROJECTS =====
export const projects = [
  {
    name: "This Portfolio",
    description: "Personal portfolio website",
    image:
      "https://i.pinimg.com/736x/7b/f0/43/7bf043e885ee92167ab39d63c115a6c9.jpg",
    stack: ["React", "CSS"],
    links: [
      { label: "Live", url: "https://aablty.github.io" },
      { label: "GitHub", url: "https://github.com/aablty/aablty.github.io" },
    ],
  },
];
