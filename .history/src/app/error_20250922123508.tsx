'use client';

import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="mb-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Oops! Something went wrong
          </h2>
          <p className="text-white/70 mb-8">
            {error.message || "An unexpected error occurred. Please try again."}
          </p>
        </div>
        
        <motion.button
          onClick={reset}
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Try again
        </motion.button>
        
        <div className="mt-8 text-white/50 text-sm">
          Error ID: {error.digest || 'Unknown'}
        </div>
      </motion.div>
    </div>
  );
} 