import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Heart,
  Zap,
  Target,
  TrendingUp,
  Code,
  Rocket,
  Star,
  ArrowLeft,
  Award,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function MotivationPage() {
  const quotes = [
    {
      text: "Каждый эксперт когда-то был новичком. Разница лишь в том, что эксперт не сдался.",
      author: "Неизвестный разработчик",
    },
    {
      text: "Код, который ты пишешь сегодня, определяет твою карьеру завтра.",
      author: "Твой будущий успех",
    },
    {
      text: "Не сравнивай себя с другими. Сравнивай себя с собой вчерашним.",
      author: "Мудрость программиста",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950 text-slate-100 font-sans antialiased selection:bg-pink-500 selection:text-white relative overflow-hidden">
      {/* ANIMATED BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[150px] animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[140px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* HERO SECTION */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
        {/* Кнопка назад */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="absolute top-8 left-8"
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
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4" />
            Финальное послание
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none"
          >
            Ты Можешь
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
              Больше, Чем Думаешь
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Путь разработчика — это не спринт, а марафон. Каждая строчка кода,
            каждая ошибка, каждый баг — это шаг к твоей мечте. Не
            останавливайся.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-3 pt-4"
          >
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400 animate-pulse" />
            <Zap
              className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-pulse"
              style={{ animationDelay: "0.3s" }}
            />
            <Star
              className="w-6 h-6 text-purple-400 fill-purple-400 animate-pulse"
              style={{ animationDelay: "0.6s" }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 animate-bounce"
        >
          <div className="text-slate-500 text-sm">Прокрути вниз</div>
        </motion.div>
      </header>

      <main className="relative max-w-6xl mx-auto px-4 py-24 space-y-32">
        {/* SECTION 1: ПОЧЕМУ НЕ НУЖНО СДАВАТЬСЯ */}
        <section className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-mono">
              <Target className="w-3.5 h-3.5" /> Глава 1
            </div>
            <h2 className="text-4xl md:text-5xl font-black">
              Почему Нельзя{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Сдаваться
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
                title: "Рынок растёт",
                desc: "Спрос на Frontend разработчиков увеличивается каждый год. Компании ищут таланты, а не идеальных кандидатов.",
              },
              {
                icon: <Code className="w-8 h-8 text-cyan-400" />,
                title: "Навык накапливается",
                desc: "Каждый день практики делает тебя на 1% лучше. Через год это уже 365% роста. Время работает на тебя.",
              },
              {
                icon: <Rocket className="w-8 h-8 text-purple-400" />,
                title: "Первый проект — прорыв",
                desc: "Самое сложное — получить первый опыт. После него всё становится проще. Ты уже почти у цели.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition-all group"
              >
                <div className="space-y-4">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl w-fit group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* QUOTES SECTION */}
        <section className="space-y-12">
          {quotes.map((quote, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-xl border border-slate-800/50 p-8 md:p-12 rounded-3xl">
                <div className="text-6xl text-purple-500/20 font-serif mb-4">
                  "
                </div>
                <p className="text-2xl md:text-3xl font-medium text-slate-200 leading-relaxed mb-6 italic">
                  {quote.text}
                </p>
                <p className="text-sm text-slate-500 font-mono">
                  — {quote.author}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* SECTION 2: ОШИБКИ НОВИЧКОВ */}
        <section className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-500/10 border border-rose-500/30 rounded-full text-rose-400 text-xs font-mono">
              <Award className="w-3.5 h-3.5" /> Глава 2
            </div>
            <h2 className="text-4xl md:text-5xl font-black">
              Ошибки, Которые{" "}
              <span className="bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Тормозят Рост
              </span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: "Синдром самозванца",
                desc: "Ты думаешь, что недостаточно хорош. Но правда в том, что никто не знает всё. Даже senior разработчики гуглят базовые вещи.",
                solution:
                  "Принимай свои пробелы. Учись на практике, а не в теории.",
              },
              {
                title: "Перфекционизм",
                desc: "Ты ждёшь идеального момента, чтобы начать проект или отправить резюме. Но идеального момента не существует.",
                solution:
                  "Делай. Ошибайся. Исправляй. Повторяй. Это единственный путь.",
              },
              {
                title: "Сравнение с другими",
                desc: "Ты смотришь на других разработчиков и думаешь, что отстаёшь. Но у каждого свой темп и своя история.",
                solution:
                  "Сравнивай себя только с собой вчерашним. Ты уже лучше, чем был месяц назад.",
              },
              {
                title: "Туториальный ад",
                desc: "Ты смотришь курс за курсом, но не пишешь свой код. Знания без практики — это иллюзия прогресса.",
                solution:
                  "Закрой YouTube. Открой VS Code. Создай что-то своё. Прямо сейчас.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 md:p-8 rounded-2xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-rose-500/20 border border-rose-500/30 rounded-full flex items-center justify-center text-rose-400 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="pt-2 border-t border-slate-800">
                      <p className="text-sm text-emerald-400 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Решение:</strong> {item.solution}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 3: РЕАЛЬНЫЙ ПУТЬ */}
        <section className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-400 text-xs font-mono">
              <Clock className="w-3.5 h-3.5" /> Глава 3
            </div>
            <h2 className="text-4xl md:text-5xl font-black">
              Реальный Путь{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Разработчика
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500" />

            <div className="space-y-12 pl-20">
              {[
                {
                  phase: "Месяц 1-3",
                  title: "Основы и первые проекты",
                  desc: "HTML, CSS, JavaScript. Первые лендинги. Много ошибок. Это нормально.",
                },
                {
                  phase: "Месяц 4-6",
                  title: "React и современный стек",
                  desc: "Компоненты, хуки, роутинг. Первое SPA приложение. Начинаешь понимать логику.",
                },
                {
                  phase: "Месяц 7-9",
                  title: "Стейт-менеджмент и API",
                  desc: "Redux Toolkit, работа с бэкендом. Проекты становятся сложнее и интереснее.",
                },
                {
                  phase: "Месяц 10-12",
                  title: "Портфолио и первая работа",
                  desc: "Полноценные проекты в GitHub. Резюме готово. Первые собеседования. Первый оффер.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-[4.5rem] top-4 w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold border-4 border-slate-950">
                    {i + 1}
                  </div>
                  <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl">
                    <div className="text-xs font-mono text-indigo-400 mb-2">
                      {item.phase}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 p-6 rounded-2xl text-center"
          >
            <p className="text-lg text-slate-300">
              <strong className="text-white">Важно:</strong> Это примерный путь.
              У кого-то быстрее, у кого-то медленнее. Главное — не
              останавливаться.
            </p>
          </motion.div>
        </section>

        {/* SECTION 4: ЧТО ДЕЛАТЬ ДАЛЬШЕ */}
        <section className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-mono">
              <Rocket className="w-3.5 h-3.5" /> Финал
            </div>
            <h2 className="text-4xl md:text-5xl font-black">
              Что Делать{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Прямо Сейчас
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "1. Закончи один проект",
                desc: "Не начинай новый, пока не завершишь текущий. Законченный проект в портфолио важнее десяти незавершённых.",
              },
              {
                title: "2. Выложи код на GitHub",
                desc: "Даже если он несовершенен. Рекрутеры смотрят на активность, а не на идеальный код.",
              },
              {
                title: "3. Напиши резюме",
                desc: "Одна страница. Конкретные проекты. Стек технологий. Ссылки на GitHub и портфолио.",
              },
              {
                title: "4. Отправь 5 откликов",
                desc: "Не жди идеального момента. Начни искать работу уже сейчас. Опыт собеседований — тоже опыт.",
              },
              {
                title: "5. Учись каждый день",
                desc: "Хотя бы 30 минут. Читай документацию, пиши код, решай задачи. Постоянство важнее интенсивности.",
              },
              {
                title: "6. Найди комьюнити",
                desc: "Telegram-чаты, Discord-серверы, митапы. Окружение программистов мотивирует и помогает расти.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-all"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FINAL MESSAGE */}
        <section className="py-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black leading-tight">
                Твоя История{" "}
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Только Начинается
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Через год ты будешь благодарить себя за то, что не сдался
                сегодня. Каждый великий разработчик начинал с первой строчки
                кода.
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 pt-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
                <Heart className="w-8 h-8 text-white fill-white" />
              </div>
            </div>

            <p className="text-lg text-slate-400 font-medium">
              Продолжай писать код. Продолжай учиться. Продолжай мечтать.
            </p>

            <div className="pt-8">
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transition-transform"
              >
                <Rocket className="w-5 h-5" />
                Вернуться к обучению
              </Link>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative border-t border-slate-900 text-center py-12 text-sm text-slate-600">
        <p>© 2026 Frontend Dev Guide. Верь в себя. Ты справишься. 💜</p>
      </footer>
    </div>
  );
}
