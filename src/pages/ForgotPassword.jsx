import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import loginBg from '../assets/login.jpg';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your email address');
      return;
    }

    // Mock logic: Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.find(u => u.email === email);

    if (userExists) {
      setIsSubmitted(true);
    } else {
      setError('No account found with this email address');
    }
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col md:flex-row font-sans">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-hidden relative">
        <img 
          src={loginBg} 
          alt="Forgot Password Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center bg-white px-8 md:px-16 lg:px-24">
        <div className="max-w-sm w-full mx-auto">
          {!isSubmitted ? (
            <>
              <div className="mb-8">
                <h2 className="text-lg font-bold text-primary tracking-widest mb-2 italic uppercase">Signature strokes</h2>
                <h1 className="text-4xl font-extrabold text-zinc-900 leading-tight mb-2 tracking-tight">
                  Forgot Password?
                </h1>
                <p className="text-zinc-500 font-medium text-sm">No worries! Enter your email and we'll send you reset instructions.</p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold rounded-lg">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-zinc-700 ml-1">Email Address</label>
                  <div className="relative">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-zinc-50 border border-zinc-200 py-2.5 px-4 pl-10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm font-medium"
                    />
                    <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-zinc-900 hover:bg-primary text-white font-bold py-3.5 rounded-lg transition-all duration-300 uppercase tracking-widest text-xs shadow-lg shadow-zinc-100 active:scale-[0.98]"
                >
                  Send Reset Link
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={40} className="text-green-500" />
                </div>
              </div>
              <h1 className="text-3xl font-extrabold text-zinc-900 mb-4 tracking-tight">Check your email</h1>
              <p className="text-zinc-500 font-medium text-sm mb-8 leading-relaxed">
                We've sent a password reset link to <br /><span className="text-zinc-900 font-bold">{email}</span>
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-primary font-bold text-xs uppercase tracking-widest hover:underline"
              >
                Didn't receive the email? Try again
              </button>
            </div>
          )}

          <div className="mt-10 pt-6 border-t border-zinc-100 text-center">
            <Link to="/login" className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary font-bold text-xs transition-all uppercase tracking-widest">
              <ArrowLeft size={14} />
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
