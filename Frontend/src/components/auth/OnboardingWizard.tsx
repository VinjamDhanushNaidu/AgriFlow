"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Mail, Phone, Home, MapPin, Scale, Sprout, Layers, 
  Settings, Check, ArrowRight, ArrowLeft, Bell, Sun, CheckCircle2 
} from 'lucide-react';
import { InputField } from '../common/InputField';

// Validation Schemas for each step
const step1Schema = zod.object({
  fullName: zod.string().min(1, "Full name is required").min(2, "Name must be at least 2 characters"),
  email: zod.string().min(1, "Email is required").email("Invalid email address"),
  phone: zod.string().min(1, "Phone number is required").regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
});

const step2Schema = zod.object({
  farmName: zod.string().min(1, "Farm name is required"),
  farmLocation: zod.string().min(1, "Farm location is required"),
  farmSize: zod.string().min(1, "Farm size is required"),
  primaryCrop: zod.string().min(1, "Primary crop is required"),
  soilType: zod.string().min(1, "Soil type is required"),
});

const step3Schema = zod.object({
  preferredLanguage: zod.string().min(1, "Language is required"),
  notifications: zod.boolean(),
  darkMode: zod.boolean(),
});

const wizardSchema = step1Schema.merge(step2Schema).merge(step3Schema);
type WizardFormValues = zod.infer<typeof wizardSchema>;

