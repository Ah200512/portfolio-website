import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#040810]"
        >
          {/* Animated logo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <div className="w-20 h-20 rounded-2xl border-2 border-primary/50 flex items-center justify-center backdrop-blur-md bg-white/5 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-12 h-12 rounded-xl flex items-center justify-center font-black text-2xl"
                style={{
                  borderTop: '2px solid #ffd700',
                  background: 'linear-gradient(135deg, #b8860b, #ffd700)',
                  color: '#000',
                  boxShadow: '0 0 20px rgba(192, 192, 192, 0.4)',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                AH
              </motion.div>
            </div>
            {/* Spinning ring */}
            <motion.div
              className="absolute -inset-3 rounded-3xl border-2 border-transparent"
              style={{
                background: 'conic-gradient(from 0deg, transparent, #d4af37, transparent) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'destination-out',
                maskComposite: 'exclude',
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <p className="text-white text-xl font-bold tracking-widest">ADITHYA HARISH</p>
            <p className="text-primary text-sm tracking-[0.3em] mt-1">PORTFOLIO</p>
          </motion.div>

          {/* Loading bar */}
          <motion.div className="mt-10 w-48 h-0.5 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#b8860b] to-[#ffd700] rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
