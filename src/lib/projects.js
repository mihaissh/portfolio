export const projects = [
  {
    id: 1,
    project: "Twitter Clone",
    date: "2022",
    websiteUrl: "https://twitterclone-f0512.web.app/",
    githubUrl: "/",
    shortDescription: "Twitter-style app with auth, posts, and realtime updates.",
    longDescription:
      "A Twitter clone I built to learn Firebase properly. React frontend, Firestore for posts and notifications, email + social auth. Tailwind for styling, hosted on Firebase.",
    features: [
      "Posts, likes, and notifications in realtime",
      "Email and social login",
      "Mobile-first layout",
    ],
    frontendStacks: [
      { name: "React Logo", path: "/tech/react.svg" },
      { name: "Javascript Logo", path: "/tech/javascript.svg" },
      { name: "TailwindCSS Logo", path: "/tech/tailwindcss.svg" },
      { name: "Firebase Logo", path: "/tech/firebase.svg" },
    ],
    backendStacks: [{ name: "Firebase Logo", path: "/tech/firebase.svg" }],
    clientLibraries: [{ name: "Git Logo", path: "/tech/git.svg" }],
  },
  {
    id: 2,
    project: "Calculator Web Application",
    date: "2022",
    websiteUrl: "https://calculator-app-ce141.web.app/",
    githubUrl: "/",
    shortDescription: "Calculator that parses full math expressions.",
    longDescription:
      "Simple calculator app — type an expression, get an answer. React state keeps a history of what you've calculated. Nothing fancy, but it works.",
    features: [
      "Expression parsing instead of button-by-button only",
      "Calculation history",
      "Responsive layout",
    ],
    frontendStacks: [
      { name: "React Logo", path: "/tech/react.svg" },
      { name: "Javascript Logo", path: "/tech/javascript.svg" },
      { name: "CSS Logo", path: "/tech/css.svg" },
    ],
    backendStacks: [{ name: "Firebase Logo", path: "/tech/firebase.svg" }],
    clientLibraries: [{ name: "Git Logo", path: "/tech/git.svg" }],
  },
  {
    id: 3,
    project: "Next.js Client Websites Portfolio",
    date: "2023",
    websiteUrl: "/",
    githubUrl: "/",
    shortDescription: "Three business sites for Raypath, Sophia Houses, and Betonix.",
    longDescription:
      "Three client sites built with Next.js and Tailwind. Carousels, contact forms with React Hook Form, lazy-loaded images. Deployed on Vercel.",
    features: [
      "Custom carousels and form components",
      "Lazy loading + WebP images",
      "Fully responsive layouts",
    ],
    frontendStacks: [
      { name: "NextJS Logo", path: "/tech/nextjs.svg" },
      { name: "Javascript Logo", path: "/tech/javascript.svg" },
      { name: "TailwindCSS Logo", path: "/tech/tailwindcss.svg" },
      { name: "React Hook Form Logo", path: "/tech/reacthookform.png" },
    ],
    backendStacks: [],
    clientLibraries: [
      { name: "Git Logo", path: "/tech/git.svg" },
      { name: "Vercel Logo", path: "/tech/vercel.svg" },
    ],
  },
  {
    id: 4,
    project: "Remax.md Real Estate Platform",
    date: "2023-2024",
    websiteUrl: "https://remax.md/",
    githubUrl: "/",
    shortDescription: "Property listings with an interactive map.",
    longDescription:
      "Worked on remax.md — property map with OpenStreetMap, WordPress for content, Docker for deployments. Spent a lot of time on PageSpeed and mobile layout.",
    features: [
      "Interactive property map",
      "WordPress integration",
      "Docker-based deploys",
    ],
    frontendStacks: [
      { name: "HTML Logo", path: "/tech/html.svg" },
      { name: "CSS Logo", path: "/tech/css.svg" },
      { name: "Javascript Logo", path: "/tech/javascript.svg" },
      { name: "jQuery Logo", path: "/tech/jquery.svg" },
      { name: "Bootstrap Logo", path: "/tech/bootstrap.svg" },
    ],
    backendStacks: [
      { name: "Python Logo", path: "/tech/python.svg" },
      { name: "WordPress Logo", path: "/tech/wordpress.svg" },
      { name: "Docker Logo", path: "/tech/docker.svg" },
    ],
    clientLibraries: [
      { name: "Git Logo", path: "/tech/git.svg" },
      { name: "OpenStreetMap Logo", path: "/tech/openmaps.svg" },
    ],
  },
  {
    id: 5,
    project: "Sunset Theme",
    date: "2025",
    websiteUrl: "/",
    githubUrl: "https://github.com/mihaissh/sunset_theme",
    shortDescription: "Warm orange Discord theme for Vencord.",
    longDescription:
      "Custom Vencord theme with a sunset color palette and floating panels. Built a small workflow to compile CSS and reload while tweaking colors.",
    features: [
      "Sunset orange palette",
      "Floating panel layout",
      "Live-reload dev setup",
    ],
    frontendStacks: [
      { name: "CSS Logo", path: "/tech/css.svg" },
      { name: "Javascript Logo", path: "/tech/javascript.svg" },
    ],
    backendStacks: [],
    clientLibraries: [{ name: "Git Logo", path: "/tech/git.svg" }],
  },
  {
    id: 6,
    project: "Quin69 VOD Archive",
    date: "2025",
    websiteUrl: "https://quin69-vod.vercel.app/",
    githubUrl: "https://github.com/mihaissh/quin69VOD",
    shortDescription: "Browse Quin69 Twitch VODs with synced chat replay.",
    longDescription:
      "VOD archive for Quin69's streams. Search and filter thousands of VODs, watch with chat replay in sync. React + MUI, deployed on Vercel.",
    features: [
      "Chat replay synced to video",
      "Search and filter by date, title, game",
      "Keyboard shortcuts",
    ],
    frontendStacks: [
      { name: "React Logo", path: "/tech/react.svg" },
      { name: "Javascript Logo", path: "/tech/javascript.svg" },
      { name: "CSS Logo", path: "/tech/css.svg" },
    ],
    backendStacks: [],
    clientLibraries: [
      { name: "Git Logo", path: "/tech/git.svg" },
      { name: "Vercel Logo", path: "/tech/vercel.svg" },
    ],
  },
  {
    id: 7,
    project: "Quin69 Playlist Tracker",
    date: "2025",
    websiteUrl: "https://mihaissh.github.io/quin69-playlist-tracker/",
    githubUrl: "https://github.com/mihaissh/quin69-playlist-tracker",
    shortDescription: "Tracks chat-requested songs on Quin's stream.",
    longDescription:
      "Pulls song requests from Sheepfarmer's chat logs and refreshes every 30 seconds. One-click search on Spotify or YouTube. Next.js 14, GitHub Pages deploy.",
    features: [
      "Auto-refresh every 30s",
      "Spotify and YouTube links",
      "Now playing + recent tracks",
    ],
    frontendStacks: [
      { name: "NextJS Logo", path: "/tech/nextjs.svg" },
      { name: "TypeScript Logo", path: "/tech/typescript.svg" },
      { name: "TailwindCSS Logo", path: "/tech/tailwindcss.svg" },
    ],
    backendStacks: [],
    clientLibraries: [{ name: "Git Logo", path: "/tech/git.svg" }],
  },
  {
    id: 8,
    project: "Romstal Codes",
    date: "2025",
    websiteUrl: "https://romstal-codes.vercel.app/",
    githubUrl: "https://github.com/mihaissh/romstal-codes",
    shortDescription: "Look up Romstal Brașov/Bran stock codes by product name.",
    longDescription:
      "Small tool for work — search product name, get the stock code. Covers both Brașov and Bran catalogs. Faster than digging through PDFs.",
    features: [
      "Search by product name",
      "Brașov and Bran catalogs",
      "Works on phone too",
    ],
    frontendStacks: [
      { name: "React Logo", path: "/tech/react.svg" },
      { name: "TypeScript Logo", path: "/tech/typescript.svg" },
      { name: "Vite Logo", path: "/tech/vite.svg" },
      { name: "CSS Logo", path: "/tech/css.svg" },
    ],
    backendStacks: [],
    clientLibraries: [
      { name: "Git Logo", path: "/tech/git.svg" },
      { name: "Vercel Logo", path: "/tech/vercel.svg" },
    ],
  },
];
