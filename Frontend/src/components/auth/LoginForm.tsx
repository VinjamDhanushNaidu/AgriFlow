"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { InputField } from '../common/InputField';
import { PasswordField } from '../common/PasswordField';
import { Checkbox } from '../common/Checkbox';
import { GoogleButton } from '../common/GoogleButton';

// Define validation schema with Zod
const loginSchema = zod.object({
  email: zod.string().min(1, { message: "Email is required" }).email({ message: "Invalid email address" }),
  password: zod.string().min(1, { message: "Password is required" }).min(8, { message: "Password must be at least 8 characters" }),
  rememberMe: zod.boolean().optional(),
});

type LoginFormValues = zod.infer<typeof loginSchema>;

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    }
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsLoading(true);
    // Simulate authentication API latency
    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 2000);
  };

  const handleGoogleSignIn = () => {
    setIsGoogleLoading(true);
    setTimeout(() => {
      setIsGoogleLoading(false);
      router.push('/dashboard');
    }, 1200);
  };

  return (
    <div className="w-full max-w-[450px] bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 flex flex-col space-y-6 sm:space-y-8 select-none">
      
      {/* Title */}
      <div className="flex flex-col space-y-2 text-left">
        <h2 className="text-3xl font-extrabold text-slate-800 font-outfit tracking-tight">
          Welcome Back 👋
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
          Sign in to continue managing your digital farm.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        {/* Email Address */}
        <InputField
          label="Email Address"
          id="email"
          type="email"
          placeholder="Enter your email"
          icon={Mail}
          error={errors.email?.message}
          disabled={isLoading || isGoogleLoading}
          {...register('email')}
        />

        {/* Password */}
        <PasswordField
          label="Password"
          id="password"
          placeholder="Enter your password"
          icon={Lock}
          error={errors.password?.message}
          disabled={isLoading || isGoogleLoading}
          {...register('password')}
        />

        {/* Checkbox and Forgot Password */}
        <div className="flex items-center justify-between pt-1">
          <Checkbox
            label="Remember Me"
            id="rememberMe"
            disabled={isLoading || isGoogleLoading}
            {...register('rememberMe')}
          />
          <Link 
            href="/forgot-password" 
            className="text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700 hover:underline transition-colors"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={isLoading || isGoogleLoading}
          className="w-full py-3.5 rounded-xl bg-gradient-to-br from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md shadow-emerald-600/10 hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Lock className="w-4 h-4" />
              Sign In
            </>
          )}
        </button>

      </form>

      {/* Divider */}
      <div className="relative flex py-1 items-center">
        <div className="flex-grow border-t border-slate-200/80"></div>
        <span className="flex-shrink mx-4 text-xs font-bold text-slate-400 uppercase tracking-widest">OR</span>
        <div className="flex-grow border-t border-slate-200/80"></div>
      </div>

      {/* Google Sign In */}
      <GoogleButton 
        onClick={handleGoogleSignIn} 
        disabled={isLoading || isGoogleLoading} 
        label={isGoogleLoading ? "Signing in..." : "Sign in with Google"}
      />

      {/* Bottom Text */}
      <div className="text-center text-xs sm:text-sm font-semibold text-slate-500">
        Don&apos;t have an account?{' '}
        <Link 
          href="/signup" 
          className="text-emerald-600 hover:text-emerald-700 hover:underline font-bold"
        >
          Create one
        </Link>
      </div>

    </div>
  );
}
