import { useState } from "react";
import { PdfModal } from "./PdfModal";

export const CertificationCard = ({ title, pdfSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="mx-auto w-full max-w-xs sm:max-w-sm rounded-lg overflow-hidden border border-zinc-700 bg-zinc-900 aspect-[1/1.414] cursor-pointer hover:border-emerald-500 transition-colors"
        role="button"
        tabIndex={0}
        aria-label={`Open ${title}`}
        onClick={() => setIsOpen(true)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
      >
        <iframe
          title={`${title} preview`}
          src={`${pdfSrc}#page=1&view=Fit&toolbar=0&navpanes=0`}
          className="w-full h-full pointer-events-none"
          loading="lazy"
          scrolling="no"
        />
      </div>
      <PdfModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        pdfSrc={pdfSrc}
      />
    </>
  );
};
