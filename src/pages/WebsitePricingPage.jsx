import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Server,
  Cpu,
  Database,
  Code,
  DollarSign,
  Flame,
  Zap,
  HelpCircle,
  Layers,
  CheckCircle,
  Clock,
  Briefcase,
  ArrowLeft,
} from "lucide-react";

export default function WebsitePricingPage() {
  const siteTypes = {
    landing: {
      title: "Простой сайт",
      subtitle: "Лендинг, портфолио, визитка",
      price: "$50 – $300",
      time: "2–7 дней",
      complexity: "Низкая",
      features: [
        "1-3 страницы",
        "Готовый дизайн / Шаблон",
        "Форма обратной связи",
        "Без сложной логики",
        "Бесплатный хостинг",
      ],
    },
    shop: {
      title: "Интернет-магазин",
      subtitle: "Каталог, корзина, заказы",
      price: "$500 – $5000",
      time: "2–6 недель",
      complexity: "Средняя",
      features: [
        "Авторизация пользователей",
        "База данных (товары, заказы)",
        "Интеграция оплаты",
        "Админ-панель для менеджера",
        "Уведомления в Telegram/Email",
      ],
    },
    saas: {
      title: "Сложный проект",
      subtitle: "Соцсеть, CRM, SaaS, Платформа",
      price: "$5000 – $50,000+",
      time: "2–6 месяцев+",
      complexity: "Высокая",
      features: [
        "Сложная бизнес-логика",
        "Высокая безопасность данных",
        "Собственный кастомный Backend",
        "Масштабируемая база данных",
        "Реалтайм чаты / Аналитика",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white antialiased relative">
      {/* ФОНОВЫЕ ГРАДИЕНТЫ ДЛЯ TECH DESIGN */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* ШАПКА / HERO SECTION */}
      <header className="relative py-24 px-4 max-w-6xl mx-auto text-center border-b border-slate-900 overflow-hidden">
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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-950/40 border border-indigo-800/30 rounded-full text-indigo-400 text-xs font-mono mb-6 backdrop-blur-md"
        >
          <DollarSign className="w-3.5 h-3.5" /> Экономика веб-разработки для
          Frontend-курса
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6"
        >
          Сколько На Самом Деле <br />
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Стоит Создать Сайт?
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto"
        >
          Разбираем ценообразование digital-рынка простыми словами. Из чего
          складывается чек, за что платит клиент и как сделать проект абсолютно
          бесплатно.
        </motion.p>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* РАЗДЕЛ 1: ОТ ЧЕГО ЗАВИСИТ ЦЕНА */}
        <section className="grid md:grid-cols-12 gap-8 items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
            className="md:col-span-5 space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-black">
              Как формируется стоимость?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Сайт — это не готовый товар на полке магазина. Это инженерное
              решение. Цена никогда не берется из головы, она всегда завязана на{" "}
              <strong className="text-slate-200">6 ключевых факторах</strong>:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              {[
                "Сложность логики",
                "Количество функций",
                "Уникальность дизайна",
                "Наличие Backend",
                "Структура базы данных",
                "Время разработки",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-slate-900/60 p-2 rounded-lg border border-slate-850"
                >
                  <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />{" "}
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-slate-900/30 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-md"
          >
            <h3 className="text-lg font-bold mb-4 text-indigo-400 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" /> Чек-лист: Вопросы для оценки
              проекта
            </h3>
            <p className="text-slate-400 text-xs mb-4">
              Прежде чем назвать цену клиенту, профессиональный разработчик
              всегда задает эти вопросы:
            </p>
            <div className="space-y-2.5">
              {[
                "Что именно должен делать сайт? (Какая главная бизнес-цель)",
                "Нужна ли база данных для хранения информации?",
                "Будет ли на сайте авторизация и личные кабинеты?",
                "Сколько примерно уникальных страниц нужно сверстать?",
                "Нужна ли панель администратора для управления контентом?",
              ].map((q, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 text-xs text-slate-300"
                >
                  <span className="text-indigo-500 font-mono font-bold">
                    0{i + 1}.
                  </span>
                  <p>{q}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* РАЗДЕЛ 2: АНАТОМИЯ РАСХОДОВ (GLASSMORPHISM CARDS) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black">
              Из чего состоит инфраструктура сайта?
            </h2>
            <p className="text-slate-400 text-sm">
              Любой работающий сайт в интернете требует технических ресурсов.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                icon: <Globe className="w-5 h-5 text-sky-400" />,
                title: "1. Домен",
                desc: "Уникальное имя сайта в сети (например, mysite.com). Всегда платный, аренда продлевается раз в год.",
              },
              {
                icon: <Server className="w-5 h-5 text-emerald-400" />,
                title: "2. Хостинг",
                desc: "Физический сервер, где крутится твой код (Vercel, Firebase Hosting, VPS). Должен работать 24/7.",
              },
              {
                icon: <Cpu className="w-5 h-5 text-indigo-400" />,
                title: "3. Backend",
                desc: "Серверный мозг сайта. Отвечает за логику обработки запросов, генерацию API и безопасность.",
              },
              {
                icon: <Database className="w-5 h-5 text-purple-400" />,
                title: "4. Database",
                desc: "База данных (NoSQL/SQL). Место, где надежно хранятся пароли юзеров, корзины, посты и лайки.",
              },
              {
                icon: <Code className="w-5 h-5 text-pink-400" />,
                title: "5. Разработка",
                desc: "Оплата часов инженера: проектирование архитектуры, UI дизайн, верстка, написание кода и тесты.",
              },
            ].map((comp, i) => (
              <div
                key={i}
                className="bg-slate-900/40 border border-slate-850 p-5 rounded-xl flex flex-col justify-between hover:border-indigo-500/40 hover:bg-slate-900/80 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="space-y-3">
                  <div className="p-2 bg-slate-950 rounded-lg border border-slate-800 w-fit">
                    {comp.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-200">
                    {comp.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* РАЗДЕЛ 3: СКОЛЬКО СТОИТ САЙТ (PRICING CARDS) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black">
              Рыночные тарифы по типам проектов
            </h2>
            <p className="text-slate-400 text-sm">
              Примерные диапазоны цен на рынке фриланса и студийной разработки.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.keys(siteTypes).map((key) => {
              const current = siteTypes[key];
              return (
                <div
                  key={key}
                  className={`border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                    key === "shop"
                      ? "bg-gradient-to-b from-indigo-950/40 to-slate-900/60 border-indigo-500/50 shadow-2xl shadow-indigo-950/20"
                      : "bg-slate-900/40 border-slate-850"
                  }`}
                >
                  {key === "shop" && (
                    <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-xl font-mono">
                      Самый частый заказ
                    </div>
                  )}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {current.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {current.subtitle}
                      </p>
                    </div>

                    <div className="py-2 border-y border-slate-800/60 my-2 flex items-baseline gap-2">
                      <span className="text-2xl md:text-3xl font-black text-indigo-400">
                        {current.price}
                      </span>
                    </div>

                    <div className="space-y-1 text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />{" "}
                        <span className="text-slate-300">Срок:</span>{" "}
                        {current.time}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-slate-500" />{" "}
                        <span className="text-slate-300">Сложность:</span>{" "}
                        {current.complexity}
                      </div>
                    </div>

                    <ul className="space-y-2 pt-2 text-xs text-slate-300">
                      {current.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* РАЗДЕЛ 4: СРАВНИТЕЛЬНАЯ ТАБЛИЦА */}
        <section className="space-y-4">
          <h3 className="text-xl font-bold text-center md:text-left">
            Сводная таблица для быстрого анализа
          </h3>
          <div className="border border-slate-850 rounded-xl overflow-hidden bg-slate-900/20 backdrop-blur-sm overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs md:text-sm">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-850 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  <th className="p-4">Тип сайта</th>
                  <th className="p-4">Сложность логики</th>
                  <th className="p-4">Ориентировочная цена</th>
                  <th className="p-4 text-right">Сроки сборки</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850/60 text-slate-300">
                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-4 font-bold text-white">
                    Лендинг / Визитка
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-900 rounded text-[10px]">
                      Низкая
                    </span>
                  </td>
                  <td className="p-4 font-mono text-indigo-400 font-bold">
                    $50 – $300
                  </td>
                  <td className="p-4 text-right text-slate-400">2 – 7 дней</td>
                </tr>
                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-4 font-bold text-white">Интернет-магазин</td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 bg-amber-950 text-amber-400 border border-amber-900 rounded text-[10px]">
                      Средняя
                    </span>
                  </td>
                  <td className="p-4 font-mono text-indigo-400 font-bold">
                    $500 – $5000
                  </td>
                  <td className="p-4 text-right text-slate-400">
                    2 – 6 недель
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/30 transition-colors">
                  <td className="p-4 font-bold text-white">
                    SaaS / Большие платформы
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-0.5 bg-rose-950 text-rose-400 border border-rose-900 rounded text-[10px]">
                      Высокая
                    </span>
                  </td>
                  <td className="p-4 font-mono text-indigo-400 font-bold">
                    $5000 – $50,000+
                  </td>
                  <td className="p-4 text-right text-slate-400">
                    2 – 6 месяцев
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* РАЗДЕЛ 5: КАК СДЕЛАТЬ БЕСПЛАТНО (ДЛЯ СТУДЕНТОВ) */}
        <section className="bg-gradient-to-br from-indigo-950/20 to-purple-950/20 border border-indigo-900/30 rounded-2xl p-6 md:p-10 space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400 fill-yellow-400" /> Можно
              ли сделать сайт за $0?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mt-2">
              <strong className="text-white">Да, абсолютно!</strong> Для
              студентов курса, создания личных портфолио, пет-проектов и
              тестирования бизнес-идей платить за инфраструктуру не нужно
              вообще. Индустрия дает крутые бесплатные лимиты (Free Tiers):
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950/60 border border-slate-850 p-5 rounded-xl space-y-3">
              <div className="flex items-center gap-2">
                <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                <h4 className="font-bold text-slate-200">
                  Firebase (Облачный бэкенд)
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Google предоставляет бесплатный хостинг, авторизацию
                пользователей и NoSQL базу данных Firestore. Бесплатного тарифа
                хватит с головой на все твои учебные проекты и первые несколько
                тысяч реальных посетителей твоего сайта.
              </p>
            </div>

            <div className="bg-slate-950/60 border border-slate-850 p-5 rounded-xl space-y-3">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400" />
                <h4 className="font-bold text-slate-200">
                  Vercel (Хостинг для Frontend)
                </h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Идеальный хостинг для SPA приложений на React или Next.js. Ты
                просто подключаешь свой GitHub-репозиторий, и Vercel
                автоматически разворачивает (деплоит) твой сайт в глобальную
                сеть при каждом новом коммите за пару секунд.
              </p>
            </div>
          </div>
        </section>

        {/* МЕНТОРСКИЙ БЛОК: ПОЧЕМУ ТАК ДОРОГО */}
        <section className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl space-y-4">
          <h3 className="text-lg md:text-xl font-bold text-slate-200 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-indigo-400" /> Почему опытные
            разработчики берут дорого?
          </h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
            Новички часто думают: «Почему студии берут по $10,000 за сайт, если
            я могу набросать его на React за три дня?». Разница кроется в вещах,
            которые незаметны на первый взгляд:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 text-xs pt-2">
            <div className="space-y-1">
              <span className="font-bold text-white block">
                📐 Архитектура и масштабируемость
              </span>
              <p className="text-slate-400">
                Профи пишет код так, чтобы при росте базы данных или добавлении
                новых фич через год сайт не пришлось переписывать заново.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-white block">
                🔒 Безопасность и отказоустойчивость
              </span>
              <p className="text-slate-400">
                Защита от SQL-инъекций, правильное кэширование, обработка ошибок
                серверов и готовность сайта выдерживать высокие нагрузки (DDOS).
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-white block">
                📈 Маркетинг и SEO-оптимизация
              </span>
              <p className="text-slate-400">
                Правильная семантика тегов, микроразметка, высокая скорость
                загрузки картинок для того, чтобы поисковые роботы Google
                выводили сайт в топ.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ФУТЕР */}
      <footer className="border-t border-slate-900 bg-slate-950 text-center py-12 text-xs text-slate-600 font-mono">
        <p>
          © 2026 Курс Frontend Разработки. Понимать экономику проектов — шаг к
          уровню Senior.
        </p>
      </footer>
    </div>
  );
}
