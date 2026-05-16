import { useState } from "react";
import { motion } from "framer-motion";
import {
  Flame,
  ShieldCheck,
  Database,
  Globe,
  HardDrive,
  RefreshCw,
  Plus,
  Eye,
  Edit3,
  Trash2,
  CheckCircle2,
  AlertOctagon,
  HelpCircle,
  Code,
  Terminal,
  Layers,
  Zap,
  Upload,
  Lock,
  Users,
  Rocket,
  Mail,
  Key,
  Image,
  FileText,
  Video,
} from "lucide-react";

export default function FirebaseGuide() {
  const [activeTab, setActiveTab] = useState("create");
  const [activeAuthTab, setActiveAuthTab] = useState("email");
  const [activeStorageTab, setActiveStorageTab] = useState("upload");

  // Код для интерактивного блока CRUD
  const crudCodes = {
    create: {
      title: "Create (Создание)",
      desc: 'Добавление новой записи в базу данных. Мы указываем коллекцию "todos" и передаем объект с данными.',
      code: `import { db } from "./firebaseConfig";\nimport { collection, addDoc } from "firebase/firestore";\n\nconst addTodo = async () => {\n  await addDoc(collection(db, "todos"), {\n    title: "Изучить Redux Toolkit",\n    completed: false,\n    createdAt: new Date()\n  });\n  console.log("Задача добавлена!");\n};`,
    },
    read: {
      title: "Read (Чтение)",
      desc: "Получение данных из базы. getDocs забирает весь снимок (snapshot) коллекции, который мы потом перебираем.",
      code: `import { db } from "./firebaseConfig";\nimport { collection, getDocs } from "firebase/firestore";\n\nconst getTodos = async () => {\n  const querySnapshot = await getDocs(collection(db, "todos"));\n  querySnapshot.forEach((doc) => {\n    console.log(doc.id, " => ", doc.data());\n  });\n};`,
    },
    update: {
      title: "Update (Обновление)",
      desc: "Изменение конкретного документа. Нужен ID записи. Мы обновляем только указанные поля, остальные не меняются.",
      code: `import { db } from "./firebaseConfig";\nimport { doc, updateDoc } from "firebase/firestore";\n\nconst updateTodo = async (id) => {\n  const todoRef = doc(db, "todos", id);\n  await updateDoc(todoRef, {\n    title: "Изучить Firebase до конца!",\n    completed: true\n  });\n};`,
    },
    delete: {
      title: "Delete (Удаление)",
      desc: "Полное удаление документа из базы по его уникальному ID. Действие необратимо.",
      code: `import { db } from "./firebaseConfig";\nimport { doc, deleteDoc } from "firebase/firestore";\n\nconst deleteTodo = async (id) => {\n  await deleteDoc(doc(db, "todos", id));\n  console.log("Задача удалена");\n};`,
    },
  };

  // Код для Authentication
  const authCodes = {
    email: {
      title: "Email/Password регистрация",
      desc: "Классическая регистрация через email и пароль. Firebase автоматически хеширует пароли и создает сессию.",
      code: `import { auth } from "./firebaseConfig";\nimport { createUserWithEmailAndPassword } from "firebase/auth";\n\nconst signUp = async (email, password) => {\n  try {\n    const userCredential = await createUserWithEmailAndPassword(\n      auth, \n      email, \n      password\n    );\n    console.log("Пользователь создан:", userCredential.user);\n  } catch (error) {\n    console.error("Ошибка регистрации:", error.message);\n  }\n};`,
    },
    login: {
      title: "Вход в систему",
      desc: "Авторизация существующего пользователя. После успешного входа Firebase сохраняет токен сессии.",
      code: `import { auth } from "./firebaseConfig";\nimport { signInWithEmailAndPassword } from "firebase/auth";\n\nconst login = async (email, password) => {\n  try {\n    const userCredential = await signInWithEmailAndPassword(\n      auth,\n      email,\n      password\n    );\n    console.log("Вход выполнен:", userCredential.user.email);\n  } catch (error) {\n    console.error("Ошибка входа:", error.message);\n  }\n};`,
    },
    google: {
      title: "Google Sign-In",
      desc: "Вход через Google аккаунт. Пользователь видит всплывающее окно Google и авторизуется в один клик.",
      code: `import { auth } from "./firebaseConfig";\nimport { signInWithPopup, GoogleAuthProvider } from "firebase/auth";\n\nconst signInWithGoogle = async () => {\n  const provider = new GoogleAuthProvider();\n  try {\n    const result = await signInWithPopup(auth, provider);\n    console.log("Google вход:", result.user.displayName);\n  } catch (error) {\n    console.error("Ошибка Google входа:", error.message);\n  }\n};`,
    },
    logout: {
      title: "Выход из системы",
      desc: "Завершение сессии пользователя. Firebase удаляет токен авторизации из браузера.",
      code: `import { auth } from "./firebaseConfig";\nimport { signOut } from "firebase/auth";\n\nconst logout = async () => {\n  try {\n    await signOut(auth);\n    console.log("Пользователь вышел из системы");\n  } catch (error) {\n    console.error("Ошибка выхода:", error.message);\n  }\n};`,
    },
  };

  // Код для Storage
  const storageCodes = {
    upload: {
      title: "Загрузка файла",
      desc: "Загружаем файл (например, аватар пользователя) в Firebase Storage. Файл хранится в облаке Google.",
      code: `import { storage } from "./firebaseConfig";\nimport { ref, uploadBytes, getDownloadURL } from "firebase/storage";\n\nconst uploadFile = async (file) => {\n  const storageRef = ref(storage, 'avatars/' + file.name);\n  try {\n    const snapshot = await uploadBytes(storageRef, file);\n    const url = await getDownloadURL(snapshot.ref);\n    console.log("Файл загружен! URL:", url);\n    return url;\n  } catch (error) {\n    console.error("Ошибка загрузки:", error.message);\n  }\n};`,
    },
    download: {
      title: "Получение URL файла",
      desc: "Получаем публичную ссылку на загруженный файл. Эту ссылку можно использовать в теге <img> или <video>.",
      code: `import { storage } from "./firebaseConfig";\nimport { ref, getDownloadURL } from "firebase/storage";\n\nconst getFileURL = async (fileName) => {\n  const fileRef = ref(storage, 'avatars/' + fileName);\n  try {\n    const url = await getDownloadURL(fileRef);\n    console.log("URL файла:", url);\n    return url;\n  } catch (error) {\n    console.error("Ошибка получения URL:", error.message);\n  }\n};`,
    },
    delete: {
      title: "Удаление файла",
      desc: "Полное удаление файла из облачного хранилища. Освобождает место в вашем Storage.",
      code: `import { storage } from "./firebaseConfig";\nimport { ref, deleteObject } from "firebase/storage";\n\nconst deleteFile = async (fileName) => {\n  const fileRef = ref(storage, 'avatars/' + fileName);\n  try {\n    await deleteObject(fileRef);\n    console.log("Файл удален из Storage");\n  } catch (error) {\n    console.error("Ошибка удаления:", error.message);\n  }\n};`,
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-orange-500 selection:text-white antialiased">
      {/* HEADER / HERO SECTION */}
      <header className="relative py-20 px-4 max-w-6xl mx-auto text-center border-b border-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.06),transparent_60%)]" />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-950/40 border border-orange-800/30 rounded-full text-orange-400 text-xs font-mono mb-6 backdrop-blur-sm"
        >
          <Flame className="w-4 h-4 fill-orange-400" /> BaaS
          (Backend-as-a-Service) для Frontend-разработчиков
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight mb-6"
        >
          Полное руководство по <br />
          <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
            Firebase & Firestore
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto"
        >
          Узнай, как собирать полноценные Fullstack-приложения, работать с базой
          данных и авторизацией, не написав ни одной строчки бэкенд-кода.
        </motion.p>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        {/* SECTION 1: ЧТО ТАКОЕ FIREBASE */}
        <section className="grid md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            viewport={{ once: true }}
            className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between backdrop-blur-sm"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-orange-400">
                Что такое Firebase?
              </h2>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                <strong className="text-white">Firebase</strong> — это мощная
                облачная платформа от компании{" "}
                <strong className="text-white">Google</strong>. Она берет на
                себя всю серверную часть приложения.
              </p>
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3 bg-slate-950 p-3 rounded-xl border border-slate-900">
                  <span className="text-emerald-400 text-lg">💡</span>
                  <p className="text-xs text-slate-400">
                    <strong className="text-slate-200 block mb-0.5">
                      Тебе не нужен бэкендер:
                    </strong>{" "}
                    Забудь про настройку серверов, Node.js, Express, Docker и
                    базы данных на хостинге.
                  </p>
                </div>
                <div className="flex items-start gap-3 bg-slate-950 p-3 rounded-xl border border-slate-900">
                  <span className="text-emerald-400 text-lg">🚀</span>
                  <p className="text-xs text-slate-400">
                    <strong className="text-slate-200 block mb-0.5">
                      Готовые инструменты:
                    </strong>{" "}
                    Ты просто подключаешь Firebase SDK в свой React-проект и
                    вызываешь готовые функции для базы данных или логина.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            viewport={{ once: true }}
            className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl flex flex-col justify-between backdrop-blur-sm"
          >
            <div>
              <h3 className="text-xl font-bold mb-4 text-slate-200">
                Где это используется в реальности?
              </h3>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-4">
                Существует миф, что Firebase — это только для мелких тестов. На
                самом деле его активно используют:
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  "Стартапы (быстрый запуск)",
                  "Мобильные аппки",
                  "Проекты MVP",
                  "Реальные веб-сайты",
                ].map((el, i) => (
                  <div
                    key={i}
                    className="bg-slate-850 p-2.5 rounded-lg border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />{" "}
                    {el}
                  </div>
                ))}
              </div>
              <div className="p-4 bg-orange-950/10 border border-orange-900/20 rounded-xl">
                <span className="text-xs font-bold text-orange-400 block mb-1">
                  🎯 Идеальная экосистема для:
                </span>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Быстрых коммерческих проектов, прототипов для инвесторов,
                  интерактивных учебных работ и приложений малого/среднего
                  размера (Small/Medium apps), где скорость разработки критичнее
                  сложной кастомной архитектуры.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SECTION 2: ОСНОВНЫЕ ВОЗМОЖНОСТИ (CARDS) */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-3">Возможности платформы</h2>
            <p className="text-slate-400 text-sm">
              Firebase — это целый комбайн сервисов, интегрированных друг с
              другом.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
                title: "Authentication",
                desc: "Вход по почте/паролю, кнопка Google, Apple, GitHub. Логин и сессия юзера создаются автоматически.",
                label: "Безопасность",
              },
              {
                icon: <Database className="w-5 h-5 text-blue-400" />,
                title: "Firestore DB",
                desc: "Гибкая, сверхбыстрая NoSQL база данных. Изменения прилетают мгновенно без перезагрузки страниц.",
                label: "Хранилище данных",
              },
              {
                icon: <Globe className="w-5 h-5 text-cyan-400" />,
                title: "Hosting",
                desc: "Глобальный хостинг с бесплатным SSL-сертификатом (HTTPS) и CDN. Сайт деплоится одной командой.",
                label: "Развертывание",
              },
              {
                icon: <HardDrive className="w-5 h-5 text-purple-400" />,
                title: "Storage",
                desc: "Облако для хранения тяжелых медиафайлов: аватарки пользователей, картинки интернет-магазинов, видео.",
                label: "Медиафайлы",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-slate-900 border border-slate-800/80 p-5 rounded-xl flex flex-col justify-between hover:border-slate-700 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
                      {card.icon}
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {card.label}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-200">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: FIRESTORE DATABASE VISUALIZATION */}
        <section className="bg-slate-900/20 border border-slate-800/60 rounded-2xl p-6 md:p-10 space-y-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4">
              <h2 className="text-2xl font-bold flex items-center gap-2 text-blue-400">
                <Database className="w-6 h-6" /> Firestore Database
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Это <strong className="text-white">NoSQL</strong> база данных.
                Забудь про таблицы, колонки, строки и сложные SQL-запросы.
              </p>
              <div className="space-y-2 text-xs text-slate-400">
                <p className="flex items-center gap-2">
                  <span className="text-blue-400">✦</span> Данные хранятся в
                  виде Коллекций (Collections) и Документов (Documents).
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-400">✦</span> По сути, вся твоя
                  база — это один большой, гибкий{" "}
                  <strong className="text-slate-200">JSON-объект</strong>.
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-blue-400">✦</span> У каждого
                  пользователя или товара может быть свой уникальный набор
                  полей.
                </p>
              </div>
            </div>

            {/* Схематичная визуализация структуры БД */}
            <div className="md:col-span-7 bg-slate-950 border border-slate-800 rounded-xl p-5 font-mono text-xs overflow-x-auto">
              <div className="text-slate-500 mb-2">
                // Визуализация структуры базы данных в панели Firebase
              </div>
              <div className="space-y-2">
                <div className="text-orange-400 font-bold flex items-center gap-1">
                  📁 collections / "users"
                </div>
                <div className="pl-4 border-l border-slate-800 space-y-3">
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800/60">
                    <div className="text-cyan-400 font-bold flex items-center gap-2">
                      📄 document /{" "}
                      <span className="text-slate-400 text-[10px]">
                        "user_id_84729"
                      </span>
                    </div>
                    <div className="pl-4 text-slate-300 space-y-0.5 mt-1">
                      <div>
                        <span className="text-purple-400">name:</span>{" "}
                        <span className="text-amber-300">"Ali"</span>
                      </div>
                      <div>
                        <span className="text-purple-400">age:</span>{" "}
                        <span className="text-emerald-400">20</span>
                      </div>
                      <div>
                        <span className="text-purple-400">role:</span>{" "}
                        <span className="text-amber-300">"student"</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-900/60 p-2 rounded border border-slate-800/60 opacity-60">
                    <div className="text-cyan-400 font-bold">
                      📄 document /{" "}
                      <span className="text-slate-400 text-[10px]">
                        "user_id_10293"
                      </span>
                    </div>
                    <div className="pl-4 text-slate-400">...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: INTERACTIVE CRUD OPERATIONS (ОЧЕНЬ ВАЖНО) */}
        <section className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Code className="w-7 h-7 text-amber-400" /> CRUD Операции — Основа
              Фронтенда
            </h2>
            <p className="text-slate-400 text-sm">
              Любой классический интерфейс сводится к четырем действиям. Вот как
              они реализуются через Firebase SDK:
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-start">
            {/* Переключатели табов */}
            <div className="md:col-span-4 flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
              {Object.keys(crudCodes).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-xs md:text-sm font-medium transition-all flex items-center gap-3 whitespace-nowrap ${
                    activeTab === key
                      ? "bg-gradient-to-r from-orange-950/40 to-slate-900 border-orange-500 text-white shadow-lg"
                      : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  {key === "create" && (
                    <Plus className="w-4 h-4 text-emerald-400" />
                  )}
                  {key === "read" && <Eye className="w-4 h-4 text-blue-400" />}
                  {key === "update" && (
                    <Edit3 className="w-4 h-4 text-amber-400" />
                  )}
                  {key === "delete" && (
                    <Trash2 className="w-4 h-4 text-rose-400" />
                  )}
                  {crudCodes[key].title}
                </button>
              ))}
            </div>

            {/* Панель с кодом */}
            <div className="md:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full">
              <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-orange-400" />
                <span className="text-xs font-mono text-slate-400">
                  JavaScript / Firebase Web SDK
                </span>
              </div>
              <div className="p-5 flex-1 space-y-4">
                <p className="text-xs md:text-sm text-slate-300 italic">
                  {crudCodes[activeTab].desc}
                </p>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 overflow-x-auto">
                  <pre className="text-xs text-slate-300 font-mono leading-relaxed">
                    <code>{crudCodes[activeTab].code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4.5: AUTHENTICATION */}
        <section className="space-y-8 bg-gradient-to-br from-emerald-950/10 via-slate-900/20 to-slate-950 border border-emerald-900/20 rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <ShieldCheck className="w-7 h-7 text-emerald-400" />{" "}
              Authentication — Безопасность и Авторизация
            </h2>
            <p className="text-slate-400 text-sm">
              Firebase Authentication позволяет добавить систему регистрации и
              входа за несколько минут. Поддерживает email/password, Google,
              Facebook, GitHub и другие провайдеры.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-start">
            {/* Переключатели табов */}
            <div className="md:col-span-4 flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
              {Object.keys(authCodes).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveAuthTab(key)}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-xs md:text-sm font-medium transition-all flex items-center gap-3 whitespace-nowrap ${
                    activeAuthTab === key
                      ? "bg-gradient-to-r from-emerald-950/40 to-slate-900 border-emerald-500 text-white shadow-lg"
                      : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  {key === "email" && (
                    <Mail className="w-4 h-4 text-blue-400" />
                  )}
                  {key === "login" && (
                    <Key className="w-4 h-4 text-amber-400" />
                  )}
                  {key === "google" && (
                    <Users className="w-4 h-4 text-red-400" />
                  )}
                  {key === "logout" && (
                    <Lock className="w-4 h-4 text-slate-400" />
                  )}
                  {authCodes[key].title}
                </button>
              ))}
            </div>

            {/* Панель с кодом */}
            <div className="md:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full">
              <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-slate-400">
                  Firebase Authentication SDK
                </span>
              </div>
              <div className="p-5 flex-1 space-y-4">
                <p className="text-xs md:text-sm text-slate-300 italic">
                  {authCodes[activeAuthTab].desc}
                </p>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 overflow-x-auto">
                  <pre className="text-xs text-slate-300 font-mono leading-relaxed">
                    <code>{authCodes[activeAuthTab].code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Дополнительная информация */}
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl">
              <h4 className="text-sm font-bold text-emerald-400 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" /> Что Firebase делает за тебя
              </h4>
              <ul className="text-xs text-slate-400 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  Хеширование паролей (bcrypt)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  Управление сессиями и токенами
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  Защита от брутфорса
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 mt-0.5">•</span>
                  Email верификация
                </li>
              </ul>
            </div>
            <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl">
              <h4 className="text-sm font-bold text-blue-400 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4" /> Реальные примеры использования
              </h4>
              <ul className="text-xs text-slate-400 space-y-1.5">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  Личный кабинет пользователя
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  Интернет-магазин с корзиной
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  Социальная сеть / форум
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-0.5">•</span>
                  Приложение для заметок
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4.6: REAL-TIME UPDATES */}
        <section className="bg-gradient-to-br from-cyan-950/10 via-slate-900/20 to-slate-950 border border-cyan-900/20 rounded-3xl p-8 md:p-12 space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <RefreshCw className="w-7 h-7 text-cyan-400" /> Real-time Updates
              — Живые данные
            </h2>
            <p className="text-slate-400 text-sm">
              Одна из самых мощных фишек Firebase — данные обновляются в
              реальном времени без перезагрузки страницы. Идеально для чатов,
              совместных редакторов и live-дашбордов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
                <Zap className="w-5 h-5" /> Как это работает?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Вместо обычного{" "}
                <code className="text-orange-400 bg-slate-950 px-2 py-0.5 rounded">
                  getDocs()
                </code>{" "}
                используй{" "}
                <code className="text-cyan-400 bg-slate-950 px-2 py-0.5 rounded">
                  onSnapshot()
                </code>
                . Это создает постоянное соединение с базой данных.
              </p>
              <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200 mb-1">
                      Подписка на изменения
                    </p>
                    <p className="text-xs text-slate-400">
                      Твой React компонент "слушает" коллекцию в Firestore
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200 mb-1">
                      Кто-то меняет данные
                    </p>
                    <p className="text-xs text-slate-400">
                      Другой пользователь добавляет/удаляет запись
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-cyan-400 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200 mb-1">
                      Мгновенное обновление UI
                    </p>
                    <p className="text-xs text-slate-400">
                      Твой интерфейс автоматически перерисовывается
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-slate-400">
                  Real-time Listener
                </span>
              </div>
              <div className="p-5">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 overflow-x-auto">
                  <pre className="text-xs text-slate-300 font-mono leading-relaxed">
                    <code>{`import { db } from "./firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Подписка на изменения
    const unsubscribe = onSnapshot(
      collection(db, "todos"),
      (snapshot) => {
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTodos(data); // Автообновление!
      }
    );

    // Отписка при размонтировании
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-cyan-950/20 border border-cyan-800/30 p-5 rounded-xl">
            <h4 className="text-sm font-bold text-cyan-400 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Где использовать Real-time?
            </h4>
            <div className="grid sm:grid-cols-3 gap-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">💬</span>
                <span>Чаты и мессенджеры</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">📊</span>
                <span>Live дашборды с аналитикой</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">🎮</span>
                <span>Многопользовательские игры</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">📝</span>
                <span>Совместное редактирование</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">🛒</span>
                <span>Отслеживание заказов</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-cyan-400">📍</span>
                <span>Трекинг местоположения</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4.7: STORAGE */}
        <section className="space-y-8 bg-gradient-to-br from-purple-950/10 via-slate-900/20 to-slate-950 border border-purple-900/20 rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <HardDrive className="w-7 h-7 text-purple-400" /> Storage —
              Хранение файлов
            </h2>
            <p className="text-slate-400 text-sm">
              Firebase Storage — это облачное хранилище для медиафайлов:
              изображений, видео, аудио и документов. Идеально для аватаров,
              фотографий товаров и пользовательского контента.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-6 items-start">
            {/* Переключатели табов */}
            <div className="md:col-span-4 flex md:flex-col gap-2 overflow-x-auto pb-2 md:pb-0">
              {Object.keys(storageCodes).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveStorageTab(key)}
                  className={`w-full text-left px-4 py-3 rounded-xl border text-xs md:text-sm font-medium transition-all flex items-center gap-3 whitespace-nowrap ${
                    activeStorageTab === key
                      ? "bg-gradient-to-r from-purple-950/40 to-slate-900 border-purple-500 text-white shadow-lg"
                      : "bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  {key === "upload" && (
                    <Upload className="w-4 h-4 text-emerald-400" />
                  )}
                  {key === "download" && (
                    <Eye className="w-4 h-4 text-blue-400" />
                  )}
                  {key === "delete" && (
                    <Trash2 className="w-4 h-4 text-rose-400" />
                  )}
                  {storageCodes[key].title}
                </button>
              ))}
            </div>

            {/* Панель с кодом */}
            <div className="md:col-span-8 bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col h-full">
              <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono text-slate-400">
                  Firebase Storage SDK
                </span>
              </div>
              <div className="p-5 flex-1 space-y-4">
                <p className="text-xs md:text-sm text-slate-300 italic">
                  {storageCodes[activeStorageTab].desc}
                </p>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 overflow-x-auto">
                  <pre className="text-xs text-slate-300 font-mono leading-relaxed">
                    <code>{storageCodes[activeStorageTab].code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Примеры использования Storage */}
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Image className="w-6 h-6 text-purple-400" />
              </div>
              <h4 className="text-sm font-bold text-purple-400 mb-2">
                Изображения
              </h4>
              <p className="text-xs text-slate-400">
                Аватары, фото товаров, галереи
              </p>
            </div>
            <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Video className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-sm font-bold text-blue-400 mb-2">Видео</h4>
              <p className="text-xs text-slate-400">
                Обучающие курсы, видеоблоги
              </p>
            </div>
            <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl text-center">
              <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-amber-400" />
              </div>
              <h4 className="text-sm font-bold text-amber-400 mb-2">
                Документы
              </h4>
              <p className="text-xs text-slate-400">PDF, резюме, договоры</p>
            </div>
          </div>
        </section>

        {/* SECTION 4.8: HOSTING */}
        <section className="bg-gradient-to-br from-cyan-950/10 via-slate-900/20 to-slate-950 border border-cyan-900/20 rounded-3xl p-8 md:p-12 space-y-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Globe className="w-7 h-7 text-cyan-400" /> Hosting — Размещение
              сайта
            </h2>
            <p className="text-slate-400 text-sm">
              Firebase Hosting позволяет разместить твой сайт в интернете за
              несколько минут. Бесплатный SSL, CDN и глобальная сеть серверов
              Google.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-cyan-400 flex items-center gap-2">
                <Rocket className="w-5 h-5" /> Что ты получаешь?
              </h3>
              <div className="space-y-3">
                <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-200 mb-1">
                        Бесплатный SSL (HTTPS)
                      </p>
                      <p className="text-xs text-slate-400">
                        Твой сайт автоматически получает защищенное соединение
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-200 mb-1">
                        Глобальный CDN
                      </p>
                      <p className="text-xs text-slate-400">
                        Сайт загружается быстро из любой точки мира
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-200 mb-1">
                        Свой домен
                      </p>
                      <p className="text-xs text-slate-400">
                        Можно подключить свой домен (например, mysite.com)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-slate-400">
                  Деплой за 3 команды
                </span>
              </div>
              <div className="p-5 space-y-4">
                <p className="text-xs text-slate-300">
                  Установи Firebase CLI и задеплой свой проект:
                </p>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-900 space-y-3">
                  <div>
                    <div className="text-[10px] text-slate-500 mb-1 font-mono">
                      # 1. Установка Firebase CLI
                    </div>
                    <code className="text-xs text-emerald-400 font-mono">
                      npm install -g firebase-tools
                    </code>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 mb-1 font-mono">
                      # 2. Логин в Firebase
                    </div>
                    <code className="text-xs text-blue-400 font-mono">
                      firebase login
                    </code>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 mb-1 font-mono">
                      # 3. Инициализация проекта
                    </div>
                    <code className="text-xs text-purple-400 font-mono">
                      firebase init hosting
                    </code>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 mb-1 font-mono">
                      # 4. Деплой сайта
                    </div>
                    <code className="text-xs text-orange-400 font-mono">
                      firebase deploy
                    </code>
                  </div>
                </div>
                <div className="bg-cyan-950/20 border border-cyan-800/30 p-3 rounded-lg">
                  <p className="text-xs text-cyan-300 flex items-start gap-2">
                    <Rocket className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>
                      После деплоя ты получишь ссылку вида:{" "}
                      <code className="text-cyan-400">
                        your-project.web.app
                      </code>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: ТИПОВОЙ КЕЙС — TODO APP */}
        <section className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" /> Почему все
              начинают с Todo App?
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Многие студенты думают, что список задач — это скучно. Но это
              важнейший лакмусовый бумажка для джуниора. Создавая классический{" "}
              <span className="text-orange-400 font-semibold">
                Todo App с Firebase
              </span>
              , вы на практике закрываете весь базовый Frontend Flow:
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-xs mt-4">
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-850">
                <span className="font-bold text-white block mb-1">
                  1. UI Интеграция
                </span>
                Связываете инпуты и кнопки React с асинхронными запросами к
                удаленному облаку.
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-850">
                <span className="font-bold text-white block mb-1">
                  2. Стейт-менеджмент
                </span>
                Учитесь синхронизировать локальный стейт приложения
                (useState/Redux) с реальным состоянием базы.
              </div>
              <div className="bg-slate-950 p-3 rounded-xl border border-slate-850">
                <span className="font-bold text-white block mb-1">
                  3. Оптимистичные апдейты
                </span>
                Понимаете, как заставить интерфейс работать мгновенно, пока
                данные летят до серверов Google.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: МЕНТОРСКИЙ БЛОК (СРАВНЕНИЕ / КОГДА ДА И КОГДА НЕТ) */}
        <section className="grid md:grid-cols-2 gap-8">
          {/* СТАРТ ДЛЯ НОВИЧКОВ */}
          <div className="bg-emerald-950/10 border border-emerald-900/30 p-6 md:p-8 rounded-2xl space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-emerald-400 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" /> Почему это крутой старт для
              новичков?
            </h3>
            <div className="space-y-3 text-xs md:text-sm text-slate-400 leading-relaxed">
              <p>
                <strong className="text-slate-200">Мгновенный дофамин:</strong>{" "}
                Ты видишь результат работы своей базы данных через 15 минут
                после начала настройки, а не через неделю изучения бэкенда.
              </p>
              <p>
                <strong className="text-slate-200">
                  Понимание архитектуры:
                </strong>{" "}
                Ты начинаешь мыслить как Fullstack-разработчик. Начинаешь
                понимать, что такое сессия пользователя, как строятся связи
                данных и как работает кэширование на клиенте.
              </p>
              <p>
                <strong className="text-slate-200">Экономия времени:</strong>{" "}
                Вместо написания CRUD логики на сервере, ты тратишь время на
                полировку навыков в React, CSS и стейт-менеджерах.
              </p>
            </div>
          </div>

          {/* КОГДА ИСПОЛЬЗОВАТЬ НЕ НАДО */}
          <div className="bg-rose-950/10 border border-rose-900/30 p-6 md:p-8 rounded-2xl space-y-4">
            <h3 className="text-lg md:text-xl font-bold text-rose-400 flex items-center gap-2">
              <AlertOctagon className="w-5 h-5" /> Когда НЕ нужно использовать
              Firebase?
            </h3>
            <div className="space-y-3 text-xs md:text-sm text-slate-400 leading-relaxed">
              <p>
                <strong className="text-slate-200">
                  Сложная аналитика и тяжелый поиск:
                </strong>{" "}
                NoSQL базы плохо подходят для генерации сложных отчетов или
                тяжелых текстовых поисков по куче связанных сущностей.
              </p>
              <p>
                <strong className="text-slate-200">Огромный трафик:</strong> В
                Firebase бесплатный тариф очень щедрый, но если твой проект
                резко вырастет до миллионов юзеров, плата за каждое
                чтение/запись данных (Read/Write operations) может стать
                золотой.
              </p>
              <p>
                <strong className="text-slate-200">
                  Строгие требования к локализации:
                </strong>{" "}
                Если по закону персональные данные граждан должны храниться
                строго на физических серверах внутри определенной страны, облака
                Google использовать не получится.
              </p>
            </div>
          </div>
        </section>

        {/* SUMMARY / ЗАКЛЮЧЕНИЕ К УРОКУ */}
        <section className="border-t border-slate-900 pt-12 text-center max-w-xl mx-auto space-y-4">
          <div className="p-3 bg-slate-900 rounded-full w-fit mx-auto border border-slate-800">
            <Layers className="w-5 h-5 text-orange-400" />
          </div>
          <h3 className="text-xl font-bold">Итог урока</h3>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
            Главное, что нужно понять: Firebase — это твой легальный чит-код в
            мире веб-разработки. Он позволяет закрывать потребности клиентов
            «под ключ» в одиночку, ускоряет сборку MVP стартапов и дает отличную
            базу для понимания того, как фронтенд общается с сервером.
          </p>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-900 bg-slate-950 text-center py-10 text-[11px] text-slate-600 font-mono">
        <div>
          Финальный модуль курса • Развертывание и Облачные платформы • 2026
        </div>
      </footer>
    </div>
  );
}
