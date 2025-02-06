import React, { useState } from "react";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-full">
      {/* 🌟 Mobile Header (Visible Only on Small Screens) */}
      <div className="fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-4 py-3 md:hidden z-50">
        <h1 className="text-lg font-bold">TrustMarket</h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-white"
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>

      {/* 📌 Sidebar (Left Navigation) */}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-black text-white p-6 transition-transform duration-300
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40`}
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
            <i className="fa-solid fa-globe text-lg"></i>{" "}
            {/* 🌐 Explore Icon */}
            <span>Explore</span>
            <i className="fa-solid fa-arrow-up-right-from-square ml-auto text-sm"></i>{" "}
            {/* ↗️ Arrow */}
          </div>
          <div className="text-sm text-gray-400">Coming soon</div>
        </nav>
      </aside>

      {/* 📌 Main Content (Adjusted for Sidebar) */}
      <div className="md:ml-64 flex-1 px-8 py-6 mt-16 md:mt-0">
        {/* ✅ Profile Header */}
        <header className="flex items-center justify-between mb-16">
          <div className="flex items-center gap-3">
            <img
              src="/images/1.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">LILTKEYS</h1>
              <p className="text-sm text-gray-600">Custom painted Keychain</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
              Contact
            </span>
            <span className="text-blue-500 hover:text-blue-600 cursor-pointer">
              <i className="fa-brands fa-instagram text-xl"></i>
            </span>
          </div>
        </header>

        {/* 🛍️ Order Section */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            Accepting orders - Fabric & Leather
          </h2>
          <p className="text-2xl font-semibold text-indigo-700 mb-2">
            $15 - 40
          </p>
          <p className="text-lg text-indigo-600 mb-4">
            Shipping/pick up available
          </p>
          <p className="text-lg italic text-indigo-500">
            "Ask me to attempt anything, I'll try my best!"
          </p>
        </section>

        {/* 🖼️ Latest Works Section */}
        <section>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Latest Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6).keys()].map((num) => (
              <div key={num} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  className="w-full h-64 object-cover"
                  src={`/images/${num + 1}.jpg`}
                  alt={`Image ${num + 1}`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* 📌 Footer */}
        <footer className="text-center text-gray-600 mt-12">
          © 2025 LILTKEYS. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
