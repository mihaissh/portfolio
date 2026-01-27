import { useEffect } from "react";
import { FiX } from "react-icons/fi";

export const PdfModal = ({ isOpen, onClose, title, pdfSrc }) => {
  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/80"
        aria-label="Close modal"
      />
      <div className="relative w-[90vw] max-w-4xl h-[85vh]">
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-0 text-zinc-200 hover:text-emerald-300 transition-colors"
          aria-label="Close"
        >
          <FiX size={28} />
        </button>
        <div className="w-full h-full rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900">
          <iframe
            title={title}
            src={`${pdfSrc}#page=1&view=Fit&toolbar=0&navpanes=0`}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
