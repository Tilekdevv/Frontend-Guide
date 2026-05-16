import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/categories";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter(
    (category) =>
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Background decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <Navbar />

      <main className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-gray-300">
                Добро пожаловать в мир frontend разработки
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Frontend Developer
              </span>
              <br />
              <span className="text-gray-100">Guide</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
            >
              Полный roadmap для frontend разработчика. От основ до продвинутых
              техник.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all"
            >
              Start Learning
            </motion.button>
          </motion.div>

          {/* Search Bar */}
          <div className="mb-12">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          {/* Categories Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-100">
                Категории обучения
              </h2>
              <span className="text-sm text-gray-400">
                {filteredCategories.length}{" "}
                {filteredCategories.length === 1 ? "категория" : "категорий"}
              </span>
            </div>

            {filteredCategories.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCategories.map((category, index) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-gray-400 text-lg">
                  Категории не найдены. Попробуйте другой запрос.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: "Уроков", value: "124+" },
              { label: "Часов контента", value: "50+" },
              { label: "Практических проектов", value: "15+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Frontend Developer Guide. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
