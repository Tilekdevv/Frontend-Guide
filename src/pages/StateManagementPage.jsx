import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  Layers,
  ArrowDown,
  Package,
  Globe,
  Zap,
  CheckCircle,
  XCircle,
  AlertCircle,
  Code,
  Box,
  Network,
  Database
} from 'lucide-react'
import Navbar from '../components/Navbar'

const StateManagementPage = () => {
  const [activeTab, setActiveTab] = useState('props')

  const comparisonData = [
    {
      feature: 'Сложность',
      props: { value: 'Очень просто', color: 'green' },
      context: { value: 'Средне', color: 'yellow' },
      redux: { value: 'Сложно', color: 'red' }
    },
    {
      feature: 'Настройка',
      props: { value: 'Не требуется', color: 'green' },
      context: { value: 'Минимальная', color: 'yellow' },
      redux: { value: 'Много кода', color: 'red' }
    },
    {
      feature: 'Размер проекта',
      props: { value: 'Маленький', color: 'green' },
      context: { value: 'Средний', color: 'yellow' },
      redux: { value: 'Большой', color: 'green' }
    },
    {
      feature: 'Производительность',
      props: { value: 'Отлично', color: 'green' },
      context: { value: 'Хорошо', color: 'yellow' },
      redux: { value: 'Отлично', color: 'green' }
    },
    {
      feature: 'Debugging',
      props: { value: 'Просто', color: 'green' },
      context: { value: 'Средне', color: 'yellow' },
      redux: { value: 'DevTools', color: 'green' }
    },
    {
      feature: 'Когда использовать',
      props: { value: 'Локальные данные', color: 'blue' },
      context: { value: 'Темы, язык, auth', color: 'blue' },
      redux: { value: 'Сложный state', color: 'blue' }
    }
  ]

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

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 mb-6"
            >
              <Layers className="w-10 h-10 text-white" />
            </motion.div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">
              Props vs Context API vs Redux Toolkit
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Полное сравнение способов управления состоянием в React
            </p>
          </motion.div>

          {/* Visual Comparison Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex justify-center space-x-4 mb-8">
              {['props', 'context', 'redux'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                      : 'glass text-gray-400 hover:text-gray-100'
                  }`}
                >
                  {tab === 'props' && 'Props'}
                  {tab === 'context' && 'Context API'}
                  {tab === 'redux' && 'Redux Toolkit'}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === 'props' && <PropsSection />}
              {activeTab === 'context' && <ContextSection />}
              {activeTab === 'redux' && <ReduxSection />}
            </motion.div>
          </motion.div>

          {/* Comparison Table */}
          <Section
            icon={Layers}
            title="Сравнительная таблица"
            gradient="from-blue-500 to-cyan-500"
          >
            <div className="glass rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="px-6 py-4 text-left text-gray-400 font-semibold">
                        Характеристика
                      </th>
                      <th className="px-6 py-4 text-center text-green-400 font-semibold">
                        Props
                      </th>
                      <th className="px-6 py-4 text-center text-blue-400 font-semibold">
                        Context API
                      </th>
                      <th className="px-6 py-4 text-center text-purple-400 font-semibold">
                        Redux Toolkit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-gray-800 hover:bg-white/5 transition-colors"
                      >
                        <td className="px-6 py-4 text-gray-300 font-medium">
                          {row.feature}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-block px-3 py-1 rounded-lg text-sm bg-${row.props.color}-500/20 text-${row.props.color}-400`}>
                            {row.props.value}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-block px-3 py-1 rounded-lg text-sm bg-${row.context.color}-500/20 text-${row.context.color}-400`}>
                            {row.context.value}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className={`inline-block px-3 py-1 rounded-lg text-sm bg-${row.redux.color}-500/20 text-${row.redux.color}-400`}>
                            {row.redux.value}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Section>

          {/* When to Use */}
          <Section
            icon={AlertCircle}
            title="Когда что использовать?"
            gradient="from-orange-500 to-red-500"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <UseCaseCard
                title="Props"
                icon={Box}
                gradient="from-green-500 to-emerald-500"
                cases={[
                  'Передача данных родитель → ребёнок',
                  'Маленькие компоненты',
                  'Локальные данные',
                  'Простые проекты'
                ]}
              />
              <UseCaseCard
                title="Context API"
                icon={Network}
                gradient="from-blue-500 to-cyan-500"
                cases={[
                  'Темы (dark/light mode)',
                  'Язык интерфейса',
                  'Данные пользователя',
                  'Средние проекты'
                ]}
              />
              <UseCaseCard
                title="Redux Toolkit"
                icon={Database}
                gradient="from-purple-500 to-pink-500"
                cases={[
                  'Большие приложения',
                  'Сложная логика state',
                  'Много компонентов',
                  'Нужен debugging'
                ]}
              />
            </div>
          </Section>

          {/* Real Examples */}
          <Section
            icon={Code}
            title="Реальные примеры кода"
            gradient="from-indigo-500 to-purple-500"
          >
            <div className="space-y-6">
              <CodeExample
                title="Props - Передача данных"
                description="Простая передача данных от родителя к ребёнку"
                code={`// Parent Component
function App() {
  const user = { name: 'Иван', age: 25 }
  
  return <UserCard user={user} />
}

// Child Component
function UserCard({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Возраст: {user.age}</p>
    </div>
  )
}`}
              />

              <CodeExample
                title="Context API - Global State"
                description="Создание глобального состояния для темы"
                code={`// ThemeContext.js
const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Использование в компоненте
function Header() {
  const { theme, setTheme } = useContext(ThemeContext)
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Сменить тему
    </button>
  )
}`}
              />

              <CodeExample
                title="Redux Toolkit - Store"
                description="Создание store для управления корзиной"
                code={`// cartSlice.js
import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    }
  }
})

export const { addItem, removeItem } = cartSlice.actions
export default cartSlice.reducer

// Использование в компоненте
function Cart() {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  
  return (
    <button onClick={() => dispatch(addItem({ id: 1, name: 'Товар' }))}>
      Добавить в корзину
    </button>
  )
}`}
              />
            </div>
          </Section>

          {/* Final Recommendation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 glass rounded-3xl p-8 md:p-12 text-center"
          >
            <div className="text-6xl mb-4">💡</div>
            <h3 className="text-3xl font-bold text-gray-100 mb-4">
              Главный совет
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto text-lg">
              Начинайте с Props. Если появляется props drilling — используйте Context API. 
              Если проект растёт и state становится сложным — переходите на Redux Toolkit.
            </p>
            <p className="text-gray-500 italic">
              Не используйте Redux просто потому что "так принято". Выбирайте инструмент под задачу!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// Sections Components
const PropsSection = () => (
  <div className="glass rounded-2xl p-8">
    <div className="flex items-start space-x-6 mb-8">
      <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
        <Box className="w-8 h-8 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-100 mb-3">Props</h3>
        <p className="text-gray-400 leading-relaxed">
          Props (properties) — это способ передачи данных от родительского компонента к дочернему. 
          Это самый простой и базовый способ работы с данными в React.
        </p>
      </div>
    </div>

    {/* Diagram */}
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-gray-200 mb-4">Как это работает:</h4>
      <div className="flex flex-col items-center space-y-4 p-6 bg-gray-900/50 rounded-xl">
        <div className="px-6 py-3 bg-green-500/20 border-2 border-green-500 rounded-lg text-green-400 font-mono">
          Parent Component
        </div>
        <ArrowDown className="w-6 h-6 text-green-400" />
        <div className="px-6 py-3 bg-green-500/10 border border-green-500/50 rounded-lg text-green-300 font-mono">
          Child Component
        </div>
      </div>
    </div>

    {/* Props Drilling Problem */}
    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
      <div className="flex items-start space-x-3 mb-3">
        <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
        <h4 className="text-lg font-semibold text-red-400">Props Drilling - Проблема</h4>
      </div>
      <p className="text-gray-300 mb-4">
        Когда нужно передать данные через много уровней компонентов, код становится сложным:
      </p>
      <div className="flex flex-col items-center space-y-2 p-4 bg-gray-900/50 rounded-lg">
        <div className="text-sm text-gray-400 font-mono">App → Header → Nav → Button</div>
        <p className="text-xs text-gray-500">Данные проходят через все компоненты, даже если им не нужны</p>
      </div>
    </div>

    <div className="mt-6 grid md:grid-cols-2 gap-4">
      <div className="flex items-start space-x-3">
        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
        <div>
          <p className="text-gray-300 font-medium">Плюсы</p>
          <p className="text-sm text-gray-500">Просто, понятно, быстро</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
        <div>
          <p className="text-gray-300 font-medium">Минусы</p>
          <p className="text-sm text-gray-500">Props drilling в больших проектах</p>
        </div>
      </div>
    </div>
  </div>
)

