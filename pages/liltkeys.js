import React, { useState } from "react";

const LiltkeysPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-full">
      {/* Mobile Header (Visible Only on Small Screens) */}
      <div className="fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-3 py-2 md:px-4 md:py-3 md:hidden z-50">
        <h1 className="text-base font-bold md:text-lg">TrustMarket</h1>
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-1 text-white md:p-2"
        >
          <i className="fa-solid fa-bars text-xl md:text-2xl"></i>
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
        {/* Profile Header with Reduced Height on Mobile */}
        <header className="flex items-center justify-between mb-12 md:mb-16">
          <div className="flex items-center gap-3">
            <img
              src="/images/10.jpg"
              alt="Profile"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full"
            />
            <div>
              <h1 className="text-base md:text-xl font-bold text-gray-900">
                LILTKEYS
              </h1>
              <p className="text-xs md:text-sm text-gray-600">
                Custom painted Keychain
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <span className="text-gray-800 font-medium text-sm md:text-base">
              Contact
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/liltkeys/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-700"
              >
                <i className="fa-brands fa-instagram text-base md:text-xl"></i>
              </a>
              <a
                href="mailto:liltkeys@gmail.com"
                className="text-gray-700 hover:text-gray-800"
              >
                <i className="fa-solid fa-envelope text-base md:text-xl"></i>
              </a>
            </div>
          </div>
        </header>

        {/* Accepting Orders Section */}
        <section className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md mb-16">
          <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-2">
            🖌 Hand-Painted Keychains, Made Just for You! 🎨
          </h2>
          <div className="text-left space-y-2 md:space-y-3">
            <p className="text-sm md:text-base text-gray-700">
              Starting at <strong>$15 - $40</strong>, each keychain is a{" "}
              <strong>unique, custom-painted masterpiece</strong> crafted with
              precision and passion.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              📍{" "}
              <strong>Available for Pickup & Shipping (Toronto Based)</strong>
            </p>
            <p className="text-sm md:text-base text-gray-700">
              💡 <strong>Personalized Designs</strong> – Have a vision? Let’s
              make it happen!
            </p>
            <p className="text-sm md:text-base text-gray-700">
              🖌 <strong>Canvases, Murals, Fabric Work & Leather Orders</strong>
            </p>
            <p className="text-sm md:text-base text-gray-700">
              🎁 <strong>Perfect for Gifts, Accessories & Collectibles</strong>
            </p>
            <p className="text-sm md:text-base text-gray-700">
              🔹 <strong>Custom Requests Welcome!</strong> Whether it's your
              favorite anime character, a beloved pet, or a unique concept, I’ll
              bring it to life with detailed, hand-painted designs.
            </p>
            <p className="text-sm md:text-base text-gray-700">
              ✨ <em>"Ask me to attempt anything, I'll try my best!"</em> ✨
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
