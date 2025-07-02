import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// Map appType to icons
const appIconMap = {
  explorer: "/src/assets/icons/explorer.ico",
  trash: "/src/assets/icons/explorer.ico",
  chrome: "/src/assets/icons/icons8-chrome.svg",
  vscode: "/src/assets/icons/icons8-vs-code.svg",
  notepad: "/src/assets/icons/notepad.ico",
  store: "/src/assets/icons/icons8-microsoft-store.svg",
  copilot: "/src/assets/icons/icons8-microsoft-copilot.svg",
};

const initialState = {
  openWindows: [],
  zIndexCounter: 1,
};

const windowsSlice = createSlice({
  name: "windows",
  initialState,
  reducers: {
    openWindow: (state, action) => {
      const { title, appType } = action.payload;

      // Check if already opened (optional, remove if you want multiple windows)
      const isAlreadyOpen = state.openWindows.some(
        (win) => win.appType === appType
      );
      if (isAlreadyOpen) return;

      const icon = appIconMap[appType] || "/src/assets/icons/default.ico";

      const newWindow = {
        id: nanoid(),
        title,
        appType,
        icon, // ✅ store icon for taskbar use
        position: { x: 50, y: 50 },
        minimized: false,
        zIndex: state.zIndexCounter++,
      };
      state.openWindows.push(newWindow);
    },

    closeWindow: (state, action) => {
      state.openWindows = state.openWindows.filter(
        (w) => w.id !== action.payload
      );
    },

    focusWindow: (state, action) => {
      const win = state.openWindows.find((w) => w.id === action.payload);
      if (win) {
        win.zIndex = state.zIndexCounter++;
      }
    },

    updateWindowPosition: (state, action) => {
      const { id, x, y } = action.payload;
      const win = state.openWindows.find((w) => w.id === id);
      if (win) {
        win.position = { x, y };
      }
    },

    minimizeWindow: (state, action) => {
      const win = state.openWindows.find((w) => w.id === action.payload);
      if (win) {
        win.minimized = true;
      }
    },

    restoreWindow: (state, action) => {
      const win = state.openWindows.find((w) => w.id === action.payload);
      if (win) {
        win.minimized = false;
        win.zIndex = state.zIndexCounter++;
      }
    },
  },
  bringToFront: (state, action) => {
  const win = state.openWindows.find((w) => w.id === action.payload);
  if (win) {
    win.zIndex = state.zIndexCounter++;
    win.minimized = false; // Optional: restore if minimized
  }
},
});

export const {
  openWindow,
  closeWindow,
  focusWindow,
  updateWindowPosition,
  minimizeWindow,
  restoreWindow,
  bringToFront,
} = windowsSlice.actions;

export default windowsSlice.reducer;
