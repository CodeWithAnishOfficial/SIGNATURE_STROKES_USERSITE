import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import loginBg from '../assets/login.jpg';

const Register = () => {
  const { login } = useStore();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    // Mock Register Logic
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user already exists
    if (users.find(u => u.email === formData.email)) {
      setError('Email already registered');
      return;
    }

    const newUser = { 
      id: Date.now(),
      name: formData.name, 
      email: formData.email, 
      password: formData.password 
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Navigate to login page instead of logging in directly
    navigate('/login');
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row font-sans">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden relative">
        <img 
          src={loginBg} 
          alt="Register Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center bg-white px-8 md:px-16 lg:px-24">
        <div className="max-w-sm w-full mx-auto">
          <div className="mb-6">
            <h2 className="text-lg font-bold text-primary tracking-widest mb-2 italic uppercase">Signature strokes</h2>
            <h1 className="text-4xl font-extrabold text-zinc-900 leading-tight mb-2 tracking-tight">
              Sign Up
            </h1>
            <p className="text-zinc-500 font-medium text-sm">Create your profile to start your journey.</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700 ml-1">Full Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Enter your name"
                className="w-full bg-zinc-50 border border-zinc-200 py-2.5 px-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700 ml-1">Email Address</label>
              <input 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="Enter your email"
                className="w-full bg-zinc-50 border border-zinc-200 py-2.5 px-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700 ml-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
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

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-zinc-700 ml-1">Confirm Password</label>
              <div className="relative">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  placeholder="••••••••"
                  className="w-full bg-zinc-50 border border-zinc-200 py-2.5 px-4 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm font-medium pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-zinc-900 hover:bg-primary text-white font-bold py-3.5 rounded-lg transition-all duration-300 uppercase tracking-widest text-xs shadow-lg shadow-zinc-100 active:scale-[0.98] mt-2"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-zinc-100 text-center">
            <p className="text-xs text-zinc-500 mb-3 font-medium">Already have an account?</p>
            <Link to="/login" className="inline-block text-primary font-bold text-xs hover:text-zinc-900 transition-all underline underline-offset-4 decoration-2">
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