export default function OnboardingWizard() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, trigger, watch, setValue, formState: { errors } } = useForm<WizardFormValues>({
    resolver: zodResolver(wizardSchema),
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      farmName: '',
      farmLocation: '',
      farmSize: '',
      primaryCrop: '',
      soilType: '',
      preferredLanguage: 'English',
      notifications: true,
      darkMode: false,
    }
  });

  const watchLanguage = watch('preferredLanguage');
  const watchNotifications = watch('notifications');
  const watchDarkMode = watch('darkMode');

  // Navigate forward after validating current step
  const handleNext = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(['fullName', 'email', 'phone']);
    } else if (step === 2) {
      isValid = await trigger(['farmName', 'farmLocation', 'farmSize', 'primaryCrop', 'soilType']);
    }
    
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (data: WizardFormValues) => {
    setIsSubmitting(true);
    // Simulate server request
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(4); // Move to Success Screen
    }, 1500);
  };

  // Progress Bar styling
  const renderProgress = () => {
    return (
      <div className="flex flex-col space-y-4 mb-8">
        <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span>Step {step} of 3</span>
        </div>
        
        {/* Progress Bar with Steps */}
        <div className="flex items-center w-full">
          {/* Dot 1 */}
          <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-300 ${
            step >= 1 ? 'bg-emerald-600 ring-4 ring-emerald-500/20' : 'bg-slate-200'
          }`} />
          
          {/* Line 1-2 */}
          <div className={`flex-1 h-[3px] mx-1.5 transition-colors duration-300 ${
            step >= 2 ? 'bg-emerald-600' : 'bg-slate-200'
          }`} />

          {/* Dot 2 */}
          <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-300 ${
            step >= 2 ? 'bg-emerald-600 ring-4 ring-emerald-500/20' : 'bg-slate-200'
          }`} />

          {/* Line 2-3 */}
          <div className={`flex-1 h-[3px] mx-1.5 transition-colors duration-300 ${
            step >= 3 ? 'bg-emerald-600' : 'bg-slate-200'
          }`} />

          {/* Dot 3 */}
          <div className={`w-3.5 h-3.5 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-300 ${
            step >= 3 ? 'bg-emerald-600 ring-4 ring-emerald-500/20' : 'bg-slate-200'
          }`} />
        </div>
      </div>
    );
  };

  if (step === 4) {
    return <OnboardingSuccess />;
  }

  return (
    <div className="w-full max-w-[520px] bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-100 flex flex-col min-h-[580px] justify-between relative overflow-hidden select-none">
      
      {/* Progress header */}
      {renderProgress()}

      {/* Steps Content */}
      <div className="flex-1 flex flex-col">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col space-y-6 flex-grow"
            >
              {/* Header Icon + Titles */}
              <div className="flex flex-col items-center text-center space-y-3 mb-2">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                  <User className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-800 font-outfit">Personal Information</h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Let&apos;s start with your details.</p>
              </div>

              {/* Form Inputs */}
              <div className="space-y-4">
                <InputField
                  label="Full Name"
                  placeholder="Enter your full name"
                  icon={User}
                  error={errors.fullName?.message}
                  {...register('fullName')}
                />
                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  icon={Mail}
                  error={errors.email?.message}
                  {...register('email')}
                />
                <InputField
                  label="Phone Number"
                  type="tel"
                  placeholder="Enter your phone number"
                  icon={Phone}
                  error={errors.phone?.message}
                  {...register('phone')}
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col space-y-5 flex-grow"
            >
              {/* Header Icon + Titles */}
              <div className="flex flex-col items-center text-center space-y-3 mb-2">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                  <Sprout className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-800 font-outfit">Farm Information</h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Tell us about your farm.</p>
              </div>

              {/* Form Inputs */}
              <div className="space-y-4">
                <InputField
                  label="Farm Name"
                  placeholder="Enter farm name"
                  icon={Home}
                  error={errors.farmName?.message}
                  {...register('farmName')}
                />

                {/* Farm Location Dropdown */}
                <div className="flex flex-col space-y-1.5 w-full">
                  <label className="text-xs font-bold text-slate-700 tracking-wide" htmlFor="farmLocation">
                    Farm Location
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-4.5 h-4.5" />
                    </div>
                    <select
                      id="farmLocation"
                      className="w-full text-sm py-3 pl-11 pr-10 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/80 transition-all appearance-none cursor-pointer"
                      {...register('farmLocation')}
                    >
                      <option value="">Select location</option>
                      <option value="Anantapur, Andhra Pradesh">Anantapur, Andhra Pradesh</option>
                      <option value="Guntur, Andhra Pradesh">Guntur, Andhra Pradesh</option>
                      <option value="Kurnool, Andhra Pradesh">Kurnool, Andhra Pradesh</option>
                      <option value="Nalgonda, Telangana">Nalgonda, Telangana</option>
                      <option value="Mandya, Karnataka">Mandya, Karnataka</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                  {errors.farmLocation?.message && <span className="text-[11px] font-semibold text-red-500">{errors.farmLocation?.message}</span>}
                </div>

                {/* Row: Farm Size and Primary Crop */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Farm Size */}
                  <div className="flex flex-col space-y-1.5 w-full">
                    <label className="text-xs font-bold text-slate-700 tracking-wide" htmlFor="farmSize">
                      Farm Size
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Scale className="w-4 h-4" />
                      </div>
                      <select
                        id="farmSize"
                        className="w-full text-sm py-3 pl-9 pr-8 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/80 transition-all appearance-none cursor-pointer"
                        {...register('farmSize')}
                      >
                        <option value="">Select size</option>
                        <option value="Under 2 Acres">Under 2 Acres</option>
                        <option value="2-5 Acres">2-5 Acres</option>
                        <option value="5-10 Acres">5-10 Acres</option>
                        <option value="10+ Acres">10+ Acres</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-slate-400">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                    {errors.farmSize?.message && <span className="text-[11px] font-semibold text-red-500">{errors.farmSize?.message}</span>}
                  </div>

                  {/* Primary Crop */}
                  <div className="flex flex-col space-y-1.5 w-full">
                    <label className="text-xs font-bold text-slate-700 tracking-wide" htmlFor="primaryCrop">
                      Primary Crop
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Sprout className="w-4 h-4" />
                      </div>
                      <select
                        id="primaryCrop"
                        className="w-full text-sm py-3 pl-9 pr-8 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/80 transition-all appearance-none cursor-pointer"
                        {...register('primaryCrop')}
                      >
                        <option value="">Select crop</option>
                        <option value="Tomato">Tomato</option>
                        <option value="Chilli">Chilli</option>
                        <option value="Cotton">Cotton</option>
                        <option value="Rice">Rice</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-slate-400">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                    {errors.primaryCrop?.message && <span className="text-[11px] font-semibold text-red-500">{errors.primaryCrop?.message}</span>}
                  </div>
                </div>

                {/* Soil Type */}
                <div className="flex flex-col space-y-1.5 w-full">
                  <label className="text-xs font-bold text-slate-700 tracking-wide" htmlFor="soilType">
                    Soil Type
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Layers className="w-4.5 h-4.5" />
                    </div>
                    <select
                      id="soilType"
                      className="w-full text-sm py-3 pl-11 pr-10 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500/80 transition-all appearance-none cursor-pointer"
                      {...register('soilType')}
                    >
                      <option value="">Select soil type</option>
                      <option value="Black Soil">Black Soil</option>
                      <option value="Red Soil">Red Soil</option>
                      <option value="Sandy Soil">Sandy Soil</option>
                      <option value="Clay Soil">Clay Soil</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                  {errors.soilType?.message && <span className="text-[11px] font-semibold text-red-500">{errors.soilType?.message}</span>}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col space-y-6 flex-grow"
            >
              {/* Header Icon + Titles */}
              <div className="flex flex-col items-center text-center space-y-3 mb-2">
                <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm">
                  <Settings className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-extrabold text-slate-800 font-outfit">Preferences</h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">Customize your experience.</p>
              </div>

              {/* Preferred Language Buttons */}
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold text-slate-700 tracking-wide">Preferred Language</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {['English', 'తెలుగు', 'हिंदी', 'தமிழ்', 'ಕನ್ನಡ'].map((lang) => {
                    const isSelected = watchLanguage === lang;
                    return (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => setValue('preferredLanguage', lang)}
                        className={`py-2 px-1 text-xs font-bold rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected 
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-600 font-black shadow-sm shadow-emerald-500/5' 
                            : 'border-slate-200 hover:border-slate-300 text-slate-600 bg-white'
                        }`}
                      >
                        {lang}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Toggles */}
              <div className="space-y-4 pt-2">
                {/* Notification Preferences */}
                <div className="flex items-center justify-between p-3.5 border border-slate-100 rounded-2xl bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                      <Bell className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">Notification Preferences</span>
                      <span className="text-[10px] text-slate-400 font-semibold mt-0.5">Receive important updates and alerts.</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setValue('notifications', !watchNotifications)}
                    className={`w-11 h-6 rounded-full transition-colors flex items-center p-0.5 cursor-pointer ${
                      watchNotifications ? 'bg-emerald-600 justify-end' : 'bg-slate-200 justify-start'
                    }`}
                  >
                    <motion.div layout className="w-5 h-5 rounded-full bg-white shadow" />
                  </button>
                </div>

                {/* Dark Mode Preference */}
                <div className="flex items-center justify-between p-3.5 border border-slate-100 rounded-2xl bg-slate-50/50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                      <Sun className="w-4.5 h-4.5" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">Dark Mode Preference</span>
                      <span className="text-[10px] text-slate-400 font-semibold mt-0.5">Use dark mode across the app.</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setValue('darkMode', !watchDarkMode)}
                    className={`w-11 h-6 rounded-full transition-colors flex items-center p-0.5 cursor-pointer ${
                      watchDarkMode ? 'bg-emerald-600 justify-end' : 'bg-slate-200 justify-start'
                    }`}
                  >
                    <motion.div layout className="w-5 h-5 rounded-full bg-white shadow" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Actions / Navigation Buttons */}
      <div className="flex gap-4 border-t border-slate-100 pt-6 mt-6">
        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="flex-1 py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-sm rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        )}
        
        {step < 3 ? (
          <button
            type="button"
            onClick={handleNext}
            className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-600/10 active:scale-[0.99] cursor-pointer"
          >
            Next
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit(onSubmit)}
            disabled={isSubmitting}
            className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md shadow-emerald-600/10 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? 'Finishing...' : (
              <>
                Finish
                <Check className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>

    </div>
  );
}

