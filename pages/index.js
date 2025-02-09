import React, { useState } from "react";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Mobile Header (Visible Only on Small Screens) */}
      <div className="fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-4 py-3 md:hidden z-50">
        <h1 className="text-lg font-bold">TrustMarket</h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-white"
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Sidebar (Left Navigation) */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black text-white p-6 transition-transform duration-300 z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 w-64`}
      >
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-xl font-bold">TrustMarket</h1>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <i className="fa-solid fa-xmark text-2xl"></i>
          </button>
        </div>
        <nav>
          <div className="flex items-center gap-2 mb-4 cursor-pointer hover:text-gray-300">
            <i className="fa-solid fa-globe text-lg"></i>
            <span>Explore</span>
            <i className="fa-solid fa-arrow-up-right-from-square ml-auto text-sm"></i>
          </div>
          <div className="text-sm text-gray-400">Coming soon</div>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-br from-black to-gray-800 flex flex-col items-center justify-center md:ml-64 p-8">
        <div className="max-w-4xl mx-auto text-center mt-6 md:mt-10">
          <div className="mb-10">
            <i className="fa-solid fa-globe text-5xl text-white mb-4"></i>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Explore New Local Businesses
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-4">Coming Soon</p>
          <p className="text-base md:text-lg text-gray-300">
            We're working hard to bring you something extraordinary
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
