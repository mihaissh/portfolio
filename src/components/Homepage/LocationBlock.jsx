import { Block } from "./Block";

// Create a custom compass icon component
const CompassLoopIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    className={className}
  >
    <mask id="lineMdCompassLoop0">
      <g
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="64"
          strokeDashoffset="64"
          d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          />
        </path>
        <path
          fill="#fff"
          stroke="none"
          d="M11 11L12 12L13 13L12 12z"
          transform="rotate(-180 12 12)"
        >
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.6s"
            dur="0.3s"
            values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"
          />
          <animateTransform
            attributeName="transform"
            dur="9s"
            repeatCount="indefinite"
            type="rotate"
            values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"
          />
        </path>
        <circle cx="12" cy="12" r="1" fill="#000" fillOpacity="0" stroke="none">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.9s"
            dur="0.15s"
            values="0;1"
          />
        </circle>
      </g>
    </mask>
    <rect
      width="24"
      height="24"
      fill="currentColor"
      mask="url(#lineMdCompassLoop0)"
    />
  </svg>
);

export const LocationBlock = () => {
  return (
    <Block className="col-span-12 flex flex-col items-center gap-4 md:col-span-3">
      <CompassLoopIcon className="text-3xl" />
      <p className="text-center text-lg text-zinc-400">Open for relocation</p>
    </Block>
  );
};
