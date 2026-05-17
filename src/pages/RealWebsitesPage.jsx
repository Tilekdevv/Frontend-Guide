import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Globe,
  Server,
  Database,
  Zap,
  Lock,
  User,
  Send,
  Download,
  AlertCircle,
  Chrome,
  Code,
  HardDrive,
  Radio,
  Shield,
  CheckCircle,
  XCircle,
  Loader,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const RealWebsitesPage = () => {
  const [activeScenario, setActiveScenario] = useState("login");
  const [isDark, setIsDark] = useState(true);

  const architectureComponents = [
    {
      id: "frontend",
      title: "Frontend",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      description: "Интерфейс пользователя",
      tech: ["React", "HTML", "CSS", "JavaScript"],
    },
    {
      id: "backend",
      title: "Backend",
      icon: Server,
      color: "from-green-500 to-emerald-500",
      description: "Серверная логика",
      tech: ["Node.js", "Python", "Java", "PHP"],
    },
    {
      id: "database",
      title: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      description: "Хранение данных",
      tech: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      id: "api",
      title: "API",
      icon: Zap,
      color: "from-orange-500 to-red-500",
      description: "Связь между частями",
      tech: ["REST", "GraphQL", "WebSocket"],
    },
    {
      id: "auth",
      title: "Authentication",
      icon: Lock,
      color: "from-yellow-500 to-orange-500",
      description: "Безопасность и доступ",
      tech: ["JWT", "OAuth", "Sessions"],
    },
  ];

  const scenarios = {
    login: {
      title: "Логин пользователя",
      icon: User,
      steps: [
        {
          step: 1,
          title: "Пользователь вводит данные",
          description: "Email и пароль в форму на сайте",
          component: "Frontend",
          color: "blue",
        },
        {
          step: 2,
          title: "Отправка на сервер",
          description: "POST запрос с данными через API",
          component: "API",
          color: "orange",
        },
        {
          step: 3,
          title: "Проверка данных",
          description: "Сервер проверяет email и пароль",
          component: "Backend",
          color: "green",
        },
        {
          step: 4,
          title: "Запрос к базе данных",
          description: "Поиск пользователя в БД",
          component: "Database",
          color: "purple",
        },
        {
          step: 5,
          title: "Создание токена",
          description: "Генерация JWT токена для сессии",
          component: "Auth",
          color: "yellow",
        },
        {
          step: 6,
          title: "Ответ пользователю",
          description: "Токен отправляется обратно",
          component: "Frontend",
          color: "blue",
        },
      ],
    },
    sendData: {
      title: "Отправка данных",
      icon: Send,
      steps: [
        {
          step: 1,
          title: "Пользователь заполняет форму",
          description: "Например, создание поста",
          component: "Frontend",
          color: "blue",
        },
        {
          step: 2,
          title: "Валидация на клиенте",
          description: "Проверка данных перед отправкой",
          component: "Frontend",
          color: "blue",
        },
        {
          step: 3,
          title: "POST запрос к API",
          description: "Отправка данных с токеном",
          component: "API",
          color: "orange",
        },
        {
          step: 4,
          title: "Проверка токена",
          description: "Авторизован ли пользователь?",
          component: "Auth",
          color: "yellow",
        },
        {
          step: 5,
          title: "Обработка данных",
          description: "Валидация и обработка на сервере",
          component: "Backend",
          color: "green",
        },
        {
          step: 6,
          title: "Сохранение в БД",
          description: "Запись данных в базу",
          component: "Database",
          color: "purple",
        },
        {
          step: 7,
          title: "Успешный ответ",
          description: "Подтверждение операции",
          component: "Frontend",
          color: "blue",
        },
      ],
    },
    getData: {
      title: "Получение данных",
      icon: Download,
      steps: [
        {
          step: 1,
          title: "Запрос данных",
          description: "GET запрос к API",
          component: "Frontend",
          color: "blue",
        },
        {
          step: 2,
          title: "Маршрутизация запроса",
          description: "API направляет к нужному endpoint",
          component: "API",
          color: "orange",
        },
        {
          step: 3,
          title: "Обработка запроса",
          description: "Сервер формирует запрос к БД",
          component: "Backend",
          color: "green",
        },
        {
          step: 4,
          title: "Запрос к базе данных",
          description: "SELECT запрос в БД",
          component: "Database",
          color: "purple",
        },
        {
          step: 5,
          title: "Форматирование данных",
          description: "Преобразование в JSON",
          component: "Backend",
          color: "green",
        },
        {
          step: 6,
          title: "Отображение данных",
          description: "Рендер на странице",
          component: "Frontend",
          color: "blue",
        },
      ],
    },
    error: {
      title: "Ошибка сервера",
      icon: AlertCircle,
      steps: [
        {
          step: 1,
          title: "Запрос от пользователя",
          description: "Попытка выполнить действие",
          component: "Frontend",
          color: "blue",
        },
        {
          step: 2,
          title: "Запрос к серверу",
          description: "API запрос отправлен",
          component: "API",
          color: "orange",
        },
        {
          step: 3,
          title: "Ошибка на сервере",
          description: "500 Internal Server Error",
          component: "Backend",
          color: "red",
        },
        {
          step: 4,
          title: "Логирование ошибки",
          description: "Сохранение в логи для анализа",
          component: "Backend",
          color: "green",
        },
        {
          step: 5,
          title: "Ответ с ошибкой",
          description: "Отправка error response",
          component: "API",
          color: "orange",
        },
        {
          step: 6,
          title: "Обработка ошибки",
          description: "Показ сообщения пользователю",
          component: "Frontend",
          color: "blue",
        },
      ],
    },
  };

  const pageLoadSteps = [
    {
      phase: "1. Ввод URL",
      icon: Chrome,
      description: "Пользователь вводит адрес сайта",
      details: [
        "Браузер проверяет кэш",
        "Начинается DNS запрос",
        "Поиск IP адреса сервера",
      ],
      time: "~20-120ms",
    },
    {
      phase: "2. Запрос к серверу",
      icon: Radio,
      description: "Установка соединения",
      details: [
        "TCP handshake",
        "SSL/TLS handshake (HTTPS)",
        "HTTP запрос отправлен",
      ],
      time: "~50-200ms",
    },
    {
      phase: "3. Сервер обрабатывает",
      icon: Server,
      description: "Backend генерирует ответ",
      details: [
        "Обработка маршрута",
        "Запросы к базе данных",
        "Формирование HTML",
      ],
      time: "~100-500ms",
    },
    {
      phase: "4. Загрузка ресурсов",
      icon: Download,
      description: "Скачивание файлов",
      details: [
        "HTML документ",
        "CSS стили",
        "JavaScript файлы",
        "Изображения и шрифты",
      ],
      time: "~200-2000ms",
    },
    {
      phase: "5. Парсинг и рендер",
      icon: Code,
      description: "Браузер строит страницу",
      details: [
        "Парсинг HTML → DOM",
        "Парсинг CSS → CSSOM",
        "Выполнение JavaScript",
        "Рендер дерева",
      ],
      time: "~100-1000ms",
    },
    {
      phase: "6. Интерактивность",
      icon: CheckCircle,
      description: "Страница готова",
      details: [
        "Event listeners активны",
        "Пользователь может взаимодействовать",
        "Lazy loading контента",
      ],
      time: "~50-500ms",
    },
  ];

  const getStepColor = (color) => {
    const colors = {
      blue: "from-blue-500 to-cyan-500",
      green: "from-green-500 to-emerald-500",
      purple: "from-purple-500 to-pink-500",
      orange: "from-orange-500 to-red-500",
      yellow: "from-yellow-500 to-orange-500",
      red: "from-red-500 to-rose-500",
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Назад к категориям
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Как работают реальные сайты
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Архитектура современных веб-приложений простыми словами
                </p>
              </div>
            </div>
          </motion.div>

          {/* Architecture Components */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Основные компоненты
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {architectureComponents.map((component, index) => (
                <motion.div
                  key={component.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${component.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <component.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {component.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {component.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {component.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Real Scenarios */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Реальные сценарии
            </h2>

            {/* Scenario Tabs */}
            <div className="flex flex-wrap gap-3 mb-8">
              {Object.entries(scenarios).map(([key, scenario]) => (
                <button
                  key={key}
                  onClick={() => setActiveScenario(key)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeScenario === key
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg scale-105"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md"
                  }`}
                >
                  <scenario.icon className="w-5 h-5" />
                  {scenario.title}
                </button>
              ))}
            </div>

            {/* Scenario Steps */}
            <motion.div
              key={activeScenario}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <div className="space-y-6">
                {scenarios[activeScenario].steps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-start gap-4">
                      {/* Step Number */}
                      <div
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${getStepColor(
                          step.color,
                        )} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}
                      >
                        {step.step}
                      </div>

                      {/* Step Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {step.title}
                          </h4>
                          <span
                            className={`px-3 py-1 bg-gradient-to-r ${getStepColor(
                              step.color,
                            )} text-white rounded-full text-xs font-medium`}
                          >
                            {step.component}
                          </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Connector Line */}
                    {index < scenarios[activeScenario].steps.length - 1 && (
                      <div className="ml-6 h-6 w-0.5 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 mt-2" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* Page Load Process */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Что происходит при загрузке сайта
            </h2>

            <div className="grid lg:grid-cols-2 gap-6">
              {pageLoadSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {step.phase}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {step.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-sm">
                    <Loader className="w-4 h-4 text-orange-500" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Время:{" "}
                      <strong className="text-orange-500">{step.time}</strong>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Total Time */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-2">Общее время загрузки</h3>
              <p className="text-4xl font-bold mb-2">~0.5 - 4 секунды</p>
              <p className="text-white/80">
                В зависимости от размера сайта, скорости интернета и оптимизации
              </p>
            </motion.div>
          </motion.section>

          {/* Key Takeaways */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Ключевые моменты
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Что важно понимать
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                    <span>Frontend и Backend работают вместе</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                    <span>API - это мост между ними</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                    <span>База данных хранит всю информацию</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                    <span>Аутентификация защищает данные</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                    <span>Каждый запрос проходит несколько этапов</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-blue-500" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Безопасность
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                    <span>Всегда используйте HTTPS</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                    <span>Валидация данных на клиенте и сервере</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                    <span>Токены для аутентификации</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                    <span>Обработка ошибок без утечки данных</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                    <span>Защита от SQL инъекций и XSS</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Back to Home Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <Link
              to="/"
              className="inline-block px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl font-semibold text-white hover:shadow-lg transition-all"
            >
              Вернуться на главную
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RealWebsitesPage;
