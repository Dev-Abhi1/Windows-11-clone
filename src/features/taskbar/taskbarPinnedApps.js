// src/features/taskbar/taskbarPinnedApps.js
export const pinnedApps = [
  {
    appType: "explorer",
    icon: "/src/assets/icons/explorer.ico",
    title: "This PC",
    relatedApps: ["explorer", "trash"], // Handle both
  },
  {
    appType: "chrome",
    icon: "/src/assets/icons/icons8-chrome.svg",
    title: "Google Chrome",
  },
  {
    appType: "store",
    icon: "/src/assets/icons/icons8-microsoft-store.svg",
    title: "Microsoft Store",
  },
  {
    appType: "copilot",
    icon: "/src/assets/icons/icons8-microsoft-copilot.svg",
    title: "Copilot",
  },
];
