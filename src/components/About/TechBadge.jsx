export const TechBadge = ({ children }) => {
    return (
        <span className="text-xs px-2 py-1 rounded bg-zinc-700 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-cyan-500 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer">
            {children}
        </span>
    )
}