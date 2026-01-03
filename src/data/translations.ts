import { type IconName } from "lucide-react/dynamic";

export type Language = "en" | "ru";

export interface Translation {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    nickname: string;
    role: string;
    description: string;
    cta: string;
    media: { icon: IconName; link: string }[];
  };
  about: {
    title: string;
    description: string[];
    education: {
      title: string;
      icon: IconName;
      list: {
        period: string;
        degree: string;
        institution: string;
        location: string;
      }[];
    };
    experience: {
      title: string;
      icon: IconName;
      list: {
        title: string;
        company: string;
        period: string;
        description: string[];
      }[];
    };
  };
  skills: {
    title: string;
    list: {
      title: string;
      icon: IconName;
      items: string[];
    }[];
  };
  quotes: {
    author: string;
    text: string;
  }[];
  projects: {
    title: string;
    list: {
      title: string;
      description: string;
      stack: string[];
      links: { icon: IconName; link: string }[];
    }[];
  };
  contact: {
    title: string;
    description: string;
    contacts: {
      icon: IconName;
      title: string;
      value: string;
      link?: string;
    }[];
    media: { icon: IconName; link: string }[];
    form: {
      title: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      sendButton: string;
    };
  };
}

export const defaultTranslations: Record<Language, Translation> = {
  ru: {
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      contact: "Контакты",
    },
    hero: {
      nickname: "aablty",
      role: "Full-Stack разработчик",
      greeting: "Привет, я",
      description:
        "Я создаю современные веб-приложения с чистым кодом и элегантными решениями.",
      cta: "Связаться со мной",
      media: [
        {
          icon: "github",
          link: "https://github.com/aablty",
        },
        {
          icon: "linkedin",
          link: "https://linkedin.com/in/aablty",
        },
        {
          icon: "mail",
          link: "mailto:aablty@proton.me",
        },
      ],
    },
    about: {
      title: "Обо мне",
      description: [
        "Я увлечённый full-stack разработчик с опытом создания масштабируемых веб-приложений.",
        "Сфокусирован на чистом, поддерживаемом коде и создании удобного пользовательского опыта.",
        "Постоянно учусь и изучаю новые технологии, чтобы находить лучшие решения.",
      ],
      education: {
        title: "Образование",
        icon: "graduation-cap",
        list: [
          {
            period: "2024 - 2028",
            degree: "Бакалавр компьютерных наук",
            institution: "Казахстанско-Британский технический университет",
            location: "Алматы, Казахстан",
          },
        ],
      },
      experience: {
        title: "Опыт работы",
        icon: "briefcase",
        list: [
          {
            title: "Junior Full-Stack разработчик",
            company: "SaleScout.me",
            period: "Июль 2025 — Декабрь 2025",
            description: [
              "Разрабатывал и поддерживал backend-функционал продакшн-платформы аналитики с использованием Node.js, MongoDB, Redis и интеграций с OpenAI, Waha и Kaspi Marketing",
              "Оптимизировал пайплайн парсинга данных, сократив время обработки в 2 раза",
              "Создал автоматизированную систему аналитики продавцов, используемую более чем 500 продавцами, с еженедельными отчётами в WhatsApp и улучшением качества бизнес-решений",
              "Работал с продакшн-багами, мониторингом и обновлениями функционала в живой среде",
            ],
          },
        ],
      },
    },
    skills: {
      title: "Навыки",
      list: [
        {
          title: "Фронтенд",
          icon: "atom",
          items: ["Next.js", "React", "TailwindCSS", "Material-UI", "SASS"],
        },
        {
          title: "Бэкенд",
          icon: "braces",
          items: [
            "Node.js (Express, NestJS)",
            "FastAPI (Python)",
            "Redis",
            "RabbitMQ",
            "Cloudinary",
          ],
        },
        {
          title: "Базы данных",
          icon: "database",
          items: ["PostgreSQL", "SQLite", "MongoDB", "Supabase"],
        },
        {
          title: "Инструменты",
          icon: "layers",
          items: ["Docker", "Bitbucket", "CI/CD"],
        },
      ],
    },
    quotes: [
      {
        author: "Фёдор Достоевский",
        text: "Человек есть тайна. Её надо разгадать, и если будешь разгадывать всю жизнь — не говори, что потерял время.",
      },
      {
        author: "Марк Аврелий",
        text: "Жизнь каждого человека — это то, во что превращаются его мысли.",
      },
      {
        author: "Фридрих Ницше",
        text: "Тот, у кого есть зачем жить, выдержит почти любое как.",
      },
    ],
    projects: {
      title: "Проекты",
      list: [
        {
          title: "Сайт-портфолио",
          description:
            "Личный сайт-портфолио на React с динамическим контентом из Supabase.",
          stack: ["React", "Supabase"],
          links: [
            {
              icon: "github",
              link: "https://github.com/aablty/aablty.github.io",
            },
            {
              icon: "radio",
              link: "https://aablty.github.io",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Связаться со мной",
      description: "Буду рад сотрудничеству или просто дружескому общению.",
      contacts: [
        {
          icon: "mail",
          title: "Email",
          value: "aablty@proton.me",
          link: "mailto:aablty@proton.me",
        },
        {
          icon: "map-pin",
          title: "Локация",
          value: "Алматы, Казахстан",
          link: "",
        },
      ],
      media: [
        {
          icon: "linkedin",
          link: "https://linkedin.com/in/aablty",
        },
        {
          icon: "send",
          link: "https://t.me/aablty",
        },
      ],
      form: {
        title: "Отправить сообщение",
        namePlaceholder: "Ваше имя",
        emailPlaceholder: "Ваш Email",
        messagePlaceholder: "Ваше сообщение",
        sendButton: "Отправить",
      },
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      nickname: "aablty",
      role: "Full-Stack Developer",
      greeting: "Hello, I'm",
      description:
        "I build modern web applications with clean code and elegant solutions.",
      cta: "Get in touch",
      media: [
        {
          icon: "github",
          link: "https://github.com/aablty",
        },
        {
          icon: "linkedin",
          link: "https://linkedin.com/in/aablty",
        },
        {
          icon: "mail",
          link: "mailto:aablty@proton.me",
        },
      ],
    },
    about: {
      title: "About Me",
      description: [
        "I'm a passionate full-stack developer with expertise in building scalable web applications.",
        "I focus on writing clean, maintainable code and creating seamless user experiences.",
        "Always learning and exploring new technologies to deliver the best solutions.",
      ],
      education: {
        title: "Education",
        icon: "graduation-cap",
        list: [
          {
            period: "2024 - 2028",
            degree: "Bachelor of Computer Science",
            institution: "Kazakh-British Technical University",
            location: "Almaty, Kazakhstan",
          },
        ],
      },
      experience: {
        title: "Experience",
        icon: "briefcase",
        list: [
          {
            title: "Junior Full-Stack Developer",
            company: "SaleScout.me",
            period: "July 2025 - December 2025",
            description: [
              "Developed and maintained backend features for a production analytics platform using Node.js, MongoDB, Redis and integrations with OpenAI, Waha, and Kaspi Marketing",
              "Optimized data parsing pipeline, reducing processing time by 2x",
              "Built automated seller analytics system used by 500+ sellers, generating weekly WhatsApp reports and improving decision-making for store owners",
              "Worked with production bugs, monitoring, and feature updates in a live environment",
            ],
          },
        ],
      },
    },
    skills: {
      title: "Skills",
      list: [
        {
          title: "Frontend",
          icon: "atom",
          items: ["Next.js", "React", "TailwindCSS", "Material-UI", "SASS"],
        },
        {
          title: "Backend",
          icon: "braces",
          items: [
            "Node.js (Express, NestJS)",
            "FastAPI (Python)",
            "Redis",
            "RabbitMQ",
            "Cloudinary",
          ],
        },
        {
          title: "Databases",
          icon: "database",
          items: ["PostgreSQL", "SQLite", "MongoDB", "Supabase"],
        },
        {
          title: "Tools",
          icon: "layers",
          items: ["Docker", "Bitbucket", "CI/CD"],
        },
      ],
    },
    quotes: [
      {
        author: "Fyodor Dostoevsky",
        text: "Man is a mystery. It needs to be unraveled, and if you spend your whole life unraveling it, don't say that you've wasted time.",
      },
      {
        author: "Marcus Aurelius",
        text: "The happiness of your life depends upon the quality of your thoughts.",
      },
      {
        author: "Friedrich Nietzsche",
        text: "He who has a why to live can bear almost any how.",
      },
    ],
    projects: {
      title: "Projects",
      list: [
        {
          title: "Portfolio Website",
          description:
            "A personal portfolio website built with React, fetching dynamic content from Supabase.",
          stack: ["React", "Supabase"],
          links: [
            {
              icon: "github",
              link: "https://github.com/aablty/aablty.github.io",
            },
            {
              icon: "radio",
              link: "https://aablty.github.io",
            },
          ],
        },
      ],
    },
    contact: {
      title: "Get In Touch",
      description:
        "Feel free to reach out for collaborations or just a friendly chat.",
      contacts: [
        {
          icon: "mail",
          title: "Email",
          value: "aablty@proton.me",
          link: "mailto:aablty@proton.me",
        },
        {
          icon: "map-pin",
          title: "Location",
          value: "Almaty, Kazakhstan",
          link: "",
        },
      ],
      media: [
        {
          icon: "linkedin",
          link: "https://linkedin.com/in/aablty",
        },
        {
          icon: "send",
          link: "https://t.me/aablty",
        },
      ],
      form: {
        title: "Send Message",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        messagePlaceholder: "Your Message",
        sendButton: "Send",
      },
    },
  },
};
