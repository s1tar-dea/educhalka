'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, ArrowRight, BookOpen } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-base text-white placeholder:text-white/30 shadow-sm transition-all outline-none',
        'focus:border-white/30 focus:bg-white/10 focus:ring-0',
        'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}

interface SignInCardProps {
  mode?: 'login' | 'register';
}

export function SignInCard({ mode = 'login' }: SignInCardProps) {
  const router = useRouter();
  const supabase = createClient();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setSuccessMessage('');

    const cleanEmail = email.trim().toLowerCase();

    if (mode === 'login') {
      const { error } = await supabase.auth.signInWithPassword({ email: cleanEmail, password });
      if (error) {
        setError('Неверный email или пароль. Если вы только что зарегистрировались — проверьте почту и подтвердите email.');
        setIsLoading(false);
      } else {
        router.push('/');
        router.refresh();
      }
    } else {
      const { data, error } = await supabase.auth.signUp({
        email: cleanEmail,
        password,
        options: { data: { full_name: name } },
      });
      if (error) {
        setError(error.message);
        setIsLoading(false);
      } else if (data.user && !data.session) {
        // Email confirmation required
        setSuccessMessage('✅ Аккаунт создан! Проверьте почту и перейдите по ссылке для подтверждения, затем войдите.');
        setIsLoading(false);
      } else {
        // No email confirmation needed — go directly
        router.push('/');
        router.refresh();
      }
    }
  };

  const isRegister = mode === 'register';

  return (
    <div className="min-h-screen w-screen bg-background relative overflow-hidden flex items-center justify-center" style={{ fontFamily: "'DM Sans', sans-serif" }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-indigo-900/40 to-background" />
      <div className="absolute inset-0 opacity-[0.03] mix-blend-soft-light"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`, backgroundSize: '200px 200px' }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120vh] h-[60vh] rounded-b-[50%] bg-blue-500/15 blur-[80px]" />
      <motion.div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vh] h-[60vh] rounded-b-full bg-indigo-500/15 blur-[60px]"
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }} />
      <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vh] h-[90vh] rounded-t-full bg-blue-600/15 blur-[60px]"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', delay: 1 }} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg relative z-10 px-4"
        style={{ perspective: 1500 }}
      >
        <motion.div
          style={{ rotateX, rotateY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileHover={{ z: 10 }}
        >
          <div className="relative group">
            {/* Traveling border beams */}
            <div className="absolute -inset-[1px] rounded-2xl overflow-hidden pointer-events-none">
              {['top', 'right', 'bottom', 'left'].map((side, i) => (
                <motion.div key={side}
                  className={cn(
                    'absolute bg-gradient-to-r from-transparent via-white to-transparent opacity-60',
                    side === 'top' && 'top-0 left-0 h-[2px] w-[50%]',
                    side === 'right' && 'top-0 right-0 h-[50%] w-[2px] bg-gradient-to-b',
                    side === 'bottom' && 'bottom-0 right-0 h-[2px] w-[50%]',
                    side === 'left' && 'bottom-0 left-0 h-[50%] w-[2px] bg-gradient-to-b',
                  )}
                  animate={
                    side === 'top' ? { left: ['-50%', '100%'] } :
                    side === 'right' ? { top: ['-50%', '100%'] } :
                    side === 'bottom' ? { right: ['-50%', '100%'] } :
                    { bottom: ['-50%', '100%'] }
                  }
                  transition={{ duration: 2.5, ease: 'easeInOut', repeat: Infinity, repeatDelay: 1, delay: i * 0.6 }}
                />
              ))}
            </div>

            {/* Glass card */}
            <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-10 border border-white/[0.05] shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'linear-gradient(135deg,white 0.5px,transparent 0.5px),linear-gradient(45deg,white 0.5px,transparent 0.5px)', backgroundSize: '30px 30px' }} />

              {/* Header */}
              <div className="text-center space-y-2 mb-6">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', duration: 0.8 }}
                  className="mx-auto w-16 h-16 rounded-xl flex items-center justify-center relative overflow-hidden"
                >
                  <img src="/favicon.ico" alt="Educhalka Logo" className="w-full h-full object-contain drop-shadow-md" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80"
                >
                  {isRegister ? 'Регистрация' : 'Добро пожаловать'}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-white/60 text-sm"
                >
                  {isRegister ? 'Создайте аккаунт для доступа к Базе Знаний' : 'Войдите в Базу Знаний: Алгебра, Геометрия, Физика'}
                </motion.p>
              </div>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-3 p-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs text-center"
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success */}
              <AnimatePresence>
                {successMessage && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mb-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs text-center leading-relaxed"
                  >
                    {successMessage}
                    <Link href="/login" className="block mt-2 font-semibold text-white underline underline-offset-2 hover:text-emerald-300 transition-colors">
                      → Перейти ко входу
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name (register only) */}
                {isRegister && (
                  <div className="relative">
                    <Input
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      onFocus={() => setFocusedInput('name')}
                      onBlur={() => setFocusedInput(null)}
                      className={cn('pl-4 h-12 text-base', focusedInput === 'name' && 'border-white/30 bg-white/10')}
                      required
                    />
                  </div>
                )}

                {/* Email */}
                <div className="relative">
                  <Mail className={cn('absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors', focusedInput === 'email' ? 'text-white' : 'text-white/40')} />
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput(null)}
                    className="pl-11 h-12 text-base"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    required
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock className={cn('absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors', focusedInput === 'password' ? 'text-white' : 'text-white/40')} />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onFocus={() => setFocusedInput('password')}
                    onBlur={() => setFocusedInput(null)}
                    className="pl-11 pr-11 h-12 text-base"
                    required
                    minLength={6}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors">
                    {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isLoading}
                  className="w-full relative group/btn mt-2"
                >
                  <div className="absolute inset-0 bg-white/10 rounded-lg blur-lg opacity-0 group-hover/btn:opacity-70 transition-opacity" />
                  <div className="relative bg-white text-black font-semibold h-12 rounded-lg flex items-center justify-center overflow-hidden text-base">
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      style={{ opacity: isLoading ? 1 : 0, transition: 'opacity 0.3s' }} />
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.div key="spin" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                          <div className="w-4 h-4 border-2 border-black/50 border-t-transparent rounded-full animate-spin" />
                        </motion.div>
                      ) : (
                        <motion.span key="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          className="flex items-center gap-1.5 text-base font-semibold">
                          {isRegister ? 'Создать аккаунт' : 'Войти'}
                          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>

                {/* Switch auth mode */}
                <motion.p className="text-center text-sm text-white/60 mt-3"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  {isRegister ? 'Уже есть аккаунт? ' : 'Нет аккаунта? '}
                  <Link href={isRegister ? '/login' : '/register'}
                    className="text-white font-medium hover:text-white/70 transition-colors relative group/link">
                    {isRegister ? 'Войти' : 'Зарегистрироваться'}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white group-hover/link:w-full transition-all duration-300" />
                  </Link>
                </motion.p>
              </form>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