const ContextSection = () => (
  <div className="glass rounded-2xl p-8">
    <div className="flex items-start space-x-6 mb-8">
      <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
        <Network className="w-8 h-8 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-100 mb-3">Context API</h3>
        <p className="text-gray-400 leading-relaxed">
          Context API — встроенное решение React для создания глобального состояния. 
          Позволяет избежать props drilling и делиться данными между компонентами.
        </p>
      </div>
    </div>

    {/* Diagram */}
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-gray-200 mb-4">Как это работает:</h4>
      <div className="p-6 bg-gray-900/50 rounded-xl">
        <div className="flex flex-col items-center space-y-4">
          <div className="px-6 py-3 bg-blue-500/20 border-2 border-blue-500 rounded-lg text-blue-400 font-mono">
            Context Provider
          </div>
          <div className="flex space-x-4">
            <ArrowDown className="w-6 h-6 text-blue-400" />
            <ArrowDown className="w-6 h-6 text-blue-400" />
            <ArrowDown className="w-6 h-6 text-blue-400" />
          </div>
          <div className="flex space-x-4">
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/50 rounded-lg text-blue-300 font-mono text-sm">
              Component A
            </div>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/50 rounded-lg text-blue-300 font-mono text-sm">
              Component B
            </div>
            <div className="px-4 py-2 bg-blue-500/10 border border-blue-500/50 rounded-lg text-blue-300 font-mono text-sm">
              Component C
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500 mt-4">
          Все компоненты получают доступ к данным напрямую
        </p>
      </div>
    </div>

    {/* Use Cases */}
    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-6">
      <h4 className="text-lg font-semibold text-blue-400 mb-3">Где использовать:</h4>
      <ul className="space-y-2">
        {['Темы (dark/light mode)', 'Язык интерфейса (i18n)', 'Данные авторизованного пользователя', 'Настройки приложения'].map((item, i) => (
          <li key={i} className="flex items-center space-x-2 text-gray-300">
            <CheckCircle className="w-4 h-4 text-blue-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <div className="flex items-start space-x-3">
        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
        <div>
          <p className="text-gray-300 font-medium">Плюсы</p>
          <p className="text-sm text-gray-500">Встроен в React, нет props drilling</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
        <div>
          <p className="text-gray-300 font-medium">Минусы</p>
          <p className="text-sm text-gray-500">Может вызвать лишние ре-рендеры</p>
        </div>
      </div>
    </div>
  </div>
)

const ReduxSection = () => (
  <div className="glass rounded-2xl p-8">
    <div className="flex items-start space-x-6 mb-8">
      <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
        <Database className="w-8 h-8 text-white" />
      </div>
      <div className="flex-1">
        <h3 className="text-2xl font-bold text-gray-100 mb-3">Redux Toolkit</h3>
        <p className="text-gray-400 leading-relaxed">
          Redux Toolkit — мощная библиотека для управления состоянием в больших приложениях. 
          Предоставляет предсказуемый способ изменения state и отличные инструменты для отладки.
        </p>
      </div>
    </div>

    {/* Diagram */}
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-gray-200 mb-4">Как это работает:</h4>
      <div className="p-6 bg-gray-900/50 rounded-xl">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="px-4 py-3 bg-purple-500/20 border border-purple-500 rounded-lg text-purple-400 font-mono text-sm mb-2">
              Component
            </div>
            <p className="text-xs text-gray-500">Dispatch Action</p>
          </div>
          <div className="text-center">
            <div className="px-4 py-3 bg-purple-500/20 border border-purple-500 rounded-lg text-purple-400 font-mono text-sm mb-2">
              Reducer
            </div>
            <p className="text-xs text-gray-500">Update State</p>
          </div>
          <div className="text-center">
            <div className="px-4 py-3 bg-purple-500/20 border border-purple-500 rounded-lg text-purple-400 font-mono text-sm mb-2">
              Store
            </div>
            <p className="text-xs text-gray-500">Global State</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex items-center space-x-2 text-purple-400">
            <span className="text-sm">→</span>
            <span className="text-sm">→</span>
            <span className="text-sm">→</span>
            <span className="text-sm">Цикл обновления</span>
          </div>
        </div>
      </div>
    </div>

    {/* For Big Projects */}
    <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6 mb-6">
      <h4 className="text-lg font-semibold text-purple-400 mb-3">Для больших проектов:</h4>
      <ul className="space-y-2">
        {[
          'Сложная логика изменения state',
          'Много компонентов используют одни данные',
          'Нужна история изменений (time-travel debugging)',
          'Middleware для async операций'
        ].map((item, i) => (
          <li key={i} className="flex items-center space-x-2 text-gray-300">
            <CheckCircle className="w-4 h-4 text-purple-400" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <div className="flex items-start space-x-3">
        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
        <div>
          <p className="text-gray-300 font-medium">Плюсы</p>
          <p className="text-sm text-gray-500">Мощный, предсказуемый, DevTools</p>
        </div>
      </div>
      <div className="flex items-start space-x-3">
        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
        <div>
          <p className="text-gray-300 font-medium">Минусы</p>
          <p className="text-sm text-gray-500">Много boilerplate кода</p>
        </div>
      </div>
    </div>
  </div>
)

const Section = ({ icon: Icon, title, gradient, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    className="mb-20"
  >
    <div className="flex items-center space-x-3 mb-8">
      <div className={`p-3 rounded-xl bg-gradient-to-br ${gradient}`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h2 className="text-3xl font-bold text-gray-100">{title}</h2>
    </div>
    {children}
  </motion.section>
)

const UseCaseCard = ({ title, icon: Icon, gradient, cases }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="glass rounded-2xl p-6"
  >
    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4`}>
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-bold text-gray-100 mb-4">{title}</h3>
    <ul className="space-y-2">
      {cases.map((item, i) => (
        <li key={i} className="flex items-start space-x-2 text-gray-400 text-sm">
          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
)

const CodeExample = ({ title, description, code }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass rounded-2xl overflow-hidden"
  >
    <div className="px-6 py-4 border-b border-gray-700">
      <h3 className="text-lg font-bold text-gray-100 mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
    <div className="p-6 bg-gray-950/50">
      <pre className="text-sm text-gray-300 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  </motion.div>
)

export default StateManagementPage
