import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Globe,
  FileText,
  Shield,
  CheckCircle,
  AlertCircle,
  Rocket,
  Eye,
  TrendingUp,
  Code,
  Server,
  Zap,
  ArrowRight,
  ExternalLink,
  FileCode,
  Settings,
  BarChart3,
  ArrowLeft,
} from "lucide-react";

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-white antialiased relative">
      {/* ФОНОВЫЕ ГРАДИЕНТЫ */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* HEADER */}
      <header className="relative py-20 px-4 max-w-6xl mx-auto text-center border-b border-slate-900 overflow-hidden">
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
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-950/40 border border-emerald-800/30 rounded-full text-emerald-400 text-xs font-mono mb-6 backdrop-blur-md"
        >
          <Search className="w-3.5 h-3.5" /> SEO для Frontend-разработчиков
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6"
        >
          Как Вывести Сайт <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
            в Топ Google
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto"
        >
          Пошаговое руководство по SEO-оптимизации и индексации сайта в
          поисковых системах. От настройки до первых посетителей из Google.
        </motion.p>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* РАЗДЕЛ 1: ЧТО ТАКОЕ SEO */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl md:text-3xl font-black flex items-center gap-2">
              <Search className="w-7 h-7 text-emerald-400" /> Что такое SEO?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-white">SEO</strong> (Search Engine
              Optimization) — это оптимизация сайта для поисковых систем.
            </p>
            <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl space-y-3">
              <h3 className="text-sm font-bold text-emerald-400">
                Простыми словами:
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Когда человек ищет что-то в Google, поисковик показывает самые
                релевантные сайты. SEO помогает твоему сайту попасть в топ
                результатов поиска, чтобы люди могли его найти.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            viewport={{ once: true }}
            className="bg-slate-900/30 border border-slate-800 p-6 rounded-2xl backdrop-blur-md"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-200">
              Зачем нужен SEO?
            </h3>
            <div className="space-y-3 text-xs">
              {[
                {
                  icon: <Eye className="w-4 h-4 text-blue-400" />,
                  title: "Бесплатный трафик",
                  desc: "Люди находят твой сайт через Google без рекламы",
                },
                {
                  icon: <TrendingUp className="w-4 h-4 text-emerald-400" />,
                  title: "Рост посещаемости",
                  desc: "Чем выше в поиске, тем больше кликов и посетителей",
                },
                {
                  icon: <CheckCircle className="w-4 h-4 text-purple-400" />,
                  title: "Доверие пользователей",
                  desc: "Сайты в топе Google воспринимаются как надежные",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-slate-950/60 p-3 rounded-lg"
                >
                  <div className="p-1.5 bg-slate-900 rounded-lg border border-slate-800">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-bold text-slate-200 mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* РАЗДЕЛ 2: ПОЧЕМУ САЙТ НЕ ПОЯВЛЯЕТСЯ В GOOGLE */}
        <section className="bg-rose-950/10 border border-rose-900/30 rounded-2xl p-6 md:p-10 space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-rose-400" /> Почему мой сайт
              не появляется в Google?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed mt-2">
              Новички часто думают, что сайт автоматически появится в Google
              после публикации. Но это не так!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Google не знает о твоем сайте",
                desc: "Поисковые роботы еще не нашли и не проиндексировали твой сайт",
                solution: "Нужно вручную добавить сайт в Google Search Console",
              },
              {
                title: "Сайт заблокирован для индексации",
                desc: "Файл robots.txt или meta-теги запрещают роботам сканировать сайт",
                solution: "Проверь robots.txt и удали блокирующие правила",
              },
              {
                title: "Нет sitemap.xml",
                desc: "Google не понимает структуру твоего сайта и какие страницы индексировать",
                solution: "Создай и загрузи sitemap.xml в Search Console",
              },
              {
                title: "Сайт слишком новый",
                desc: "Google индексирует новые сайты не мгновенно, это может занять 1-4 недели",
                solution: "Наберись терпения и продолжай добавлять контент",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl space-y-2"
              >
                <h4 className="text-sm font-bold text-rose-400">
                  {i + 1}. {item.title}
                </h4>
                <p className="text-xs text-slate-400">{item.desc}</p>
                <div className="pt-2 border-t border-slate-800/60">
                  <p className="text-xs text-emerald-400 flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Решение:</strong> {item.solution}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* РАЗДЕЛ 3: КАК GOOGLE ИНДЕКСИРУЕТ САЙТЫ */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black">
              Как Google индексирует сайты?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Понимание процесса индексации поможет тебе правильно настроить
              сайт
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "1",
                icon: <Search className="w-6 h-6 text-blue-400" />,
                title: "Crawling (Сканирование)",
                desc: "Роботы Google (Googlebot) обходят интернет по ссылкам и находят новые страницы. Они читают HTML-код твоего сайта.",
                color: "blue",
              },
              {
                step: "2",
                icon: <Server className="w-6 h-6 text-purple-400" />,
                title: "Indexing (Индексация)",
                desc: "Google анализирует контент страницы, понимает о чем она и сохраняет информацию в своей базе данных (индексе).",
                color: "purple",
              },
              {
                step: "3",
                icon: <BarChart3 className="w-6 h-6 text-emerald-400" />,
                title: "Ranking (Ранжирование)",
                desc: "Когда пользователь ищет что-то, Google показывает самые релевантные страницы из индекса в порядке важности.",
                color: "emerald",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl relative overflow-hidden group hover:border-slate-700 transition-all"
              >
                <div className="absolute top-0 right-0 text-8xl font-black text-slate-900/40 -mr-4 -mt-4">
                  {item.step}
                </div>
                <div className="relative space-y-4">
                  <div
                    className={`p-3 bg-${item.color}-500/10 rounded-lg border border-${item.color}-500/20 w-fit`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/40 border border-slate-800 p-5 rounded-xl">
            <p className="text-xs text-slate-400 flex items-start gap-2">
              <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-200">Важно:</strong> Процесс
                индексации не мгновенный. После публикации сайта может пройти от
                нескольких дней до нескольких недель, прежде чем Google найдет и
                проиндексирует все страницы.
              </span>
            </p>
          </div>
        </section>

        {/* РАЗДЕЛ 4: ЧТО НУЖНО ДЛЯ SEO (CHECKLIST) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black">
              Чек-лист: Что нужно настроить
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Пошаговая инструкция для вывода сайта в Google
            </p>
          </div>

          {/* SITEMAP.XML */}
          <div className="bg-gradient-to-br from-blue-950/20 to-slate-900/40 border border-blue-900/30 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  1. Создай sitemap.xml
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  Sitemap — это файл со списком всех страниц твоего сайта.
                  Помогает Google быстрее найти и проиндексировать контент.
                </p>
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex items-center gap-2">
                <Code className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-mono text-slate-400">
                  sitemap.xml
                </span>
              </div>
              <div className="p-5">
                <pre className="text-xs text-slate-300 font-mono leading-relaxed overflow-x-auto">
                  <code>{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mysite.com/</loc>
    <lastmod>2026-05-16</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://mysite.com/about</loc>
    <lastmod>2026-05-16</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://mysite.com/blog</loc>
    <lastmod>2026-05-16</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>`}</code>
                </pre>
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs text-slate-400">
              <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-200">Где разместить:</strong> Файл
                должен быть доступен по адресу{" "}
                <code className="text-blue-400 bg-slate-950 px-1.5 py-0.5 rounded">
                  https://твойсайт.com/sitemap.xml
                </code>
              </p>
            </div>
          </div>

          {/* ROBOTS.TXT */}
          <div className="bg-gradient-to-br from-purple-950/20 to-slate-900/40 border border-purple-900/30 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  2. Настрой robots.txt
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  Robots.txt указывает поисковым роботам, какие страницы можно
                  сканировать, а какие нельзя.
                </p>
              </div>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 rounded-xl overflow-hidden">
              <div className="p-4 bg-slate-900/80 border-b border-slate-800 flex items-center gap-2">
                <Code className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono text-slate-400">
                  robots.txt
                </span>
              </div>
              <div className="p-5">
                <pre className="text-xs text-slate-300 font-mono leading-relaxed overflow-x-auto">
                  <code>{`# Разрешить всем роботам сканировать весь сайт
User-agent: *
Allow: /

# Указать путь к sitemap
Sitemap: https://mysite.com/sitemap.xml

# Запретить сканирование админки (опционально)
Disallow: /admin/
Disallow: /private/`}</code>
                </pre>
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs text-slate-400">
              <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
              <p>
                <strong className="text-slate-200">Важно:</strong> Убедись, что
                в robots.txt нет строки{" "}
                <code className="text-rose-400 bg-slate-950 px-1.5 py-0.5 rounded">
                  Disallow: /
                </code>{" "}
                — это заблокирует весь сайт!
              </p>
            </div>
          </div>

          {/* GOOGLE SEARCH CONSOLE */}
          <div className="bg-gradient-to-br from-emerald-950/20 to-slate-900/40 border border-emerald-900/30 rounded-2xl p-6 md:p-8 space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <Settings className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">
                  3. Добавь сайт в Google Search Console
                </h3>
                <p className="text-sm text-slate-300 mb-4">
                  Search Console — бесплатный инструмент от Google для
                  мониторинга и управления присутствием сайта в поиске.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                {
                  step: "1",
                  text: "Перейди на search.google.com/search-console",
                  link: "https://search.google.com/search-console",
                },
                {
                  step: "2",
                  text: 'Нажми "Добавить ресурс" и введи URL своего сайта',
                },
                {
                  step: "3",
                  text: "Подтверди владение сайтом (через HTML-файл или meta-тег)",
                },
                {
                  step: "4",
                  text: "Отправь sitemap.xml в разделе Sitemap",
                },
                {
                  step: "5",
                  text: "Запроси индексацию главной страницы через URL Inspection",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 bg-slate-950/60 p-4 rounded-lg"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-emerald-400 text-xs font-bold">
                      {item.step}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-300">{item.text}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 mt-1"
                      >
                        Открыть <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* РАЗДЕЛ 5: DEPLOY НА FIREBASE/VERCEL */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black">
              Где разместить сайт?
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Бесплатные платформы с автоматической настройкой SEO
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* FIREBASE HOSTING */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <Rocket className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Firebase Hosting
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Google автоматически индексирует сайты на Firebase Hosting.
                Бесплатный SSL, быстрый CDN и простой деплой.
              </p>
              <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-lg">
                <p className="text-xs font-mono text-slate-300">
                  $ firebase deploy
                </p>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Автоматический SSL и robots.txt</span>
              </div>
            </div>

            {/* VERCEL */}
            <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                  <Zap className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Vercel</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Идеально для React и Next.js. Автоматический деплой из GitHub,
                бесплатный SSL и отличная производительность.
              </p>
              <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-lg">
                <p className="text-xs font-mono text-slate-300">
                  $ vercel deploy
                </p>
              </div>
              <div className="flex items-start gap-2 text-xs text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>Автоматическая оптимизация для SEO</span>
              </div>
            </div>
          </div>
        </section>

        {/* РАЗДЕЛ 6: СОВЕТЫ ДЛЯ НОВИЧКОВ */}
        <section className="bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-2xl space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Globe className="w-6 h-6 text-emerald-400" /> Реальные советы для
            новичков
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Добавь уникальные title и description",
                desc: "Каждая страница должна иметь уникальный заголовок и описание в meta-тегах",
              },
              {
                title: "Используй семантические HTML-теги",
                desc: "Правильная структура: <header>, <main>, <article>, <h1>-<h6> помогает Google понять контент",
              },
              {
                title: "Оптимизируй скорость загрузки",
                desc: "Сжимай изображения, минифицируй CSS/JS. Быстрые сайты ранжируются выше",
              },
              {
                title: "Делай сайт mobile-friendly",
                desc: "Google в первую очередь индексирует мобильную версию сайта",
              },
              {
                title: "Добавляй качественный контент",
                desc: "Регулярно публикуй полезные статьи и обновляй информацию",
              },
              {
                title: "Получай обратные ссылки",
                desc: "Ссылки с других сайтов повышают авторитет твоего сайта в глазах Google",
              },
            ].map((tip, i) => (
              <div
                key={i}
                className="bg-slate-950/60 border border-slate-800 p-4 rounded-lg space-y-2"
              >
                <h4 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" /> {tip.title}
                </h4>
                <p className="text-xs text-slate-400">{tip.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ИТОГОВЫЙ БЛОК */}
        <section className="border-t border-slate-900 pt-12 text-center max-w-xl mx-auto space-y-4">
          <div className="p-3 bg-slate-900 rounded-full w-fit mx-auto border border-slate-800">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold">Итог</h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6">
            SEO — это не магия, а набор технических настроек и правил. Следуй
            этому чек-листу, добавь сайт в Google Search Console, создай
            sitemap.xml и robots.txt — и твой сайт начнет появляться в поиске
            через 1-4 недели.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl font-semibold text-white hover:shadow-lg transition-all"
          >
            Вернуться на главную
          </Link>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 text-center py-10 text-[11px] text-slate-600 font-mono">
        <div>Финальный модуль курса • SEO и Продвижение сайтов • 2026</div>
      </footer>
    </div>
  );
}
