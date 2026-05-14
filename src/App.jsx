import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Footer } from "./components/Homepage/Footer";

// Lazy load pages for better performance
const Homepage = lazy(() => import("./pages/Homepage").then(module => ({ default: module.Homepage })));
const AboutMe = lazy(() => import("./pages/AboutMe").then(module => ({ default: module.AboutMe })));
const Projects = lazy(() => import("./pages/Projects").then(module => ({ default: module.Projects })));
const Resume = lazy(() => import("./pages/Resume").then(module => ({ default: module.Resume })));
const SnakeGame = lazy(() => import("./pages/SnakeGame").then(module => ({ default: module.SnakeGame })));
const NotFound = lazy(() => import("./pages/NotFound").then(module => ({ default: module.NotFound })));

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 text-zinc-50 relative">
      <div className="relative z-10 flex flex-col items-start w-full max-w-5xl">
        <main className="w-full">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-400"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/snake" element={<SnakeGame />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
