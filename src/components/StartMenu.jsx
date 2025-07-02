import React from "react";

const pinnedIcons = [
  { name: "Health", icon: "/src/assets/icons/health.ico" },
  { name: "Mail", icon: "/src/assets/icons/mail.ico" },
  { name: "Movies", icon: "/src/assets/icons/movies.ico" },
  { name: "Microsoft Store", icon: "/src/assets/icons/icons8-microsoft-store.svg" },
  { name: "Photos", icon: "/src/assets/icons/photos.ico" },
  { name: "News", icon: "/src/assets/icons/news.ico" },
  { name: "Skype", icon: "/src/assets/icons/skype.ico" },
  { name: "Solitaire", icon: "/src/assets/icons/solitaire.ico" },
  { name: "Sticky Notes", icon: "/src/assets/icons/stickynotes.ico" },
  { name: "Calculator", icon: "/src/assets/icons/calculator.ico" },
  { name: "Clock", icon: "/src/assets/icons/alarm.ico" },
  { name: "Notepad", icon: "/src/assets/icons/notepad.ico" },
  { name: "Paint", icon: "/src/assets/icons/paint.ico" },
  { name: "Films & TV", icon: "/src/assets/icons/tv.ico" },
  { name: "Snipping Tool", icon: "/src/assets/icons/snippingtool.ico" },
  { name: "OneNote", icon: "/src/assets/icons/terminal.ico" },
  { name: "File Explorer", icon: "/src/assets/icons/explorer.ico" },
  { name: "Weather", icon: "/src/assets/icons/weather.ico" },
];

const recentItems = [
  { name: "Visual Studio Code", icon: "/src/assets/icons/code.ico" },
  { name: "Office", icon: "/src/assets/icons/office.ico" },
  { name: "Teams", icon: "/src/assets/icons/teams.ico" },
  { name: "Powerpoint", icon: "/src/assets/icons/powerpoint.ico" },
];

const StartMenu = () => {
  return (
    <div className="w-[680px] h-[620px] bg-black/70 bg-opacity-30 backdrop-blur-xl text-white rounded-2xl p-6 flex flex-col shadow-2xl">
      {/* Search */}
      <input
        type="text"
        placeholder="Search for apps, settings, and documents"
        className="bg-zinc-600 text-white placeholder-zinc-400 p-3 rounded-md mb-6 focus:outline-none"
      />

      {/* Pinned Section */}
      <h2 className="text-zinc-300 text-sm mb-2">Pinned</h2>
      <div className="grid grid-cols-6 gap-4 mb-4">
        {pinnedIcons.map((app) => (
          <div
            key={app.name}
            className="flex flex-col items-center justify-center p-2 rounded-lg hover:bg-white/35 transition-all cursor-pointer"
          >
            <img src={app.icon} alt={app.name} className="w-10 h-10 mb-1" />
            <span className="text-xs text-center text-zinc-200 truncate w-full">
              {app.name}
            </span>
          </div>
        ))}
      </div>

      {/* Recommended Section */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-zinc-300 text-sm">Recommended</h2>
        <button className="text-xs text-blue-400 hover:underline">More</button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        {recentItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/30 transition-all cursor-pointer"
          >
            <img src={item.icon} alt={item.name} className="w-8 h-8" />
            <div>
              <p className="text-sm">{item.name}</p>
              <p className="text-xs text-zinc-400">4h ago</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto flex justify-between items-center border-t border-zinc-700 pt-4">
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/icons/sonic.jpg"
            alt="User"
            className="w-8 h-8 object-cover rounded-full"
          />
          <span className="text-sm">Abhishek Choudhary</span>
        </div>
        <img
          src="/src/assets/icons/icons8-power-100.png"
          alt="Power"
          className="w-5 h-5 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default StartMenu;
