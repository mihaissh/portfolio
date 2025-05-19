import "./App.css";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import logo from "/logo.svg";
import { Footer } from "./components/Homepage/Footer";
import { AboutMe } from "./pages/AboutMe";
import { Homepage } from "./pages/Homepage";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 px-4 py-12 text-zinc-50 relative">
        <div className="relative z-10 flex flex-col items-center w-full max-w-4xl">
          <Link to="/">
            <img
              src="https://api.iconify.design/line-md:coffee-half-empty-filled-loop.svg?color=%235dc092"
              alt="SM_Logo"
              className="h-14 w-14 text-center mb-4 ease-in-out duration-100 hover:scale-110"
            />
          </Link>
          <div className="w-full">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
