import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ITPathPage from "./pages/ITPathPage";
import AIPage from "./pages/AIPage";
import StateManagementPage from "./pages/StateManagementPage";
import ReduxToolkitPage from "./pages/ReduxToolkitPage";
import RealWebsitesPage from "./pages/RealWebsitesPage";
import FirebasePage from "./pages/FirebasePage";
import WebsitePricingPage from "./pages/WebsitePricingPage";
import SEOPage from "./pages/SEOPage";
import JobSearchPage from "./pages/JobSearchPage";
import MotivationPage from "./pages/MotivationPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/it-path" element={<ITPathPage />} />
        <Route path="/category/ai" element={<AIPage />} />
        <Route
          path="/category/state-management"
          element={<StateManagementPage />}
        />
        <Route path="/category/redux-toolkit" element={<ReduxToolkitPage />} />
        <Route path="/category/real-websites" element={<RealWebsitesPage />} />
        <Route path="/category/firebase" element={<FirebasePage />} />
        <Route path="/category/pricing" element={<WebsitePricingPage />} />
        <Route path="/category/seo" element={<SEOPage />} />
        <Route path="/category/job-search" element={<JobSearchPage />} />
        <Route path="/category/motivation" element={<MotivationPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
