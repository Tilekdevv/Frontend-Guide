# 🚀 Quick Start Guide

## Запуск проекта

```bash
# Перейти в директорию проекта
cd /Users/tilekakyluulugmail.com/Desktop/final/frontend-dev-guide

# Установить зависимости (если ещё не установлены)
npm install

# Запустить dev сервер
npm run dev
```

Откройте браузер: **http://localhost:5173**

---

## 📄 Готовые страницы

### ✅ Главная страница (HomePage)

**URL:** `/`

**Функционал:**

- Hero section с заголовком
- Поиск по категориям
- 10 карточек категорий
- Статистика
- Navbar с dark/light mode

---

### ✅ IT и путь разработчика (ITPathPage)

**URL:** `/category/it-path`

**Контент:**

1. Что такое IT
2. Как развивается разработчик (Junior → Middle → Senior)
3. Почему важно учиться постоянно
4. Реальная работа frontend разработчика

**Особенности:**

- Sidebar navigation с автоскроллом
- Карточки ошибок новичков
- Типичный рабочий день
- Описание команды

---

### ✅ AI для разработчиков (AIPage)

**URL:** `/category/ai`

**Контент:**

1. Что такое AI
2. Как люди работали без AI (Раньше vs Сейчас)
3. Как программисты используют AI
4. Ограничения AI
5. **6 AI инструментов** (ChatGPT, Gemini, Claude, Copilot, Cursor, Grok)
6. Примеры промптов (с копированием)
7. Как правильно использовать AI

**Особенности:**

- Детальные карточки AI инструментов
- Копирование промптов одним кликом
- Сравнение "Раньше vs Сейчас"
- Best practices

---

### 🚧 Остальные категории (CategoryPage)

**URL:** `/category/:slug`

Показывает заглушку "Контент в разработке" для:

- state-management
- redux-toolkit
- real-websites
- firebase
- seo-google
- website-cost
- frontend-job
- motivation

---

## 🎨 Технологии

- **React 18** - UI библиотека
- **Vite** - dev сервер и сборщик
- **Tailwind CSS** - стилизация
- **Framer Motion** - анимации
- **React Router** - маршрутизация
- **Lucide React** - иконки

---

## 📁 Структура проекта

```
frontend-dev-guide/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Навигация + dark mode
│   │   ├── SearchBar.jsx       # Поиск по категориям
│   │   └── CategoryCard.jsx    # Карточка категории
│   ├── pages/
│   │   ├── HomePage.jsx        # Главная страница
│   │   ├── ITPathPage.jsx      # IT и путь разработчика
│   │   ├── AIPage.jsx          # AI для разработчиков
│   │   └── CategoryPage.jsx    # Заглушка для остальных
│   ├── data/
│   │   └── categories.js       # Данные категорий
│   ├── App.jsx                 # Роутинг
│   ├── main.jsx               # Entry point
│   └── index.css              # Глобальные стили
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🎯 Навигация по сайту

1. **Главная страница** → Кликните на карточку категории
2. **IT и путь разработчика** → Используйте sidebar для навигации
3. **AI для разработчиков** → Скроллите или кликайте на промпты
4. **Назад** → Кнопка "Назад к категориям" вверху каждой страницы

---

## ✨ Особенности UI

### Анимации

- Fade in при появлении элементов
- Hover эффекты на карточках
- Smooth scroll
- Плавные переходы

### Responsive дизайн

- Desktop: полная версия с sidebar
- Tablet: адаптивная сетка
- Mobile: стек элементов

### Dark mode

- По умолчанию включён
- Переключатель в navbar
- Glassmorphism эффекты

---

## 🔧 Команды

```bash
# Разработка
npm run dev

# Сборка для продакшена
npm run build

# Превью продакшен сборки
npm run preview
```

---

## 📝 Добавление новой страницы

1. Создайте файл в `src/pages/YourPage.jsx`
2. Добавьте роут в `src/App.jsx`:
   ```jsx
   <Route path="/category/your-slug" element={<YourPage />} />
   ```
3. Обновите slug в `src/data/categories.js`

---

## 🎨 Кастомизация

### Цвета

Редактируйте `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // ваши цвета
    }
  }
}
```

### Градиенты

В компонентах используются Tailwind градиенты:

- `from-blue-500 to-purple-600`
- `from-green-500 to-emerald-500`
- и т.д.

---

## 🐛 Troubleshooting

### Dev сервер не запускается

```bash
rm -rf node_modules
npm install
npm run dev
```

### Ошибки импортов

Проверьте пути в импортах (относительные пути)

### Стили не применяются

Проверьте, что Tailwind CSS настроен в `tailwind.config.js`

---

## 📚 Полезные ссылки

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev)

---

Готово! Проект полностью настроен и готов к использованию 🎉
