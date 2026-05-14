import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarsCanvas } from "../components/Homepage/Stars";
import { FiArrowLeft, FiRefreshCw, FiPlay, FiAward, FiArrowUp, FiArrowDown, FiArrowLeft as FiArrowLeftIcon, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 10, y: 11 },
  { x: 10, y: 12 },
];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const SPEED = 100;

export const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(localStorage.getItem("snakeHighScore2D") || 0);
  const [isPaused, setIsPaused] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  const moveSnake = useCallback(() => {
    if (gameOver || isPaused || !gameStarted) return;

    setSnake((prevSnake) => {
      const head = prevSnake[0];
      const newHead = {
        x: head.x + direction.x,
        y: head.y + direction.y,
      };

      // Check collisions with walls
      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE
      ) {
        setGameOver(true);
        return prevSnake;
      }

      // Check collision with self
      if (prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check food
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore((s) => s + 10);
        generateFood(newSnake);
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, gameOver, isPaused, gameStarted]);

  const generateFood = (currentSnake) => {
    let newFood;
    while (true) {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
      if (!currentSnake.some((s) => s.x === newFood.x && s.y === newFood.y)) break;
    }
    setFood(newFood);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        case " ":
          if (gameOver) resetGame();
          else if (!gameStarted) startGame();
          else setIsPaused((p) => !p);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, gameOver, gameStarted]);

  useEffect(() => {
    const interval = setInterval(moveSnake, SPEED);
    return () => clearInterval(interval);
  }, [moveSnake]);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("snakeHighScore2D", score);
    }
  }, [score, highScore]);

  const startGame = () => {
    setGameStarted(true);
    setIsPaused(false);
  };

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
    setGameStarted(true);
    generateFood(INITIAL_SNAKE);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <StarsCanvas />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 flex flex-col h-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-start mb-12"
        >
          <div>
            <Link
              to="/"
              className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors mb-4"
            >
              <FiArrowLeft className="text-lg transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
              SNAKE <span className="text-zinc-600">2D</span>
            </h1>
          </div>
          
          <button
            onClick={resetGame}
            className="p-4 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all active:scale-95"
          >
            <FiRefreshCw className="text-xl" />
          </button>
        </motion.div>

        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Game Board Column */}
          <div className="col-span-12 lg:col-span-8 flex justify-center">
            <div className="relative p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
              <div 
                className="grid bg-white/5 rounded-xl overflow-hidden"
                style={{ 
                  gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                  width: "min(80vw, 500px)",
                  height: "min(80vw, 500px)"
                }}
              >
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
                  const x = i % GRID_SIZE;
                  const y = Math.floor(i / GRID_SIZE);
                  const isSnake = snake.some((s) => s.x === x && s.y === y);
                  const isHead = snake[0].x === x && snake[0].y === y;
                  const isFood = food.x === x && food.y === y;

                  return (
                    <div 
                      key={i} 
                      className="relative border-[0.5px] border-white/5"
                    >
                      {isSnake && (
                        <motion.div 
                          layoutId={`snake-${x}-${y}`}
                          className={`absolute inset-[2px] rounded-sm ${isHead ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.5)]' : 'bg-emerald-600/50'}`}
                        />
                      )}
                      {isFood && (
                        <motion.div 
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 1 }}
                          className="absolute inset-[4px] rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Overlays */}
              <AnimatePresence>
                {(!gameStarted || isPaused || gameOver) && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-xl"
                  >
                    <div className="text-center p-8">
                      {gameOver ? (
                        <>
                          <FiAward className="text-5xl text-rose-500 mx-auto mb-4" />
                          <h2 className="text-3xl font-bold text-white mb-2">Game Over</h2>
                          <p className="text-zinc-400 mb-6">Final Score: {score}</p>
                          <button
                            onClick={resetGame}
                            className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-emerald-400 transition-colors active:scale-95"
                          >
                            Try Again
                          </button>
                        </>
                      ) : (
                        <>
                          <FiPlay className="text-5xl text-emerald-500 mx-auto mb-4" />
                          <h2 className="text-3xl font-bold text-white mb-2">{isPaused ? "Paused" : "Snake 2D"}</h2>
                          <p className="text-zinc-400 mb-6">{isPaused ? "Press Space to resume" : "Press Space to start"}</p>
                          <button
                            onClick={isPaused ? (gameStarted ? () => setIsPaused(false) : startGame) : startGame}
                            className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-emerald-400 transition-colors active:scale-95"
                          >
                            {!gameStarted ? "Start Game" : (isPaused ? "Resume" : "Start Game")}
                          </button>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Instructions Column */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            {/* Score Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Current Score</span>
                  <span className="text-3xl font-bold text-emerald-400">{score}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">High Score</span>
                  <span className="text-3xl font-bold text-white">{highScore}</span>
                </div>
              </div>
            </div>

            {/* Controls Card */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-6">Instructions</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Move Up</span>
                  <kbd className="flex items-center justify-center size-8 rounded bg-white/5 border border-white/10 text-white shadow-lg"><FiArrowUp /></kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Move Down</span>
                  <kbd className="flex items-center justify-center size-8 rounded bg-white/5 border border-white/10 text-white shadow-lg"><FiArrowDown /></kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Move Left</span>
                  <kbd className="flex items-center justify-center size-8 rounded bg-white/5 border border-white/10 text-white shadow-lg"><FiArrowLeftIcon /></kbd>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Move Right</span>
                  <kbd className="flex items-center justify-center size-8 rounded bg-white/5 border border-white/10 text-white shadow-lg"><FiArrowRight /></kbd>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Pause / Start</span>
                  <kbd className="px-3 py-1 rounded bg-white/5 border border-white/10 text-white text-[10px] font-mono shadow-lg uppercase">Space</kbd>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <p className="text-[10px] text-emerald-500/70 leading-relaxed uppercase tracking-wider">
                  Eat the red dots to grow and increase your score. Avoid hitting the walls or yourself!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
