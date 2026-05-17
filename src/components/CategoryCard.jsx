import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CategoryCard = ({ category, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <Link to={`/category/${category.slug}`}>
        <div className="h-full glass glass-hover rounded-2xl p-6 transition-all duration-300 relative overflow-hidden">
          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 shadow-lg`}
            >
              <category.icon className="w-7 h-7 text-white" />
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:text-blue-400 transition-colors">
              {category.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {category.description}
            </p>

            {/* Arrow indicator on hover */}
            <motion.div
              className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity flex justify-end"
              whileHover={{ x: 5 }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
