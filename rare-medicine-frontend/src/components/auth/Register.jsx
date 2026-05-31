// src/components/auth/Register.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authApi } from '../../api.js';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await authApi.register({ email, password, role });
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50 select-none">
      <div className="w-full max-w-md p-8 bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-slate-100/50 relative">
        {/* Soft accent color top border */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-accent rounded-t-2xl"></div>

        {/* Logo and Brand */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-accent mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
            </svg>
          </div>
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">RareMed Locator</h1>
          <p className="text-xs text-slate-500 mt-1 font-medium">Healthcare Professional Portal</p>
        </div>

        <h2 className="text-lg font-bold text-slate-800 text-center mb-6">Create your credentials</h2>
        
        {error && (
          <div className="mb-5 p-3.5 bg-rose-50 border border-rose-100 text-rose-700 rounded-xl text-xs font-medium flex items-start gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@healthcare-facility.org"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="medical-input"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="medical-input"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5" htmlFor="role">
              Account Authorization Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="medical-input cursor-pointer"
            >
              <option value="user">Individual Practitioner / Patient Coordinator</option>
              <option value="shop">Certified Pharmacy Representative</option>
              <option value="hospital">Hospital Supply Chain Admin</option>
              <option value="admin">District Administrator</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 bg-accent hover:bg-accent-hover text-white font-semibold text-sm rounded-xl transition duration-150 shadow-md shadow-teal-500/10 hover:shadow-teal-500/20 active:scale-[0.98] cursor-pointer"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-xs text-slate-500 text-center font-medium">
          Already part of the network?{' '}
          <Link to="/login" className="text-accent hover:text-accent-hover font-semibold transition duration-150 hover:underline">
            Login here
          </Link>
        </p>
      </div>

      <span className="text-[10px] text-slate-400 mt-8 font-medium">
        Secured by End-to-End HIPAA Compliant Protocol
      </span>
    </div>
  );
}


