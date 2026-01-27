import { FiDownload } from "react-icons/fi";

export const DownloadButtons = ({ items }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mt-4">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          download
          className="px-6 py-3 bg-zinc-800 rounded-lg flex items-center gap-3 hover:bg-zinc-700 transition-colors border border-zinc-700 hover:border-emerald-500"
        >
          <FiDownload className="text-emerald-400 text-xl" />
          <span className="text-zinc-300 font-medium">{item.label}</span>
        </a>
      ))}
    </div>
  );
};
