'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, HTMLAttributes } from 'react';
import { Lightbulb } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

// Tech stack list
const techStack = ['Laravel', 'Next.js', 'React', 'Framer Motion', 'Tailwind CSS'];

// Variant generator for the wrapper
const noticeIcon = cva(
  'relative', // default base styles
  {
    variants: {},
    defaultVariants: {},
  }
);

interface NoticeIconProps extends HTMLAttributes<HTMLDivElement> {}

const NoticeIcon = ({ className, ...props }: NoticeIconProps) => {
  const [currentTech, setCurrentTech] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % techStack.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      {...props}
      className={twMerge(noticeIcon(), className)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="flex items-center bg-zinc-900 text-white px-3 py-2 rounded-full cursor-pointer shadow-lg w-fit"
        whileHover={{ scale: 1.05 }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {/* Icon bounce */}
        <motion.div
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          <Lightbulb className="text-yellow-400" size={18} />
        </motion.div>

        {/* Text shows only on hover */}
        <AnimatePresence mode="wait">
          {hovered && (
            <motion.div
              key={techStack[currentTech]}
              className="ml-2 overflow-hidden whitespace-nowrap text-sm font-medium text-gray-300"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.4 }}
            >
              I'm learning{' '}
              <span className="text-white font-semibold">{techStack[currentTech]}</span>{' '}
              right now!
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default NoticeIcon;
