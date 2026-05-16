import {
  Compass,
  Brain,
  Layers,
  Package,
  Globe,
  Flame,
  Search,
  DollarSign,
  Briefcase,
  Rocket,
} from "lucide-react";

export const categories = [
  {
    id: 1,
    slug: "it-path",
    title: "IT и путь разработчика",
    description:
      "Начните свой путь в IT. Узнайте, как стать frontend разработчиком с нуля.",
    icon: Compass,
    gradient: "from-blue-500 to-cyan-500",
    lessons: 12,
  },
  {
    id: 2,
    slug: "ai",
    title: "AI",
    description:
      "Искусственный интеллект в frontend разработке. ChatGPT, Copilot и другие инструменты.",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500",
    lessons: 8,
  },
  {
    id: 3,
    slug: "state-management",
    title: "Props vs Context vs Redux Toolkit",
    description:
      "Управление состоянием в React. Сравнение подходов и best practices.",
    icon: Layers,
    gradient: "from-green-500 to-emerald-500",
    lessons: 15,
  },
  {
    id: 4,
    slug: "redux-toolkit",
    title: "Redux Toolkit",
    description:
      "Глубокое погружение в Redux Toolkit. Современный подход к управлению состоянием.",
    icon: Package,
    gradient: "from-violet-500 to-purple-500",
    lessons: 20,
  },
  {
    id: 5,
    slug: "real-websites",
    title: "Как работают реальные сайты",
    description:
      "Архитектура современных веб-приложений. От идеи до продакшена.",
    icon: Globe,
    gradient: "from-orange-500 to-red-500",
    lessons: 18,
  },
  {
    id: 6,
    slug: "firebase",
    title: "Firebase",
    description:
      "Backend-as-a-Service. Аутентификация, база данных, хостинг и многое другое.",
    icon: Flame,
    gradient: "from-yellow-500 to-orange-500",
    lessons: 14,
  },
  {
    id: 7,
    slug: "seo",
    title: "SEO / Google",
    description:
      "Оптимизация для поисковых систем. Как сделать сайт видимым в Google.",
    icon: Search,
    gradient: "from-teal-500 to-cyan-500",
    lessons: 10,
  },
  {
    id: 8,
    slug: "pricing",
    title: "Сколько стоит сайт",
    description:
      "Ценообразование в веб-разработке. Как оценивать проекты и работать с клиентами.",
    icon: DollarSign,
    gradient: "from-green-500 to-teal-500",
    lessons: 6,
  },
  {
    id: 9,
    slug: "job-search",
    title: "Работа Frontend Developer",
    description:
      "Поиск работы, собеседования, портфолио. Всё о карьере frontend разработчика.",
    icon: Briefcase,
    gradient: "from-indigo-500 to-blue-500",
    lessons: 16,
  },
  {
    id: 10,
    slug: "motivation",
    title: "Финальная мотивация",
    description:
      "Мотивация и вдохновение. Истории успеха и советы от опытных разработчиков.",
    icon: Rocket,
    gradient: "from-pink-500 to-rose-500",
    lessons: 5,
  },
];
