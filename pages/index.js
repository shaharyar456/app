import React from "react";

const HomePage = () => {
  return (
    <div className="flex h-full text-base-content">
      {/* Sidebar */}
      <aside className="w-64 bg-black text-white h-screen p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-6">TrustMarket</h2>
        <nav>
          <ul>
            <li className="mb-4 flex items-center gap-2 cursor-pointer">
              <span className="text-lg">📂</span> Explore
            </li>
            <li className="text-gray-400">Coming soon</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 py-8">
        {/* HEADER */}
        <header id="header" className="flex items-center justify-between mb-16">
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
              <i className="fa-brands fa-instagram text-xl" />
            </span>
          </div>
        </header>

        {/* ORDER SECTION */}
        <section id="order-section" className="text-center mb-20">
          <h2 className="text-3xl font-bold text-indigo-900 mb-4">
            Accepting order – Fabric & Leather
          </h2>
          <p className="text-2xl font-semibold text-indigo-700 mb-2">
            $15 – 40
          </p>
          <p className="text-lg text-indigo-600 mb-4">
            Shipping/pick up available
          </p>
          <p className="text-lg italic text-indigo-500">
            "Ask me to attempt anything, I'll try my best!"
          </p>
        </section>

        {/* LATEST WORKS */}
        <section id="latest-works">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Latest Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9).keys()].map((num) => (
              <div
                key={num + 1}
                className="rounded-lg overflow-hidden shadow-lg"
              >
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

export default HomePage; // ✅ Only one export
