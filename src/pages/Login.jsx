import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import loginBg from '../assets/login.jpg';

const Login = () => {
  const { login } = useStore();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Mock Login Logic
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      const userData = { email: user.email, name: user.name };
      sessionStorage.setItem('user', JSON.stringify(userData));
      login(userData);
      navigate(from, { replace: true });
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row font-sans">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden relative">
        <img 
          src={loginBg} 
          alt="Login Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center bg-white px-8 md:px-16 lg:px-24">
        <div className="max-w-sm w-full mx-auto">
          <div className="mb-8">
            <h2 className="text-lg font-bold text-primary tracking-widest mb-2 italic uppercase">Signature strokes</h2>
            <h1 className="text-4xl font-extrabold text-zinc-900 leading-tight mb-2 tracking-tight">
              Sign In
            </h1>
            <p className="text-zinc-500 font-medium text-sm">Welcome back! Please enter your details.</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700 ml-1">Email Address</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full bg-zinc-50 border border-zinc-200 py-2.5 px-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700 ml-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-zinc-50 border border-zinc-200 py-2.5 px-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm font-medium pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between px-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-zinc-300 text-primary focus:ring-primary" />
                <span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-700 transition-colors">Remember me</span>
              </label>
              <Link to="/forgot-password" title="Click here to reset your password"  className="text-xs font-bold text-primary hover:underline">Forgot Password?</Link>
            </div>

            <button 
              type="submit"
              className="w-full bg-zinc-900 hover:bg-primary text-white font-bold py-3.5 rounded-lg transition-all duration-300 uppercase tracking-widest text-xs shadow-lg shadow-zinc-100 active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          <div className="mt-10 pt-6 border-t border-zinc-100 text-center">
            <p className="text-xs text-zinc-500 mb-3 font-medium">New to Signature strokes?</p>
            <Link to="/register" className="inline-block text-primary font-bold text-xs hover:text-zinc-900 transition-all underline underline-offset-4 decoration-2">
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
