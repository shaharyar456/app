import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Floating Particle Component
const FloatingParticles = () => {
  const group = React.useRef();
  const particleCount = 100;

  const particles = Array.from({ length: particleCount }, () => ({
    position: [
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 30,
    ],
    rotationSpeed: Math.random() * 0.01,
  }));

  useFrame(() => {
    particles.forEach((particle, i) => {
      const mesh = group.current.children[i];
      mesh.rotation.x += particle.rotationSpeed;
      mesh.rotation.y += particle.rotationSpeed;
    });
  });

  return (
    <group ref={group}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <boxGeometry args={[0.5, 0.1, 0.01]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      ))}
    </group>
  );
};

const BackgroundEffect = () => (
  <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <FloatingParticles />
  </Canvas>
);

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-gray-900 to-black">
      <div className="absolute inset-0 z-0">
        <BackgroundEffect />
      </div>

      <div className="relative z-10 flex min-h-screen">
        <div className="fixed top-0 left-0 w-full bg-black text-white flex items-center justify-between px-4 py-3 md:hidden z-50">
          <h1 className="text-lg font-bold">TrustMarket</h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 text-white"
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>
        </div>

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

        <div className="flex-1 bg-transparent flex flex-col items-center justify-center md:ml-64 p-8">
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
    </div>
  );
};

export default HomePage;
