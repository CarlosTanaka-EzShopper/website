import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Lazy load pages for better performance
const AIShoppingAssistant = lazy(() => import("./pages/AIShoppingAssistant"));
const AIPricing = lazy(() => import("./pages/AIPricing"));
const AIInventory = lazy(() => import("./pages/AIInventory"));
const Contact = lazy(() => import("./pages/Contact"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/ai-shopping-assistant"
            element={<AIShoppingAssistant />}
          />
          <Route path="/ai-pricing" element={<AIPricing />} />
          <Route path="/ai-inventory" element={<AIInventory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