// Success Component inside the same context for convenience
function OnboardingSuccess() {
  const router = useRouter();
  const [isGoToDashboardLoading, setIsGoToDashboardLoading] = useState(false);

  const handleGoToDashboard = () => {
    setIsGoToDashboardLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full max-w-[950px] bg-white rounded-3xl overflow-hidden border border-slate-100 flex flex-col md:flex-row shadow-2xl relative select-none"
    >
      
      {/* Left side info */}
      <div className="flex-1 p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-6 md:space-y-8">
        
        {/* Success badge */}
        <div className="flex justify-start">
          <div className="flex items-center gap-1.5 py-1 px-3 rounded-full bg-emerald-50 border border-emerald-100 text-[10px] sm:text-xs font-bold text-emerald-600">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            Account Created Successfully
          </div>
        </div>

        {/* Large animation checkmark */}
        <div className="flex justify-start pt-1">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 glow-green relative"
          >
            {/* Pulsing ring */}
            <span className="absolute inset-0 rounded-full border-2 border-emerald-500 animate-[ping_2s_ease-in-out_infinite] opacity-30" />
            <Check className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.5px]" />
          </motion.div>
        </div>

        {/* Welcome Headers */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 font-outfit leading-tight">
            Welcome to AgriFlow AI 🎉 <br />
            <span className="text-gradient-green">Your Digital Farm is Ready.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg">
            We&apos;ve set up everything for you. Start exploring your farm and make smarter decisions with AI.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col space-y-3">
          <button
            onClick={handleGoToDashboard}
            disabled={isGoToDashboardLoading}
            className="w-full sm:w-auto self-start bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-3 px-8 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-emerald-600/10 hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer"
          >
            {isGoToDashboardLoading ? 'Redirecting...' : (
              <>
                Go to Dashboard
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
          <span className="text-[11px] font-semibold text-slate-400">
            You can always update your details in settings.
          </span>
        </div>

      </div>

      {/* Right side illustration (farmer looking at tablet) */}
      <div className="hidden md:block md:w-2/5 lg:w-[45%] relative min-h-[350px]">
        <Image
          src="/farmer_cta.png"
          alt="Farmer holding tablet in front of crop field"
          fill
          className="object-cover"
          priority
        />
        {/* Gradients to blend image */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
      </div>

    </motion.div>
  );
}
