import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Background from "../components/Background";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) { alert("Fill all"); return; }
    alert("Registered (demo)");
    navigate("/login");
  };

  return (
    <div className="min-h-screen relative">
      <Background opacity={0.28} blur={0.7} />
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-md bg-white/80 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-900 mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Full name" className="w-full px-4 py-3 rounded-lg border" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full px-4 py-3 rounded-lg border" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" className="w-full px-4 py-3 rounded-lg border" required />
            <button className="w-full bg-green-700 text-white py-3 rounded-lg">Register</button>
          </form>
          <p className="text-center mt-4">Already have an account? <Link to="/login" className="underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
}
