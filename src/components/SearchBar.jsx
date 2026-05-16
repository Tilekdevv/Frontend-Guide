import { motion } from "framer-motion";
import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative max-w-2xl mx-auto"
    >
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Поиск по категориям..."
        className="w-full pl-12 pr-4 py-4 glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-gray-100 placeholder-gray-400"
      />
    </motion.div>
  );
};

export default SearchBar;
