import React from "react";

const HomePage = () => {
  return (
    <div className="h-full text-base-content">
      <div id="main" className="max-w-7xl mx-auto px-4 py-8">
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
      </div>
    </div>
  );
};

export default HomePage; // ✅ Only one export statement!
