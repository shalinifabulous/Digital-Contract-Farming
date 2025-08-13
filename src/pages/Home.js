import React from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Background opacity={0.35} blur={0.5} speed={0.9} />
      <main className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="max-w-3xl w-full bg-white/75 backdrop-blur-sm border border-white/30 rounded-2xl p-10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">
            Digital Contract Farming
          </h1>
          <p className="text-green-800 mb-6">Connecting farmers and buyers — transparent contracts.</p>
          <div className="flex gap-4">
            <Link to="/login" className="px-6 py-3 bg-green-700 text-white rounded-lg">Login</Link>
            <Link to="/register" className="px-6 py-3 bg-green-600 text-white rounded-lg">Register</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
