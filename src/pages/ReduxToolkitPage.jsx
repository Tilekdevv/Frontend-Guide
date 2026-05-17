import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Boxes,
  History,
  Zap,
  ShieldAlert,
  RefreshCw,
  CheckCircle,
  XCircle,
  HelpCircle,
  Sparkles,
  ArrowLeft,
  Code,
  ShoppingCart,
  User,
  Heart,
  Package,
} from "lucide-react";

export default function ReduxToolkitPage() {
  // Состояния для интерактивного симулятора AsyncThunk
  const [thunkState, setThunkState] = useState("idle"); // idle, pending, fulfilled, rejected

  // Состояния для интерактивной схемы
  const [activeDiagramStep, setActiveDiagramStep] = useState(null);

  const diagramSteps = [
    {
      id: "component",
      title: "1. UI Компонент",
      desc: "Пользователь кликает кнопку «Купить». Компонент вызывает useDispatch().",
    },
    {
      id: "action",
      title: "2. Action (Команда)",
      desc: 'Отправляется объект-команда, например: { type: "cart/addItem", payload: product }',
    },
    {
      id: "reducer",
      title: "3. Reducer (Функция)",
      desc: "Чистая функция внутри Slice ловит чистый экшен и безопасно меняет состояние.",
    },
    {
      id: "store",
      title: "4. Global Store",
      desc: "Единый источник правды обновляется. useSelector() мгновенно перерисовывает UI.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white relative pb-24 overflow-x-hidden">
      {/* ДЕКОРАТИВНЫЕ ГРАДИЕНТНЫЕ СФЕРЫ */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* ШАПКА / HERO SECTION */}
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
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-950/40 border border-indigo-800/40 rounded-full text-indigo-400 text-xs font-mono mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" /> Модуль: Продвинутое управление
          состоянием (State Management)
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-none"
        >
          Мастерим <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Redux Toolkit & AsyncThunk
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed"
        >
          Гайд для frontend-разработчиков. Разбираем глобальную архитектуру
          данных, синхронизацию с API бэкенда и учимся избегать хаоса в больших
          проектах.
        </motion.p>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-16 space-y-24">
        {/* 1. ВВЕДЕНИЕ И ИСТОРИЯ */}
        <section className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                <Boxes className="w-5 h-5 text-indigo-400" /> Что такое Redux
                Toolkit?
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                <strong className="text-slate-200">Redux Toolkit (RTK)</strong>{" "}
                — это официальный, современный инструмент для управления
                глобальным состоянием в React-приложениях. Он создает{" "}
                <span className="text-indigo-400 font-semibold">
                  Single Source of Truth
                </span>{" "}
                (Единый источник правды) — одну общую базу данных (Store) для
                всего вашего фронтенда.
              </p>
            </div>

            <div className="bg-slate-900/40 border border-slate-900 p-5 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase tracking-wider">
                <History className="w-4 h-4 text-purple-400" /> Немного истории
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Раньше существовал классический Redux. Он был мощным, но
                требовал написания огромного количества шаблонного кода (
                <span className="text-rose-400">boilerplate</span>). Чтобы
                сделать простое изменение, приходилось создавать 4-5 разных
                файлов.
              </p>
              <p className="text-xs text-slate-300">
                <strong className="text-white">
                  Redux Toolkit появился как спасение:
                </strong>{" "}
                он объединил в себе лучшие практики, позволил писать меньше
                кода, автоматически подключил инструмент Redux DevTools и
                защитил разработчиков от случайных мутаций стейта.
              </p>
            </div>
          </div>

          <div className="md:col-span-5 bg-gradient-to-b from-indigo-950/20 to-slate-900/40 border border-indigo-900/30 p-6 rounded-2xl space-y-4 backdrop-blur-sm">
            <h3 className="text-sm font-bold uppercase tracking-wide font-mono text-indigo-400">
              Зачем его создали?
            </h3>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Минимум кода:</strong> Логика
                  экшенов и редюсеров теперь пишется в одном месте (Slice).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Безопасность:</strong> Под
                  капотом встроена библиотека Immer, которая позволяет безопасно
                  мутировать стейт привычным путем (`state.value = 5`).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">Готовая структура:</strong>{" "}
                  Помогает всей команде писать предсказуемый код по единому
                  стандарту.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* 2. КАКИЕ ПРОБЛЕМЫ РЕШАЕТ */}
        <section className="space-y-6">
          <h3 className="text-lg font-bold uppercase font-mono text-slate-400 tracking-wider">
            Проблемы, которые RTK стирает навсегда:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Props Drilling",
                text: "Когда вам нужно передать данные с самого верхнего компонента на 10 уровней вниз через промежуточные компоненты, которым эти данные не нужны.",
              },
              {
                title: "Хаос в стейтах",
                text: "Когда в больших проектах состояние размазано по сотням useState, и становится невозможно отследить, какой компонент и когда изменил данные.",
              },
              {
                title: "Синхронизация с API",
                text: "Упрощает обработку состояний загрузки (Loading), успешного ответа от бэкенда и перехвата ошибок сети.",
              },
              {
                title: "Отсутствие централизации",
                text: "Позволяет любому компоненту в приложении мгновенно получить доступ или изменить данные в Store из любой точки дерева.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-slate-900/30 border border-slate-900 p-5 rounded-xl space-y-2 hover:border-slate-800 transition-colors"
              >
                <span className="text-xs font-mono text-indigo-500 font-bold">
                  0{i + 1}.
                </span>
                <h4 className="text-sm font-bold text-slate-200">{p.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. СРАВНИТЕЛЬНЫЙ АНАЛИЗ (ТАБЛИЦА) */}
        <section className="space-y-4">
          <div className="max-w-xl">
            <h3 className="text-lg font-bold uppercase">
              React State vs Context API vs Redux Toolkit
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              Выбирайте инструмент под конкретную инженерную задачу.
            </p>
          </div>

          <div className="border border-slate-900 rounded-xl overflow-hidden bg-slate-900/10 backdrop-blur-sm overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-900 text-slate-500 font-mono text-[10px] uppercase tracking-wider">
                  <th className="p-4">Критерий</th>
                  <th className="p-4">React useState</th>
                  <th className="p-4">Context API</th>
                  <th className="p-4">Redux Toolkit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900 text-slate-300">
                <tr className="hover:bg-slate-900/20 transition-colors">
                  <td className="p-4 font-bold text-white">
                    Область видимости
                  </td>
                  <td className="p-4 text-slate-400">
                    Локальная (внутри компонента)
                  </td>
                  <td className="p-4 text-slate-400">
                    Глобальная (в рамках Провайдера)
                  </td>
                  <td className="p-4 text-indigo-400 font-semibold">
                    Глобальная (весь проект)
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/20 transition-colors">
                  <td className="p-4 font-bold text-white">
                    Сложность настройки
                  </td>
                  <td className="p-4 text-slate-400">
                    Очень просто (в один клик)
                  </td>
                  <td className="p-4 text-slate-400">Средняя</td>
                  <td className="p-4 text-slate-400">
                    Требует начальной архитектуры
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/20 transition-colors">
                  <td className="p-4 font-bold text-white">
                    Рендеринг и Оптимизация
                  </td>
                  <td className="p-4 text-slate-400">
                    Перерисовывает компонент
                  </td>
                  <td className="p-4 text-rose-400">
                    Перерисовывает всех потребителей
                  </td>
                  <td className="p-4 text-emerald-400 font-semibold">
                    Точечный (строго где изменился селектор)
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/20 transition-colors">
                  <td className="p-4 font-bold text-white">
                    Для чего подходит
                  </td>
                  <td className="p-4 text-slate-400">
                    Формы, переключатели, табы
                  </td>
                  <td className="p-4 text-slate-400">
                    Смена темы, локализация языка
                  </td>
                  <td className="p-4 text-slate-400">
                    Большие приложения, интернет-магазины, CRM
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 4. АНАТОМИЯ И ИНТЕРАКТИВНАЯ СХЕМА ЦИКЛА ДАННЫХ */}
        <section className="space-y-8">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold uppercase tracking-tight">
              02 / Анатомия ядра и круговорот данных
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              Кликните на элементы схемы ниже, чтобы понять, как циркулирует
              состояние в Redux архитектуре.
            </p>
          </div>

          {/* ИНТЕРАКТИВНАЯ СХЕМА-ВИЗУАЛИЗАЦИЯ */}
          <div className="grid md:grid-cols-4 gap-4 relative">
            {diagramSteps.map((step) => (
              <div
                key={step.id}
                onClick={() =>
                  setActiveDiagramStep(
                    step.id === activeDiagramStep ? null : step.id,
                  )
                }
                className={`p-5 rounded-xl border text-left cursor-pointer transition-all duration-300 relative ${
                  activeDiagramStep === step.id
                    ? "bg-indigo-950/50 border-indigo-500 shadow-xl shadow-indigo-950/50 scale-[1.02]"
                    : "bg-slate-900/30 border-slate-900 hover:border-slate-800"
                }`}
              >
                <h4 className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {step.desc}
                </p>
                <div className="absolute bottom-3 right-3 text-[10px] text-slate-600 font-mono">
                  {activeDiagramStep === step.id ? "Закрыть" : "Подробнее"}
                </div>
              </div>
            ))}
          </div>

          {/* ПАНЕЛЬ ВЫВОДА ДЕТАЛЕЙ СХЕМЫ */}
          <AnimatePresence mode="wait">
            {activeDiagramStep && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-slate-900/80 border border-slate-850 p-5 rounded-xl text-xs space-y-2 font-mono text-slate-300 max-w-2xl mx-auto"
              >
                <div className="text-indigo-400 font-bold uppercase">
                  📋 Архитектурный разбор шага:
                </div>
                <p className="text-slate-200">
                  {diagramSteps.find((s) => s.id === activeDiagramStep).desc}
                </p>
                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-850">
                  {activeDiagramStep === "component" &&
                    "Здесь мы используем хук useDispatch() для отправки намерения совершить действие."}
                  {activeDiagramStep === "action" &&
                    "Экшен — это простой объект. Поле type говорит редюсеру, что делать, а payload несет новые полезные данные."}
                  {activeDiagramStep === "reducer" &&
                    "Редюсеры не меняют старый стейт напрямую, они возвращают обновленную копию благодаря Immer."}
                  {activeDiagramStep === "store" &&
                    "Компоненты, подписанные на этот кусок пирога через useSelector(), автоматически обновляют свой интерфейс."}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ТЕРМИНОЛОГИЧЕСКИЙ СЛОВАРЬ (ГЛОССАРИЙ) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-900/20 border border-slate-900 rounded-lg">
              <span className="font-bold text-white block mb-1">
                📦 Global Store
              </span>
              <p className="text-slate-400">
                Главный сейф с данными приложения. Передается всему приложению
                через компонент Provider.
              </p>
            </div>
            <div className="p-4 bg-slate-900/20 border border-slate-900 rounded-lg">
              <span className="font-bold text-white block mb-1">
                🍰 Slice (Кусочек стейта)
              </span>
              <p className="text-slate-400">
                Изолированный модуль логики. Например: cartSlice (корзина),
                userSlice (авторизация).
              </p>
            </div>
            <div className="p-4 bg-slate-900/20 border border-slate-900 rounded-lg">
              <span className="font-bold text-white block mb-1">
                ⚡ Hooks: Selector & Dispatch
              </span>
              <p className="text-slate-400">
                useSelector вытягивает данные из хранилища в компонент.
                useDispatch отправляет команды на изменения.
              </p>
            </div>
          </div>
        </section>

        {/* 5. ASYNCTHUNK + API СИМУЛЯТОР */}
        <section className="space-y-8 bg-gradient-to-br from-slate-900 to-indigo-950/20 border border-slate-900 p-6 md:p-10 rounded-2xl relative">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-purple-400 uppercase tracking-widest font-bold">
              Важнейший модуль
            </span>
            <h3 className="text-xl md:text-2xl font-black uppercase text-white mt-1">
              03 / Работа с API через AsyncThunk
            </h3>
            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              API — это мост между Frontend и Backend. Запросы к серверу не
              происходят мгновенно, они занимают время. Для обработки этого
              асинхронного процесса в RTK существует специальный инструмент —{" "}
              <strong className="text-indigo-400 font-mono">
                createAsyncThunk
              </strong>
              .
            </p>
          </div>

          {/* ИНТЕРАКТИВНЫЙ СИМУЛЯТОР ТРЕХ СОСТОЯНИЙ */}
          <div className="space-y-4 max-w-2xl mx-auto bg-slate-950 border border-slate-900 p-5 rounded-xl">
            <div className="text-xs font-mono text-slate-400 mb-2">
              Интерактивный кликер: протестируй фазы жизненного цикла API
              запроса:
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setThunkState("pending")}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${thunkState === "pending" ? "bg-amber-600 text-white" : "bg-slate-900 text-slate-400 hover:bg-slate-850"}`}
              >
                1. pending (Ожидание)
              </button>
              <button
                onClick={() => setThunkState("fulfilled")}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${thunkState === "fulfilled" ? "bg-emerald-600 text-white" : "bg-slate-900 text-slate-400 hover:bg-slate-850"}`}
              >
                2. fulfilled (Успех)
              </button>
              <button
                onClick={() => setThunkState("rejected")}
                className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${thunkState === "rejected" ? "bg-rose-600 text-white" : "bg-slate-900 text-slate-400 hover:bg-slate-850"}`}
              >
                3. rejected (Ошибка)
              </button>
              <button
                onClick={() => setThunkState("idle")}
                className="px-3 py-1.5 rounded text-xs font-mono bg-slate-900 text-slate-500 hover:bg-slate-850 ml-auto"
              >
                Сбросить
              </button>
            </div>

            {/* ЭКРАН ВЫВОДА СИМУЛЯТОРА */}
            <div className="mt-4 p-4 bg-slate-900/60 border border-slate-850 rounded-lg flex items-center justify-center min-h-[80px]">
              <AnimatePresence mode="wait">
                {thunkState === "idle" && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-slate-500 text-xs italic flex items-center gap-2"
                  >
                    <HelpCircle className="w-4 h-4" /> Нажмите любую фазу
                    запроса выше, чтобы увидеть логику UI...
                  </motion.div>
                )}
                {thunkState === "pending" && (
                  <motion.div
                    key="pending"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-amber-400 text-xs font-mono flex items-center gap-3"
                  >
                    <RefreshCw className="w-4 h-4 animate-spin" />{" "}
                    <span>
                      [LOADING STATE]: Запрос улетел на сервер. UI показывает
                      красивый Скелетон или Спиннер.
                    </span>
                  </motion.div>
                )}
                {thunkState === "fulfilled" && (
                  <motion.div
                    key="fulfilled"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-emerald-400 text-xs font-mono flex items-center gap-3"
                  >
                    <CheckCircle className="w-4 h-4 shrink-0" />{" "}
                    <span>
                      [SUCCESS STATE]: Данные успешно пришли. Стейт обновлен
                      списком товаров:{" "}
                      <code className="text-slate-200 font-sans bg-slate-950 px-1 py-0.5 rounded">
                        ['iPhone', 'MacBook']
                      </code>
                    </span>
                  </motion.div>
                )}
                {thunkState === "rejected" && (
                  <motion.div
                    key="rejected"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-rose-400 text-xs font-mono flex items-center gap-3"
                  >
                    <XCircle className="w-4 h-4 shrink-0" />{" "}
                    <span>
                      [ERROR STATE]: Ошибка сети / Сервер лег. UI прячет
                      скелетон и выводит юзеру алерт:{" "}
                      <code className="text-rose-300 font-sans bg-slate-950 px-1 py-0.5 rounded">
                        «Не удалось загрузить данные»
                      </code>
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* 6. КОГДА НЕ НУЖНО ИСПОЛЬЗОВАТЬ REDUX */}
        <section className="bg-slate-900/40 border border-slate-900 p-6 md:p-8 rounded-2xl space-y-4">
          <h3 className="text-base font-bold text-slate-200 uppercase tracking-wide flex items-center gap-2 font-mono">
            <ShieldAlert className="w-5 h-5 text-rose-500" /> Когда НЕ нужно
            использовать Redux Toolkit?
          </h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
            Архитектурная зрелость разработчика заключается в умении не пихать
            Redux во все проекты подряд. Запомните правила:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-xs pt-2">
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-900 space-y-1">
              <span className="font-bold text-white block">
                1. Маленькие проекты и лендинги
              </span>
              <p className="text-slate-400">
                Если на вашем сайте всего 2-3 страницы и парочка форм обратной
                связи, обычных хуков `useState` будет более чем достаточно.
              </p>
            </div>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-900 space-y-1">
              <span className="font-bold text-white block">
                2. Формы локального ввода
              </span>
              <p className="text-slate-400">
                Контролируемые инпуты ввода (текст в поле авторизации, пароль)
                должны жить локально в useState компонента, а не отправляться в
                глобальный стор при каждом нажатии клавиши.
              </p>
            </div>
          </div>
        </section>

        {/* 7. ПРИМЕРЫ КОДА */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold uppercase tracking-tight">
              04 / Примеры кода
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              Реальные примеры создания Slice и работы с AsyncThunk
            </p>
          </div>

          {/* Пример 1: Создание Slice */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center gap-2">
              <Code className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-mono text-slate-400">
                cartSlice.js - Создание Slice для корзины
              </span>
            </div>
            <div className="p-5">
              <pre className="text-xs text-slate-300 font-mono leading-relaxed overflow-x-auto">
                <code>{`import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0
  },
  reducers: {
    addItem: (state, action) => {
      // Immer позволяет "мутировать" state напрямую
      state.items.push(action.payload);
      state.totalAmount += action.payload.price;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;`}</code>
              </pre>
            </div>
          </div>

          {/* Пример 2: AsyncThunk */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center gap-2">
              <Code className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono text-slate-400">
                productsSlice.js - AsyncThunk для загрузки товаров
              </span>
            </div>
            <div className="p-5">
              <pre className="text-xs text-slate-300 font-mono leading-relaxed overflow-x-auto">
                <code>{`import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// AsyncThunk для загрузки товаров с API
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://api.example.com/products');
    return response.json();
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default productsSlice.reducer;`}</code>
              </pre>
            </div>
          </div>

          {/* Пример 3: Использование в компоненте */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center gap-2">
              <Code className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-mono text-slate-400">
                ProductList.jsx - Использование в компоненте
              </span>
            </div>
            <div className="p-5">
              <pre className="text-xs text-slate-300 font-mono leading-relaxed overflow-x-auto">
                <code>{`import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './productsSlice';

function ProductList() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <div>Загрузка товаров...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  return (
    <div>
      {items.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.price} ₽</p>
        </div>
      ))}
    </div>
  );
}`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* 8. РЕАЛЬНЫЕ USE CASES */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold uppercase tracking-tight">
              05 / Реальные примеры использования
            </h3>
            <p className="text-slate-400 text-xs mt-1">
              Где Redux Toolkit используется в реальных проектах
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <ShoppingCart className="w-6 h-6 text-blue-400" />,
                title: "Интернет-магазин",
                desc: "Корзина товаров, избранное, фильтры, сортировка",
                example:
                  "Пользователь добавляет товары в корзину из разных страниц. Redux хранит все товары в одном месте.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: <User className="w-6 h-6 text-purple-400" />,
                title: "Авторизация пользователя",
                desc: "Логин, профиль, токены, права доступа",
                example:
                  "После входа данные пользователя доступны на всех страницах без повторных запросов.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: <Heart className="w-6 h-6 text-rose-400" />,
                title: "Избранное / Wishlist",
                desc: "Сохранение понравившихся товаров",
                example:
                  "Пользователь добавляет товары в избранное. Список синхронизируется с сервером через API.",
                gradient: "from-rose-500 to-pink-500",
              },
              {
                icon: <Package className="w-6 h-6 text-emerald-400" />,
                title: "Админ-панель / CRM",
                desc: "Управление заказами, пользователями, статистикой",
                example:
                  "Сложные таблицы с фильтрами, пагинацией и real-time обновлениями данных.",
                gradient: "from-emerald-500 to-teal-500",
              },
            ].map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-slate-700 transition-all"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center mb-4`}
                >
                  {useCase.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">
                  {useCase.title}
                </h4>
                <p className="text-sm text-slate-400 mb-3">{useCase.desc}</p>
                <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-lg">
                  <p className="text-xs text-slate-300 italic">
                    💡 {useCase.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ФИНАЛЬНЫЙ БЛОК */}
        <section className="text-center max-w-xl mx-auto space-y-4 pt-8 border-t border-slate-900">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-2xl font-bold text-white">Итог</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Redux Toolkit — это мощный инструмент для управления состоянием в
            больших React приложениях. Он решает проблемы props drilling,
            упрощает работу с API и делает код предсказуемым. Используйте его в
            проектах, где нужна централизованная логика и масштабируемость.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-semibold text-white hover:shadow-lg transition-all"
          >
            Вернуться на главную
          </Link>
        </section>
      </main>

      {/* МИНИМАЛИСТИЧНЫЙ ФУТЕР */}
      <footer className="border-t border-slate-900 text-center py-12 text-[10px] text-slate-600 font-mono tracking-widest">
        <p>
          © 2026 Академия Frontend Инженерии. Меньше бойлерплейта — чище код.
        </p>
      </footer>
    </div>
  );
}
