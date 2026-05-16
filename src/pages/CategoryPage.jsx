import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import Navbar from "../components/Navbar";
import { categories } from "../data/categories";

const CategoryPage = () => {
  const { slug } = useParams();
  const category = categories.find((cat) => cat.slug === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-100 mb-4">
            Категория не найдена
          </h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Navbar />

      <main className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
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

          {/* Category Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-3xl p-8 mb-8"
          >
            <div className="flex items-start space-x-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}
              >
                <category.icon className="w-10 h-10 text-white" />
              </motion.div>

              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-100 mb-4">
                  {category.title}
                </h1>
                <p className="text-gray-400 text-lg mb-6">
                  {category.description}
                </p>

                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>{category.lessons} уроков</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>~{category.lessons * 30} минут</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-3xl p-12 text-center"
          >
            <div className="text-6xl mb-4">🚀</div>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">
              Контент в разработке
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Мы работаем над созданием качественного контента для этой
              категории. Скоро здесь появятся уроки, практические задания и
              многое другое!
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default CategoryPage;
