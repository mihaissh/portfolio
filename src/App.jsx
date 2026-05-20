import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Footer } from "./components/Homepage/Footer";
import { StarsCanvas } from "./components/Homepage/Stars";

const Homepage = lazy(() => import("./pages/Homepage").then(m => ({ default: m.Homepage })));
const AboutMe = lazy(() => import("./pages/AboutMe").then(m => ({ default: m.AboutMe })));
const Projects = lazy(() => import("./pages/Projects").then(m => ({ default: m.Projects })));
const Resume = lazy(() => import("./pages/Resume").then(m => ({ default: m.Resume })));
const SnakeGame = lazy(() => import("./pages/SnakeGame").then(m => ({ default: m.SnakeGame })));
const NotFound = lazy(() => import("./pages/NotFound").then(m => ({ default: m.NotFound })));

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-12 text-zinc-50 relative">
      <StarsCanvas />
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
