import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiRefreshCw,
  FiPlay,
  FiAward,
  FiArrowUp,
  FiArrowDown,
  FiArrowLeft as FiArrowLeftIcon,
  FiArrowRight,
  FiPause,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 10, y: 10 },
  { x: 10, y: 11 },
  { x: 10, y: 12 },
];
const INITIAL_DIRECTION = { x: 0, y: -1 };
const SPEED = 120;
const SWIPE_THRESHOLD = 30;

const DirectionButton = ({ onClick, children, className = "", label }) => (
  <button
    type="button"
    onClick={(e) => {
      e.preventDefault();
      onClick();
    }}
    className={`flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white active:bg-emerald-500/30 active:border-emerald-500/40 active:scale-95 transition-all touch-manipulation select-none ${className}`}
    aria-label={label}
  >
    {children}
  </button>
);

const MobileControls = ({ onDirection, onPause, isPaused, gameStarted, gameOver }) => (
  <div className="lg:hidden w-full max-w-[500px] mx-auto">
    <div className="grid grid-cols-3 gap-2 mt-4">
      <div />
      <DirectionButton onClick={() => onDirection("up")} className="h-14" label="Move up">
        <FiArrowUp className="text-xl" />
      </DirectionButton>
      <div />
      <DirectionButton onClick={() => onDirection("left")} className="h-14" label="Move left">
        <FiArrowLeftIcon className="text-xl" />
      </DirectionButton>
      <DirectionButton
        onClick={onPause}
        className="h-14 bg-emerald-500/10 border-emerald-500/20"
        label="Play or pause"
      >
        {gameOver ? (
          <FiRefreshCw className="text-xl" />
        ) : isPaused || !gameStarted ? (
          <FiPlay className="text-xl" />
        ) : (
          <FiPause className="text-xl" />
        )}
      </DirectionButton>
      <DirectionButton onClick={() => onDirection("right")} className="h-14" label="Move right">
        <FiArrowRight className="text-xl" />
      </DirectionButton>
      <div />
      <DirectionButton onClick={() => onDirection("down")} className="h-14" label="Move down">
        <FiArrowDown className="text-xl" />
      </DirectionButton>
      <div />
    </div>
  </div>
);

