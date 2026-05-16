import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Laptop,
  TrendingUp,
  BookOpen,
  Briefcase,
  AlertCircle,
  Lightbulb,
  CheckCircle,
  XCircle,
} from "lucide-react";
import Navbar from "../components/Navbar";

const ITPathPage = () => {
  const [activeSection, setActiveSection] = useState("what-is-it");

  const sections = [
    { id: "what-is-it", title: "Что такое IT", icon: Laptop },
    {
      id: "developer-growth",
      title: "Как развивается разработчик",
      icon: TrendingUp,
    },
    {
      id: "continuous-learning",
      title: "Почему важно учиться постоянно",
      icon: BookOpen,
    },
    {
      id: "real-work",
      title: "Реальная работа frontend разработчика",
      icon: Briefcase,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((s) =>
        document.getElementById(s.id),
      );
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Navbar />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="flex gap-8">
            {/* Sidebar Navigation */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:block w-64 flex-shrink-0"
            >
              <div className="sticky top-24">
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    Содержание
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      return (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all text-left ${
                            activeSection === section.id
                              ? "bg-blue-500/20 text-blue-400"
                              : "text-gray-400 hover:text-gray-100 hover:bg-white/5"
                          }`}
                        >
                          <Icon className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm">{section.title}</span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </motion.aside>

            {/* Main Content */}
            <main className="flex-1 min-w-0">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
                  Путь Frontend разработчика
                </h1>
                <p className="text-xl text-gray-400">
                  Полное руководство для тех, кто хочет начать карьеру в IT
                </p>
              </motion.div>

              {/* Section 1: Что такое IT */}
              <Section id="what-is-it" icon={Laptop} title="Что такое IT">
                <ContentBlock>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    IT (Information Technology) — это огромная индустрия,
                    которая занимается обработкой, хранением и передачей
                    информации с помощью компьютеров и программного обеспечения.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Frontend разработка — это создание той части сайта или
                    приложения, которую видит и с которой взаимодействует
                    пользователь. Это кнопки, формы, анимации, дизайн — всё, что
                    делает сайт красивым и удобным.
                  </p>
                </ContentBlock>

                <InfoCard
                  icon={Lightbulb}
                  title="Простыми словами"
                  variant="blue"
                >
                  <p className="text-gray-300">
                    Представьте ресторан: backend разработчик — это повар на
                    кухне, а frontend разработчик — это официант и дизайнер
                    зала. Вы делаете так, чтобы гостям (пользователям) было
                    комфортно и приятно.
                  </p>
                </InfoCard>

                <SubSection title="Основные технологии Frontend">
                  <div className="grid md:grid-cols-3 gap-4">
                    <TechCard
                      title="HTML"
                      description="Структура страницы"
                      gradient="from-orange-500 to-red-500"
                    />
                    <TechCard
                      title="CSS"
                      description="Стили и дизайн"
                      gradient="from-blue-500 to-cyan-500"
                    />
                    <TechCard
                      title="JavaScript"
                      description="Интерактивность"
                      gradient="from-yellow-500 to-orange-500"
                    />
                  </div>
                </SubSection>

                <InfoCard
                  icon={AlertCircle}
                  title="Реальный пример"
                  variant="purple"
                >
                  <p className="text-gray-300 mb-3">
                    Когда вы заходите в Instagram и видите красивую ленту
                    фотографий, лайкаете посты, пишете комментарии — всё это
                    работа frontend разработчиков.
                  </p>
                  <p className="text-gray-300">
                    Они создали интерфейс, который понятен миллионам
                    пользователей по всему миру.
                  </p>
                </InfoCard>
              </Section>

              {/* Section 2: Как развивается разработчик */}
              <Section
                id="developer-growth"
                icon={TrendingUp}
                title="Как развивается разработчик"
              >
                <ContentBlock>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Путь разработчика — это не спринт, а марафон. Вы будете
                    постоянно учиться, расти и развиваться. Вот типичные этапы
                    карьеры:
                  </p>
                </ContentBlock>

                <div className="space-y-4">
                  <CareerStage
                    level="Junior"
                    duration="0-1 год"
                    description="Изучаете основы, работаете под руководством старших разработчиков, делаете простые задачи."
                    skills={[
                      "HTML/CSS",
                      "JavaScript основы",
                      "Git",
                      "React основы",
                    ]}
                  />
                  <CareerStage
                    level="Middle"
                    duration="1-3 года"
                    description="Самостоятельно решаете задачи средней сложности, участвуете в проектировании, помогаете джунам."
                    skills={[
                      "TypeScript",
                      "State Management",
                      "API Integration",
                      "Testing",
                    ]}
                  />
                  <CareerStage
                    level="Senior"
                    duration="3+ года"
                    description="Проектируете архитектуру, принимаете технические решения, менторите команду."
                    skills={[
                      "Architecture",
                      "Performance",
                      "Leadership",
                      "System Design",
                    ]}
                  />
                </div>

                <InfoCard
                  icon={Lightbulb}
                  title="Совет студентам"
                  variant="green"
                >
                  <p className="text-gray-300">
                    Не спешите стать Senior за полгода. Каждый этап важен для
                    вашего развития. Лучше быть сильным Middle, чем слабым
                    Senior. Качество важнее скорости.
                  </p>
                </InfoCard>

                <SubSection title="Ошибки новичков">
                  <div className="space-y-3">
                    <MistakeItem
                      mistake="Пытаются выучить всё сразу"
                      solution="Фокусируйтесь на основах: HTML, CSS, JavaScript. Остальное придёт со временем."
                    />
                    <MistakeItem
                      mistake="Смотрят только туториалы, не практикуются"
                      solution="Правило 80/20: 20% теории, 80% практики. Создавайте свои проекты!"
                    />
                    <MistakeItem
                      mistake="Боятся задавать вопросы"
                      solution="Все были новичками. Задавайте вопросы, это нормально и правильно."
                    />
                    <MistakeItem
                      mistake="Сравнивают себя с другими"
                      solution="Сравнивайте себя только с собой вчерашним. У каждого свой темп."
                    />
                  </div>
                </SubSection>
              </Section>

              {/* Section 3: Почему важно учиться постоянно */}
              <Section
                id="continuous-learning"
                icon={BookOpen}
                title="Почему важно учиться постоянно"
              >
                <ContentBlock>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Frontend разработка — одна из самых быстро меняющихся
                    областей в IT. То, что было актуально 5 лет назад, сегодня
                    может быть устаревшим.
                  </p>
                </ContentBlock>

                <InfoCard
                  icon={AlertCircle}
                  title="Реальный пример"
                  variant="orange"
                >
                  <p className="text-gray-300 mb-3">
                    В 2015 году все писали на jQuery. В 2018 — на React. В 2020
                    появились хуки в React. В 2023 — Server Components. В 2024 —
                    AI инструменты для разработки.
                  </p>
                  <p className="text-gray-300">
                    Разработчики, которые не учились, остались с устаревшими
                    навыками.
                  </p>
                </InfoCard>

                <SubSection title="Что нужно изучать постоянно">
                  <div className="grid md:grid-cols-2 gap-4">
                    <LearningCard
                      title="Новые технологии"
                      items={[
                        "Новые версии фреймворков",
                        "Современные инструменты",
                        "Best practices",
                      ]}
                    />
                    <LearningCard
                      title="Soft skills"
                      items={[
                        "Коммуникация в команде",
                        "Управление временем",
                        "Презентация идей",
                      ]}
                    />
                    <LearningCard
                      title="Смежные области"
                      items={[
                        "Основы дизайна",
                        "UX/UI принципы",
                        "Backend основы",
                      ]}
                    />
                    <LearningCard
                      title="Английский язык"
                      items={[
                        "Документация на английском",
                        "Общение с командой",
                        "Больше возможностей",
                      ]}
                    />
                  </div>
                </SubSection>

                <InfoCard
                  icon={Lightbulb}
                  title="Совет студентам"
                  variant="blue"
                >
                  <p className="text-gray-300">
                    Выделяйте хотя бы 30 минут в день на обучение. Читайте
                    статьи, смотрите конференции, делайте pet-проекты.
                    Постоянное развитие — это инвестиция в себя.
                  </p>
                </InfoCard>
              </Section>

              {/* Section 4: Реальная работа */}
              <Section
                id="real-work"
                icon={Briefcase}
                title="Реальная работа frontend разработчика"
              >
                <ContentBlock>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Многие новички думают, что работа разработчика — это только
                    писать код. На самом деле это лишь часть работы.
                  </p>
                </ContentBlock>

                <SubSection title="Типичный рабочий день">
                  <div className="space-y-4">
                    <DayActivity
                      time="09:00 - 09:30"
                      title="Утренний стендап"
                      description="Команда собирается и рассказывает, что делали вчера, что планируют сегодня, есть ли проблемы."
                    />
                    <DayActivity
                      time="09:30 - 12:00"
                      title="Разработка"
                      description="Пишете код, решаете задачи из таск-трекера (Jira, Trello), делаете code review."
                    />
                    <DayActivity
                      time="12:00 - 13:00"
                      title="Обед"
                      description="Отдых, общение с коллегами, перезагрузка."
                    />
                    <DayActivity
                      time="13:00 - 16:00"
                      title="Разработка и встречи"
                      description="Продолжаете работу над задачами, участвуете в планировании, обсуждаете решения с дизайнерами."
                    />
                    <DayActivity
                      time="16:00 - 18:00"
                      title="Тестирование и документация"
                      description="Тестируете свой код, пишете документацию, помогаете коллегам."
                    />
                  </div>
                </SubSection>

                <InfoCard
                  icon={AlertCircle}
                  title="Реальный пример"
                  variant="purple"
                >
                  <p className="text-gray-300 mb-3">
                    Вам дали задачу: добавить кнопку "Поделиться" на страницу
                    товара. Звучит просто?
                  </p>
                  <p className="text-gray-300 mb-3">
                    На деле вам нужно: обсудить с дизайнером, где разместить
                    кнопку, согласовать с backend, какие данные передавать,
                    написать код, покрыть тестами, проверить на разных
                    устройствах, сделать code review, задеплоить и проверить на
                    продакшене.
                  </p>
                  <p className="text-gray-300">
                    Простая кнопка может занять целый день работы!
                  </p>
                </InfoCard>

                <SubSection title="С кем вы будете работать">
                  <div className="grid md:grid-cols-2 gap-4">
                    <TeamMemberCard
                      role="Product Manager"
                      description="Определяет, что нужно сделать и почему. Ставит приоритеты."
                    />
                    <TeamMemberCard
                      role="Designer"
                      description="Создаёт дизайн интерфейса. Вы воплощаете его идеи в код."
                    />
                    <TeamMemberCard
                      role="Backend Developer"
                      description="Создаёт API, с которым вы работаете. Обмениваетесь данными."
                    />
                    <TeamMemberCard
                      role="QA Engineer"
                      description="Тестирует ваш код, находит баги. Помогает сделать продукт качественным."
                    />
                  </div>
                </SubSection>

                <InfoCard
                  icon={Lightbulb}
                  title="Совет студентам"
                  variant="green"
                >
                  <p className="text-gray-300">
                    Развивайте не только технические навыки, но и коммуникацию.
                    Умение объяснить свои идеи, задать правильные вопросы и
                    работать в команде — это то, что отличает хорошего
                    разработчика от великого.
                  </p>
                </InfoCard>
              </Section>

              {/* Final CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-16 glass rounded-3xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-100 mb-4">
                  Готовы начать свой путь?
                </h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                  Помните: каждый великий разработчик когда-то был новичком.
                  Главное — начать и не останавливаться. Удачи в обучении! 🚀
                </p>
                <Link
                  to="/"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white hover:shadow-lg transition-all"
                >
                  Вернуться к категориям
                </Link>
              </motion.div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component helpers
const Section = ({ id, icon: Icon, title, children }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className="mb-16 scroll-mt-24"
  >
    <div className="flex items-center space-x-3 mb-6">
      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h2 className="text-3xl font-bold text-gray-100">{title}</h2>
    </div>
    <div className="space-y-6">{children}</div>
  </motion.section>
);

const SubSection = ({ title, children }) => (
  <div className="mt-8">
    <h3 className="text-xl font-semibold text-gray-200 mb-4">{title}</h3>
    {children}
  </div>
);

const ContentBlock = ({ children }) => (
  <div className="glass rounded-2xl p-6">{children}</div>
);

const InfoCard = ({ icon: Icon, title, variant, children }) => {
  const variants = {
    blue: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
    purple: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
    green: "from-green-500/20 to-emerald-500/20 border-green-500/30",
    orange: "from-orange-500/20 to-red-500/20 border-orange-500/30",
  };

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className={`rounded-2xl p-6 border bg-gradient-to-br ${variants[variant]}`}
    >
      <div className="flex items-start space-x-3 mb-3">
        <Icon className="w-5 h-5 text-gray-100 flex-shrink-0 mt-1" />
        <h4 className="font-semibold text-gray-100">{title}</h4>
      </div>
      {children}
    </motion.div>
  );
};

const TechCard = ({ title, description, gradient }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="glass rounded-xl p-4 text-center"
  >
    <div
      className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center`}
    >
      <span className="text-white font-bold text-lg">{title[0]}</span>
    </div>
    <h4 className="font-semibold text-gray-100 mb-1">{title}</h4>
    <p className="text-sm text-gray-400">{description}</p>
  </motion.div>
);

const CareerStage = ({ level, duration, description, skills }) => (
  <motion.div whileHover={{ x: 4 }} className="glass rounded-xl p-6">
    <div className="flex items-start justify-between mb-3">
      <div>
        <h4 className="text-xl font-bold text-gray-100">{level}</h4>
        <p className="text-sm text-gray-400">{duration}</p>
      </div>
    </div>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const MistakeItem = ({ mistake, solution }) => (
  <div className="glass rounded-xl p-4">
    <div className="flex items-start space-x-3 mb-2">
      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
      <p className="text-gray-300 font-medium">{mistake}</p>
    </div>
    <div className="flex items-start space-x-3 ml-8">
      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
      <p className="text-gray-400 text-sm">{solution}</p>
    </div>
  </div>
);

const LearningCard = ({ title, items }) => (
  <div className="glass rounded-xl p-5">
    <h4 className="font-semibold text-gray-100 mb-3">{title}</h4>
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start space-x-2 text-sm text-gray-400"
        >
          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const DayActivity = ({ time, title, description }) => (
  <div className="glass rounded-xl p-5">
    <div className="flex items-start space-x-4">
      <div className="text-blue-400 font-mono text-sm flex-shrink-0 mt-1">
        {time}
      </div>
      <div>
        <h4 className="font-semibold text-gray-100 mb-1">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const TeamMemberCard = ({ role, description }) => (
  <div className="glass rounded-xl p-5">
    <h4 className="font-semibold text-gray-100 mb-2">{role}</h4>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

export default ITPathPage;
