import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Brain,
  Clock,
  Zap,
  Code,
  AlertTriangle,
  Sparkles,
  MessageSquare,
  Search,
  FileText,
  Github,
  Terminal,
  Twitter,
  CheckCircle,
  XCircle,
  Lightbulb,
  TrendingUp,
  Copy,
  Check,
} from "lucide-react";
import Navbar from "../components/Navbar";

const AIPage = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const aiTools = [
    {
      name: "ChatGPT",
      icon: MessageSquare,
      gradient: "from-green-500 to-emerald-500",
      description: "Универсальный AI помощник",
      features: [
        "Объясняет код простым языком",
        "Помогает учиться программированию",
        "Генерирует код и решения",
        "Отвечает на любые вопросы",
      ],
      bestFor: "Обучение и решение задач",
    },
    {
      name: "Gemini",
      icon: Sparkles,
      gradient: "from-blue-500 to-cyan-500",
      description: "AI от Google",
      features: [
        "Быстрый поиск + AI",
        "Интеграция с Google сервисами",
        "Работа с большими данными",
        "Мультимодальность (текст + изображения)",
      ],
      bestFor: "Исследование и поиск информации",
    },
    {
      name: "Claude",
      icon: FileText,
      gradient: "from-purple-500 to-pink-500",
      description: "Сильный в логике и длинных текстах",
      features: [
        "Отлично объясняет сложный код",
        "Работает с большими проектами",
        "Глубокий анализ архитектуры",
        "Помогает с рефакторингом",
      ],
      bestFor: "Сложные проекты и архитектура",
    },
    {
      name: "GitHub Copilot",
      icon: Github,
      gradient: "from-gray-600 to-gray-800",
      description: "AI прямо в редакторе кода",
      features: [
        "Автодополнение кода",
        "Пишет функции целиком",
        "Работает в VS Code",
        "Понимает контекст проекта",
      ],
      bestFor: "Ежедневная разработка",
    },
    {
      name: "Cursor",
      icon: Terminal,
      gradient: "from-indigo-500 to-blue-500",
      description: "AI редактор кода",
      features: [
        "Пишет проекты целиком",
        "Редактирует несколько файлов",
        "Понимает весь проект",
        "Встроенный AI ассистент",
      ],
      bestFor: "Создание полных проектов",
    },
    {
      name: "Grok",
      icon: Twitter,
      gradient: "from-sky-500 to-blue-600",
      description: "AI от X (Twitter)",
      features: [
        "Быстрые ответы",
        "Актуальная информация",
        "Интеграция с X",
        "Прямой стиль общения",
      ],
      bestFor: "Быстрые вопросы и новости",
    },
  ];

  const promptExamples = [
    {
      prompt: "Создай navbar с React и Tailwind CSS",
      category: "Генерация кода",
      icon: Code,
    },
    {
      prompt: "Исправь ошибку: Cannot read property of undefined",
      category: "Дебаг",
      icon: AlertTriangle,
    },
    {
      prompt: "Объясни Redux Toolkit простым языком для новичка",
      category: "Обучение",
      icon: Lightbulb,
    },
    {
      prompt: "Создай React проект todo app с localStorage",
      category: "Проект",
      icon: Sparkles,
    },
    {
      prompt: "Как сделать fetch запрос к API с обработкой ошибок?",
      category: "API",
      icon: Zap,
    },
    {
      prompt: "Оптимизируй этот код React компонента",
      category: "Оптимизация",
      icon: TrendingUp,
    },
  ];

  const beforeAfter = [
    {
      before: "Искал решение в Google 30 минут",
      after: "Спросил AI и получил ответ за 10 секунд",
      icon: Search,
    },
    {
      before: "Читал документацию 2 часа",
      after: "AI объяснил за 2 минуты простыми словами",
      icon: FileText,
    },
    {
      before: "Дебажил ошибку весь день",
      after: "AI нашёл проблему и предложил решение",
      icon: AlertTriangle,
    },
    {
      before: "Писал однотипный код вручную",
      after: "AI сгенерировал шаблон за секунды",
      icon: Code,
    },
  ];

  const useCases = [
    {
      title: "Написание кода",
      description: "AI помогает писать компоненты, функции, стили",
      example: '"Создай React компонент кнопки с hover эффектом"',
      icon: Code,
      color: "blue",
    },
    {
      title: "Поиск ошибок",
      description: "Находит баги и предлагает исправления",
      example: '"Почему не работает useState в моём компоненте?"',
      icon: AlertTriangle,
      color: "red",
    },
    {
      title: "Объяснение кода",
      description: "Разбирает сложный код простыми словами",
      example: '"Объясни, как работает useEffect"',
      icon: Lightbulb,
      color: "yellow",
    },
    {
      title: "Генерация идей",
      description: "Предлагает решения и подходы",
      example: '"Как лучше организовать state в большом проекте?"',
      icon: Sparkles,
      color: "purple",
    },
    {
      title: "Помощь в проектах",
      description: "Создаёт структуру и архитектуру",
      example: '"Создай структуру React проекта для e-commerce"',
      icon: Terminal,
      color: "green",
    },
    {
      title: "Документация",
      description: "Пишет комментарии и README",
      example: '"Напиши документацию для этого API"',
      icon: FileText,
      color: "indigo",
    },
  ];

  const limitations = [
    {
      title: "AI может ошибаться",
      description:
        "Не весь код, который генерирует AI, работает идеально. Всегда проверяйте результат.",
      icon: XCircle,
      color: "red",
    },
    {
      title: "Не всегда лучший код",
      description:
        "AI может предложить рабочее, но не оптимальное решение. Нужно понимать, что можно улучшить.",
      icon: AlertTriangle,
      color: "orange",
    },
    {
      title: "Нужно понимать логику",
      description:
        "Если вы не понимаете код, который скопировали, вы не сможете его поддерживать и исправлять.",
      icon: Brain,
      color: "purple",
    },
    {
      title: "Нельзя слепо копировать",
      description:
        "Всегда читайте код, который даёт AI. Понимайте, что делает каждая строка.",
      icon: AlertTriangle,
      color: "yellow",
    },
  ];

  const bestPractices = [
    "Задавайте чёткие и конкретные вопросы",
    "Всегда читайте и понимайте код перед использованием",
    "Проверяйте код на ошибки и тестируйте",
    "Используйте AI как помощника, а не замену обучению",
    "Учитесь на примерах, которые даёт AI",
    "Не бойтесь задавать уточняющие вопросы",
    "Сравнивайте разные решения от AI",
    "Адаптируйте код под свой проект",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Navbar />

      <div className="pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-gray-400 hover:text-gray-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Назад к категориям</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 mb-6"
            >
              <Brain className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
              Искусственный интеллект (AI)
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Как AI изменил программирование и помогает разработчикам работать
              быстрее и эффективнее
            </p>
          </motion.div>

          {/* Section 1: Что такое AI */}
          <Section
            icon={Brain}
            title="Что такое AI?"
            gradient="from-purple-500 to-pink-500"
          >
            <ContentCard>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                <strong className="text-gray-100">
                  AI (Artificial Intelligence)
                </strong>{" "}
                — это программы, которые могут думать, анализировать и помогать
                человеку. Они учатся на огромном количестве данных и могут
                решать задачи, которые раньше требовали человеческого
                интеллекта.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Простыми словами: AI — это умный помощник, который понимает ваши
                вопросы и даёт полезные ответы.
              </p>
            </ContentCard>

            <div className="grid md:grid-cols-3 gap-4">
              <TimelineCard
                period="20 век"
                title="Идея появилась"
                description="Учёные начали думать о создании искусственного интеллекта"
              />
              <TimelineCard
                period="После 2010"
                title="Активное развитие"
                description="Появились нейросети, машинное обучение стало доступным"
              />
              <TimelineCard
                period="2022-2024"
                title="Революция ChatGPT"
                description="AI стал доступен каждому. Изменил способ работы программистов"
              />
            </div>
          </Section>

          {/* Section 2: Раньше vs Сейчас */}
          <Section
            icon={Clock}
            title="Как люди работали без AI"
            gradient="from-blue-500 to-cyan-500"
          >
            <ContentCard>
              <p className="text-gray-300 leading-relaxed mb-6">
                Раньше программисты делали всё вручную. Это было долго, сложно и
                требовало много времени на поиск решений.
              </p>
            </ContentCard>

            <div className="space-y-4">
              {beforeAfter.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6"
                >
                  <div className="flex items-start gap-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20">
                      <item.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1 grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-xs text-red-400 font-semibold mb-2">
                          ❌ РАНЬШЕ
                        </div>
                        <p className="text-gray-300">{item.before}</p>
                      </div>
                      <div>
                        <div className="text-xs text-green-400 font-semibold mb-2">
                          ✅ СЕЙЧАС С AI
                        </div>
                        <p className="text-gray-300">{item.after}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <InfoBox variant="blue">
              <p className="text-gray-300">
                <strong className="text-gray-100">Вывод:</strong> AI не заменяет
                программиста, но делает его работу в 10 раз быстрее и
                эффективнее!
              </p>
            </InfoBox>
          </Section>

          {/* Section 3: Как используют AI */}
          <Section
            icon={Zap}
            title="Как программисты используют AI"
            gradient="from-yellow-500 to-orange-500"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass rounded-2xl p-6"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${useCase.color}-500 to-${useCase.color}-600 flex items-center justify-center mb-4`}
                  >
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{useCase.description}</p>
                  <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                    <p className="text-sm text-gray-300 italic">
                      "{useCase.example}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Section 4: Ограничения */}
          <Section
            icon={AlertTriangle}
            title="Ограничения AI"
            gradient="from-red-500 to-orange-500"
          >
            <ContentCard>
              <p className="text-gray-300 leading-relaxed mb-6">
                AI — это мощный инструмент, но он не идеален. Важно понимать его
                ограничения и использовать правильно.
              </p>
            </ContentCard>

            <div className="grid md:grid-cols-2 gap-4">
              {limitations.map((limitation, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`glass rounded-2xl p-6 border-l-4 border-${limitation.color}-500`}
                >
                  <div className="flex items-start space-x-4">
                    <limitation.icon
                      className={`w-6 h-6 text-${limitation.color}-400 flex-shrink-0 mt-1`}
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-100 mb-2">
                        {limitation.title}
                      </h3>
                      <p className="text-gray-400">{limitation.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <InfoBox variant="red">
              <p className="text-gray-300">
                <strong className="text-gray-100">Важно:</strong> AI — это
                помощник, а не замена вашему мозгу. Всегда думайте своей головой
                и понимайте, что делаете!
              </p>
            </InfoBox>
          </Section>

          {/* Section 5: AI Tools */}
          <Section
            icon={Sparkles}
            title="AI инструменты для разработчиков"
            gradient="from-indigo-500 to-purple-500"
          >
            <ContentCard>
              <p className="text-gray-300 leading-relaxed mb-6">
                Существует множество AI инструментов. Каждый хорош для своих
                задач. Вот самые популярные:
              </p>
            </ContentCard>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass rounded-2xl p-6 group"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <tool.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {tool.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-xs text-gray-500 mb-1">
                      Лучше всего для:
                    </p>
                    <p className="text-sm text-blue-400 font-medium">
                      {tool.bestFor}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Section>

          {/* Section 6: Prompt Examples */}
          <Section
            icon={MessageSquare}
            title="Примеры промптов (запросов)"
            gradient="from-green-500 to-emerald-500"
          >
            <ContentCard>
              <p className="text-gray-300 leading-relaxed mb-6">
                Правильный вопрос = правильный ответ. Вот примеры хороших
                запросов к AI:
              </p>
            </ContentCard>

            <div className="grid md:grid-cols-2 gap-4">
              {promptExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-5 group cursor-pointer"
                  onClick={() => copyToClipboard(example.prompt, index)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <example.icon className="w-5 h-5 text-blue-400" />
                      <span className="text-xs text-gray-400 font-medium">
                        {example.category}
                      </span>
                    </div>
                    <button className="p-1 hover:bg-white/10 rounded transition-colors">
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-300 font-mono text-sm leading-relaxed">
                    "{example.prompt}"
                  </p>
                </motion.div>
              ))}
            </div>

            <InfoBox variant="green">
              <p className="text-gray-300">
                <strong className="text-gray-100">Совет:</strong> Чем конкретнее
                ваш вопрос, тем лучше ответ. Указывайте технологии, контекст и
                что именно хотите получить.
              </p>
            </InfoBox>
          </Section>

          {/* Section 7: Best Practices */}
          <Section
            icon={Lightbulb}
            title="Как правильно использовать AI"
            gradient="from-cyan-500 to-blue-500"
          >
            <ContentCard>
              <p className="text-gray-300 leading-relaxed mb-6">
                AI — это мощный инструмент, но его нужно использовать правильно.
                Вот главные правила:
              </p>
            </ContentCard>

            <div className="grid md:grid-cols-2 gap-4">
              {bestPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 4 }}
                  className="glass rounded-xl p-4 flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300">{practice}</p>
                </motion.div>
              ))}
            </div>

            <InfoBox variant="purple">
              <div className="space-y-3">
                <p className="text-gray-300">
                  <strong className="text-gray-100">Золотое правило:</strong> AI
                  должен помогать вам учиться, а не делать всю работу за вас.
                </p>
                <p className="text-gray-300">
                  Если вы просто копируете код, не понимая его — вы не
                  становитесь лучше. Используйте AI, чтобы понять концепции и
                  научиться решать задачи самостоятельно.
                </p>
              </div>
            </InfoBox>
          </Section>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10" />
            <div className="relative z-10">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-3xl font-bold text-gray-100 mb-4">
                Начните использовать AI уже сегодня!
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                AI — это не будущее, это настоящее. Разработчики, которые умеют
                работать с AI, работают быстрее, эффективнее и создают лучшие
                проекты.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/"
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl font-semibold text-white hover:shadow-lg transition-all"
                >
                  Вернуться к категориям
                </Link>
                <button className="px-6 py-3 glass glass-hover rounded-xl font-semibold text-gray-100 transition-all">
                  Попробовать ChatGPT
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

// Helper Components
const Section = ({ icon: Icon, title, gradient, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className="mb-20"
  >
    <div className="flex items-center space-x-3 mb-8">
      <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient}`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h2 className="text-3xl font-bold text-gray-100">{title}</h2>
    </div>
    <div className="space-y-6">{children}</div>
  </motion.section>
);

const ContentCard = ({ children }) => (
  <div className="glass rounded-2xl p-6 md:p-8">{children}</div>
);

const TimelineCard = ({ period, title, description }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="glass rounded-xl p-5 text-center"
  >
    <div className="text-sm text-blue-400 font-semibold mb-2">{period}</div>
    <h3 className="text-lg font-bold text-gray-100 mb-2">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </motion.div>
);

const InfoBox = ({ variant, children }) => {
  const variants = {
    blue: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    green: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    red: "from-red-500/20 to-orange-500/20 border-red-500/30",
    purple: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`rounded-2xl p-6 border bg-gradient-to-br ${variants[variant]}`}
    >
      {children}
    </motion.div>
  );
};

export default AIPage;