export const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem("snakeHighScore2D");
    return saved ? Number(saved) : 0;
  });
  const [isPaused, setIsPaused] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);

  const directionRef = useRef(INITIAL_DIRECTION);
  const foodRef = useRef({ x: 5, y: 5 });
  const snakeRef = useRef(INITIAL_SNAKE);
  const gameStateRef = useRef({ gameOver: false, isPaused: true, gameStarted: false });
  const touchStartRef = useRef(null);
  const boardRef = useRef(null);

  const createFood = useCallback((currentSnake) => {
    let newFood;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (currentSnake.some((s) => s.x === newFood.x && s.y === newFood.y));
    return newFood;
  }, []);

  const generateFood = useCallback(
    (currentSnake) => {
      const newFood = createFood(currentSnake);
      foodRef.current = newFood;
      setFood(newFood);
    },
    [createFood]
  );

  const changeDirection = useCallback((nextDirection) => {
    const current = directionRef.current;

    if (nextDirection === "up" && current.y === 0) {
      directionRef.current = { x: 0, y: -1 };
    } else if (nextDirection === "down" && current.y === 0) {
      directionRef.current = { x: 0, y: 1 };
    } else if (nextDirection === "left" && current.x === 0) {
      directionRef.current = { x: -1, y: 0 };
    } else if (nextDirection === "right" && current.x === 0) {
      directionRef.current = { x: 1, y: 0 };
    }
  }, []);

  const startGame = useCallback(() => {
    gameStateRef.current = { ...gameStateRef.current, gameStarted: true, isPaused: false };
    setGameStarted(true);
    setIsPaused(false);
  }, []);

  const resetGame = useCallback(() => {
    directionRef.current = INITIAL_DIRECTION;
    gameStateRef.current = { gameOver: false, isPaused: false, gameStarted: true };
    snakeRef.current = INITIAL_SNAKE;
    setSnake(INITIAL_SNAKE);
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
    setGameStarted(true);
    generateFood(INITIAL_SNAKE);
  }, [generateFood]);

  const togglePause = useCallback(() => {
    if (gameStateRef.current.gameOver) {
      resetGame();
      return;
    }
    if (!gameStateRef.current.gameStarted) {
      startGame();
      return;
    }
    setIsPaused((p) => {
      const next = !p;
      gameStateRef.current.isPaused = next;
      return next;
    });
  }, [resetGame, startGame]);

  useEffect(() => {
    gameStateRef.current = { gameOver, isPaused, gameStarted };
  }, [gameOver, isPaused, gameStarted]);

  useEffect(() => {
    snakeRef.current = snake;
  }, [snake]);

  useEffect(() => {
    const tick = () => {
      const { gameOver: over, isPaused: paused, gameStarted: started } = gameStateRef.current;
      if (over || paused || !started) return;

      const prevSnake = snakeRef.current;
      const head = prevSnake[0];
      const dir = directionRef.current;
      const newHead = { x: head.x + dir.x, y: head.y + dir.y };
      const currentFood = foodRef.current;

      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE ||
        prevSnake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
      ) {
        gameStateRef.current.gameOver = true;
        setGameOver(true);
        return;
      }

      const ateFood = newHead.x === currentFood.x && newHead.y === currentFood.y;
      const nextSnake = [newHead, ...prevSnake];
      if (!ateFood) nextSnake.pop();

      snakeRef.current = nextSnake;
      setSnake(nextSnake);

      if (ateFood) {
        setScore((s) => s + 10);
        const newFood = createFood(nextSnake);
        foodRef.current = newFood;
        setFood(newFood);
      }
    };

    const interval = setInterval(tick, SPEED);
    return () => clearInterval(interval);
  }, [createFood]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case "ArrowUp":
          changeDirection("up");
          break;
        case "ArrowDown":
          changeDirection("down");
          break;
        case "ArrowLeft":
          changeDirection("left");
          break;
        case "ArrowRight":
          changeDirection("right");
          break;
        case " ":
          togglePause();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [changeDirection, togglePause]);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("snakeHighScore2D", String(score));
    }
  }, [score, highScore]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    const { gameOver: over, isPaused: paused, gameStarted: started } = gameStateRef.current;
    if (!touchStartRef.current || over || paused || !started) return;

    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;

    if (Math.abs(deltaX) < SWIPE_THRESHOLD && Math.abs(deltaY) < SWIPE_THRESHOLD) {
      touchStartRef.current = null;
      return;
    }

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      changeDirection(deltaX > 0 ? "right" : "left");
    } else {
      changeDirection(deltaY > 0 ? "down" : "up");
    }

    touchStartRef.current = null;
  };

  const snakeSet = new Set(snake.map((s) => `${s.x},${s.y}`));
  const head = snake[0];

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-start mb-6 md:mb-12 gap-4"
        >
          <div className="min-w-0">
            <Link
              to="/"
              className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors mb-3 md:mb-4"
            >
              <FiArrowLeft className="text-lg transition-transform group-hover:-translate-x-1 shrink-0" />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter text-white">
              SNAKE <span className="text-zinc-600">2D</span>
            </h1>
          </div>

          <button
            type="button"
            onClick={resetGame}
            className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all active:scale-95 shrink-0"
            aria-label="Reset game"
          >
            <FiRefreshCw className="text-lg md:text-xl" />
          </button>
        </motion.div>

        <div className="lg:hidden mb-4 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Score</span>
              <span className="text-2xl font-bold text-emerald-400">{score}</span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">High Score</span>
              <span className="text-2xl font-bold text-white">{highScore}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="col-span-12 lg:col-span-8 flex flex-col items-center">
            <div
              ref={boardRef}
              className="relative p-1 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl w-full max-w-[500px]"
            >
              <div
                className="relative w-full bg-white/5 rounded-xl overflow-hidden touch-none select-none"
                style={{ paddingBottom: "100%" }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="absolute inset-0 grid"
                  style={{
                    gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                    gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
                  }}
                >
                  {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
                    const x = i % GRID_SIZE;
                    const y = Math.floor(i / GRID_SIZE);
                    const key = `${x},${y}`;
                    const isSnake = snakeSet.has(key);
                    const isHead = head.x === x && head.y === y;
                    const isFood = food.x === x && food.y === y;

                    return (
                      <div key={i} className="relative border-[0.5px] border-white/5">
                        {isSnake && (
                          <div
                            className={`absolute inset-[1px] sm:inset-[2px] rounded-sm ${
                              isHead
                                ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]"
                                : "bg-emerald-600/60"
                            }`}
                          />
                        )}
                        {isFood && (
                          <div className="absolute inset-[2px] sm:inset-[3px] rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.5)] animate-pulse" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              <AnimatePresence>
                {(!gameStarted || isPaused || gameOver) && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-xl p-4"
                  >
                    <div className="text-center">
                      {gameOver ? (
                        <>
                          <FiAward className="text-4xl sm:text-5xl text-rose-500 mx-auto mb-3" />
                          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Game Over</h2>
                          <p className="text-zinc-400 mb-5 text-sm sm:text-base">Final Score: {score}</p>
                          <button
                            type="button"
                            onClick={resetGame}
                            className="px-6 sm:px-8 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-emerald-400 transition-colors active:scale-95 text-sm"
                          >
                            Try Again
                          </button>
                        </>
                      ) : (
                        <>
                          <FiPlay className="text-4xl sm:text-5xl text-emerald-500 mx-auto mb-3" />
                          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                            {isPaused && gameStarted ? "Paused" : "Snake 2D"}
                          </h2>
                          <p className="text-zinc-400 mb-5 text-sm sm:text-base px-2">
                            {isPaused && gameStarted
                              ? "Tap play or press Space to resume"
                              : "Use the D-pad, swipe, or arrow keys"}
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              gameStateRef.current.isPaused = false;
                              setIsPaused(false);
                              if (!gameStarted) startGame();
                            }}
                            className="px-6 sm:px-8 py-3 bg-white text-black font-bold uppercase tracking-widest rounded-lg hover:bg-emerald-400 transition-colors active:scale-95 text-sm"
                          >
                            {!gameStarted ? "Start Game" : "Resume"}
                          </button>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <MobileControls
              onDirection={changeDirection}
              onPause={togglePause}
              isPaused={isPaused}
              gameStarted={gameStarted}
              gameOver={gameOver}
            />

            <p className="lg:hidden mt-3 text-[10px] text-zinc-600 font-mono uppercase tracking-[0.2em] text-center">
              Swipe on board or use D-pad
            </p>
          </div>

          <div className="col-span-12 lg:col-span-4 space-y-4 md:space-y-6">
            <div className="hidden lg:block p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex justify-between items-center">
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

            <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 mb-4 md:mb-6">
                Instructions
              </h3>

              <div className="space-y-3 md:space-y-4">
                <div className="hidden md:flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Move Up</span>
                  <kbd className="flex items-center justify-center size-8 rounded bg-white/5 border border-white/10 text-white shadow-lg">
                    <FiArrowUp />
                  </kbd>
                </div>
                <div className="hidden md:flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Move Down</span>
                  <kbd className="flex items-center justify-center size-8 rounded bg-white/5 border border-white/10 text-white shadow-lg">
                    <FiArrowDown />
                  </kbd>
                </div>
                <div className="hidden md:flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Move Left</span>
                  <kbd className="flex items-center justify-center size-8 rounded bg-white/5 border border-white/10 text-white shadow-lg">
                    <FiArrowLeftIcon />
                  </kbd>
                </div>
                <div className="hidden md:flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Move Right</span>
                  <kbd className="flex items-center justify-center size-8 rounded bg-white/5 border border-white/10 text-white shadow-lg">
                    <FiArrowRight />
                  </kbd>
                </div>
                <div className="hidden md:flex pt-4 border-t border-white/10 items-center justify-between">
                  <span className="text-sm text-zinc-400">Pause / Start</span>
                  <kbd className="px-3 py-1 rounded bg-white/5 border border-white/10 text-white text-[10px] font-mono shadow-lg uppercase">
                    Space
                  </kbd>
                </div>

                <div className="md:hidden space-y-2 text-sm text-zinc-400">
                  <p>Use the on-screen D-pad below the board.</p>
                  <p>Swipe on the board to change direction.</p>
                  <p>Tap the center button to play, pause, or restart.</p>
                </div>
              </div>

              <div className="mt-4 md:mt-8 p-3 md:p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
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
