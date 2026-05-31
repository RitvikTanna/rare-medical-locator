

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { authApi } from "../../api.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await authApi.login({ email, password });

      localStorage.setItem("token", data.token);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Left Section */}
        <div className="hidden lg:flex flex-col justify-center bg-blue-600 text-white p-12">
          <div>
            <div className="w-20 h-20 rounded-3xl bg-white/20 flex items-center justify-center mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19.428 15.428a4 4 0 00-5.656 0L12 17.2l-1.772-1.772a4 4 0 00-5.656 5.656l1.772 1.772L12 28.512l5.656-5.656 1.772-1.772a4 4 0 000-5.656z"
                />
              </svg>
            </div>

            <h1 className="text-5xl font-bold mb-6">
              RareMed Locator
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed">
              Find rare medicines instantly across hospitals,
              pharmacies, and healthcare networks.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <span>✅</span>
                <span>Locate rare medicines nearby</span>
              </div>

              <div className="flex items-center gap-3">
                <span>✅</span>
                <span>Verified pharmacies & hospitals</span>
              </div>

              <div className="flex items-center gap-3">
                <span>✅</span>
                <span>Real-time inventory tracking</span>
              </div>

              <div className="flex items-center gap-3">
                <span>✅</span>
                <span>Secure healthcare platform</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                💊
              </div>

              <h2 className="text-3xl font-bold text-slate-800">
                Welcome Back
              </h2>

              <p className="text-slate-500 mt-2">
                Sign in to access your account
              </p>
            </div>

            {error && (
              <div className="mb-5 bg-red-50 border border-red-200 text-red-600 p-3 rounded-xl">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="doctor@hospital.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
              >
                Sign In
              </button>
            </form>

            <p className="text-center text-sm text-slate-500 mt-6">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                Register
              </Link>
            </p>

            <div className="mt-8 text-center text-xs text-slate-400">
              🔒 Secure • Reliable • Healthcare Ready
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}