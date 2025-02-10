// /pages/liltkeys.js (For trustmarket.ca/liltkeys)
import React, { useState } from "react";

const LiltkeysPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-full">
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
        className={`fixed left-0 top-0 h-full w-64 bg-black text-white p-6 transition-transform duration-300 ${
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
          <div
            className="flex items-center gap-2 mb-4 cursor-pointer hover:text-gray-300"
            onClick={() => (window.location.href = "https://trustmarket.ca")}
          >
            <i className="fa-solid fa-globe text-lg"></i>
            <span>Explore</span>
            <i className="fa-solid fa-arrow-up-right-from-square ml-auto text-sm"></i>
          </div>
        </nav>
      </aside>

      {/* Main Content (Adjusted for Sidebar) */}
      <div className="md:ml-64 flex-1 px-8 py-6 mt-16 md:mt-0">
        {/* Profile Header */}
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
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-gray-800 font-medium">Contact</span>
            <div className="flex gap-4">
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/liltkeys/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700"
              >
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              {/* Email Icon */}
              <a
                href="mailto:liltkeys@gmail.com"
                className="text-gray-700 hover:text-gray-800"
              >
                <i className="fa-solid fa-envelope text-xl"></i>
              </a>
            </div>
          </div>
        </header>

        {/* Accepting Orders Section */}
        <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-16">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
            Accepting orders - Fabric & Leather
          </h2>
          <div className="text-left space-y-1">
            <p className="text-base text-gray-700">$15 - $40</p>
            <p className="text-base text-gray-700">
              Shipping/pick up available (Toronto-based)
            </p>
            <p className="text-base text-gray-700">
              "Ask me to attempt anything, I'll try my best!"
            </p>
          </div>
        </section>

        {/* Latest Works Section */}
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

        {/* Footer */}
        <footer className="text-center text-gray-600 mt-12">
          © 2025 LILTKEYS. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default LiltkeysPage;
