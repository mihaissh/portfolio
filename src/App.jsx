import "./App.css";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { FiHome } from "react-icons/fi";
import { Footer } from "./components/Homepage/Footer";

// Lazy load pages for better performance
const Homepage = lazy(() => import("./pages/Homepage").then(module => ({ default: module.Homepage })));
const AboutMe = lazy(() => import("./pages/AboutMe").then(module => ({ default: module.AboutMe })));
const Projects = lazy(() => import("./pages/Projects").then(module => ({ default: module.Projects })));
const Resume = lazy(() => import("./pages/Resume").then(module => ({ default: module.Resume })));
const NotFound = lazy(() => import("./pages/NotFound").then(module => ({ default: module.NotFound })));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 px-4 py-12 text-zinc-50 relative">
        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
          <Link 
            to="/" 
            className="mb-4 relative group transition-all duration-300"
            aria-label="Home"
          >
            <FiHome className="h-10 w-10 text-emerald-400 transition-all duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 -m-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </Link>
          <div className="w-full">
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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
