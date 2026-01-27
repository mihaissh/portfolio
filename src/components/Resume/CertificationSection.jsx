import { Reveal } from "../About/Reveal";
import { DownloadButtons } from "./DownloadButtons";

export const CertificationSection = ({ pdfSrc }) => {
  const downloads = [
    {
      href: pdfSrc,
      label: "Download Certification PDF",
    },
    {
      href: "/resume/MS-Resume.pdf",
      label: "Download Resume as PDF",
    },
  ];

  return (
    <Reveal>
      <div className="mt-10">
        <h3 className="text-xl font-bold text-white mb-3">Certification</h3>
        <DownloadButtons items={downloads} />
      </div>
    </Reveal>
  );
};
