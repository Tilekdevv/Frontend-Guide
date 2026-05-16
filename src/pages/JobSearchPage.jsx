import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Github,
  FileText,
  FolderGit2,
  UserCheck,
  Linkedin,
  Globe,
  Search,
  MessageSquare,
  AlertTriangle,
  CheckSquare,
  Square,
  Compass,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

export default function JobSeachPage() {
  // Состояние для интерактивного чек-листа готовности студента
  const [checklist, setChecklist] = useState([
    {
      id: 1,
      text: "GitHub: Загружено минимум 3-5 чистых репозиториев без каши в коде",
      checked: false,
    },
    {
      id: 2,
      text: "Portfolio: Собственный сайт-портфолио развернут на Vercel/Netlify",
      checked: false,
    },
    {
      id: 3,
      text: "CV: Резюме готово в PDF формате, строго на 1 страницу, без лишней воды",
      checked: false,
    },
    {
      id: 4,
      text: "LinkedIn: Профиль полностью заполнен на английском языке, добавлено 500+ контактов",
      checked: false,
    },
    {
      id: 5,
      text: "Проекты: Есть хотя бы один крупный Fullstack или RTK проект (например, CRM или Магазин)",
      checked: false,
    },
  ]);

  const toggleCheck = (id) => {
    setChecklist(
      checklist.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  const platforms = [
    {
      name: "LinkedIn",
      type: "Международный стандарт",
      icon: <Linkedin className="w-5 h-5 text-blue-400" />,
      desc: "Главная социальная сеть для ИТ-специалистов в мире. Вакансии здесь ищут не через поиск, а через личный бренд и добавление рекрутеров в контакты.",
      tip: "Добавляй по 20 HR-специалистов каждый день и пиши им персонализированные сообщения.",
      color: "border-blue-500/30 bg-blue-950/10",
    },
    {
      name: "Upwork",
      type: "Глобальный Фриланс",
      icon: <Globe className="w-5 h-5 text-emerald-400" />,
      desc: "Крупнейшая биржа англоязычного фриланса. Отличная площадка, чтобы взять первые небольшие заказы на верстку или React-компоненты и заработать в долларах.",
      tip: "Пиши уникальные Cover Letters (сопроводительные письма), ИИ в этом деле сразу видно.",
      color: "border-emerald-500/30 bg-emerald-950/10",
    },
    {
      name: "HH.ru / Локальный рынок",
      type: "Работа в СНГ",
      icon: <Search className="w-5 h-5 text-rose-400" />,
      desc: "Основная база классических вакансий для русскоязычного пространства. Здесь огромный поток джуниорских позиций, но и самая высокая конкуренция по откликам.",
      tip: 'Не жди ответа, пиши сопроводительное письмо: "Чем именно я могу помочь вашей компании".',
      color: "border-rose-500/30 bg-rose-950/10",
    },
    {
      name: "Threads / Telegram",
      type: "Альтернативные каналы 🚀",
      icon: <MessageSquare className="w-5 h-5 text-purple-400" />,
      desc: "Новый тренд. В Threads сейчас сидит очень активное ИТ-комьюнити, где тимлиды и основатели стартапов нанимают людей напрямую через текстовые посты.",
      tip: "Активно комментируй экспертные посты, показывай свою адекватность и инженерное мышление.",
      color: "border-purple-500/30 bg-purple-950/10",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative pb-20 overflow-x-hidden">
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* HERO HEADER */}
      <header className="relative max-w-5xl mx-auto pt-24 pb-16 px-4 text-center border-b border-slate-900">
        {/* Кнопка назад */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-8 left-4"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-100 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Назад к категориям</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-950/40 border border-indigo-900/40 rounded-full text-indigo-400 text-xs font-mono mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-3.5 h-3.5" /> Финальный модуль: Выход на рынок
          труда
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight"
        >
          Где и Как Искать Работу <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Frontend Разработчику
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Пошаговое руководство для выпускников курса. Как упаковать свои
          знания, какие платформы использовать и как обойти конкурентов на
          собеседовании.
        </motion.p>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        {/* 1. ЧТО НУЖНО ДЛЯ РАБОТЫ (ДЖУН-ПАК) */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-indigo-400 font-mono text-lg">01 /</span>{" "}
              Джентльменский набор джуна
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-1">
              Без этой базы отправлять отклики нет никакого смысла — рекрутеры
              будут закрывать вкладку за 3 секунды.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: <Github className="w-5 h-5 text-white" />,
                title: "GitHub профиль",
                desc: "Твой главный паспорт. Никаких пустых репозиториев или архивов. Проекты должны быть оформлены красивыми файлами README.md с описанием стека.",
              },
              {
                icon: <Compass className="w-5 h-5 text-cyan-400" />,
                title: "Живое Portfolio",
                desc: "Сайт-визитка, где собраны твои лучшие работы, ссылки на код и контакты. Должен идеально работать на мобилках и быстро загружаться.",
              },
              {
                icon: <FileText className="w-5 h-5 text-emerald-400" />,
                title: "Грамотное CV",
                desc: 'Резюме строго на 1 страницу в PDF. Описывай коммерческие или учебные проекты через стек задач: "Сделал стейт на RTK", а не "Знаю основы JS".',
              },
              {
                icon: <FolderGit2 className="w-5 h-5 text-purple-400" />,
                title: "Реальные проекты",
                desc: "Забудь про туториалы из YouTube. В твоем портфолио должен быть сложный, уникальный SPA/Fullstack проект, созданный своими руками.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/30 border border-slate-900 p-5 rounded-xl flex flex-col justify-between hover:bg-slate-900/60 hover:border-slate-800 transition-all duration-200 backdrop-blur-sm"
              >
                <div className="space-y-3">
                  <div className="p-2 bg-slate-950 border border-slate-850 rounded-lg w-fit">
                    {item.icon}
                  </div>
                  <h3 className="text-sm font-bold text-slate-200">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INTERACTIVE CHECKLIST */}
        <section className="bg-slate-900/20 border border-slate-900 p-6 md:p-8 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <UserCheck className="w-4 h-4" /> Интерактивный тест: Готов ли ты к
            поиску?
          </h3>
          <div className="space-y-3">
            {checklist.map((item) => (
              <button
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className="w-full text-left flex items-start gap-3 p-3 rounded-lg bg-slate-950/60 border border-slate-900 hover:border-slate-800 transition-colors text-xs md:text-sm"
              >
                {item.checked ? (
                  <CheckSquare className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                ) : (
                  <Square className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                )}
                <span
                  className={
                    item.checked
                      ? "line-through text-slate-500"
                      : "text-slate-300"
                  }
                >
                  {item.text}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* 2. ГДЕ ИСКАТЬ РАБОТУ (PLATFORMS) */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span className="text-purple-400 font-mono text-lg">02 /</span>{" "}
              Где искать вакансии и заказы?
            </h2>
            <p className="text-slate-400 text-xs md:text-sm mt-1">
              Не ограничивайся одним сайтом. Разделяй каналы получения офферов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {platforms.map((p, idx) => (
              <div
                key={idx}
                className={`border ${p.color} rounded-2xl p-6 flex flex-col justify-between space-y-4`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-2 bg-slate-950 border border-slate-850 rounded-lg">
                        {p.icon}
                      </div>
                      <h3 className="text-base font-bold text-white">
                        {p.name}
                      </h3>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-950 border border-slate-850 rounded text-slate-400">
                      {p.type}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="p-3 bg-slate-950/80 border border-slate-900 rounded-xl text-[11px]">
                  <span className="font-bold text-indigo-400 block mb-0.5">
                    💡 Лайфхак для джуна:
                  </span>
                  <span className="text-slate-300 italic">"{p.tip}"</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. СОВЕТЫ И СТРАТЕГИЯ */}
        <section className="grid md:grid-cols-3 gap-6 items-stretch">
          {/* Собеседование */}
          <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-xl flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-emerald-400 uppercase font-mono tracking-wider">
                Как пройти собес
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  •{" "}
                  <strong className="text-white">
                    Говори про инженерную логику:
                  </strong>{" "}
                  Не зазубривай синтаксис, объясняй, *почему* ты выбрал именно
                  Redux Toolkit, а не Context API в своем проекте.
                </li>
                <li>
                  •{" "}
                  <strong className="text-white">
                    Не бойся говорить "Я не знаю":
                  </strong>{" "}
                  Тимлиды ненавидят, когда джуны врут или выдумывают термины.
                  Говори: "Я не сталкивался с этим на практике, но логически я
                  бы решил это так...".
                </li>
              </ul>
            </div>
          </div>

          {/* Ошибки новичков */}
          <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-xl flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-rose-400 uppercase font-mono tracking-wider flex items-center gap-1">
                <AlertTriangle className="w-4 h-4" /> Ошибки новичков
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  •{" "}
                  <strong className="text-white">
                    Веерный отклик без разбора:
                  </strong>{" "}
                  Ссылать одно стандартное резюме на 500 вакансий без адаптации
                  под требования компании — путь в корзину.
                </li>
                <li>
                  • <strong className="text-white">Синдром самозванца:</strong>{" "}
                  Ждать, пока ты выучишь *вообще всё*, прежде чем сделать первый
                  отклик. Рынок требует готовности учиться в процессе работы.
                </li>
              </ul>
            </div>
          </div>

          {/* Первый заказ */}
          <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-xl flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-cyan-400 uppercase font-mono tracking-wider">
                Первый заказ (Фриланс)
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                <li>
                  •{" "}
                  <strong className="text-white">
                    Решай боли бизнеса напрямую:
                  </strong>{" "}
                  Вместо "Я знаю React", пиши клиенту: "Я посмотрел на ваш сайт,
                  у вас долго грузятся картинки на главной. Я могу переписать
                  этот блок на Vite за 2 дня, чтобы вы не теряли клиентов".
                </li>
                <li>
                  • <strong className="text-white">Демпинг на старте:</strong>{" "}
                  Первые 2-3 заказа можно сделать чуть дешевле рынка ради
                  отзывов и портфолио. Но не бесплатно!
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FINAL WORDS */}
        <section className="text-center max-w-xl mx-auto space-y-4 pt-8 border-t border-slate-900">
          <div className="p-2.5 bg-indigo-950/40 border border-indigo-900/30 rounded-full w-fit mx-auto">
            <Briefcase className="w-5 h-5 text-indigo-400" />
          </div>
          <h3 className="text-lg font-bold">Напутствие ментора</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            Поиск первой работы — это тоже полноценная работа. Будут отказы,
            будут игноры — это нормальная часть воронки найма. Главный секрет
            успеха джуниора: продолжать ежедневно отправлять качественные
            отклики, параллельно улучшая свой код на GitHub. Кто не бросает —
            тот находит.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 text-center py-10 text-[10px] text-slate-600 font-mono tracking-wider">
        <p>© 2026 Твой Выпускной Лекторий. Время писать код и зарабатывать.</p>
      </footer>
    </div>
  );
}
