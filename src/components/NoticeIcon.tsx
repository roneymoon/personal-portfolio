'use client';

import { motion, AnimatePresence, type MotionProps } from 'framer-motion';
import { useEffect, useState, HTMLAttributes } from 'react';
import { Lightbulb } from 'lucide-react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const techStack = ['Laravel', 'Next.js', 'React', 'Framer Motion', 'Tailwind CSS'];

const noticeIcon = cva('relative', {
  variants: {},
  defaultVariants: {},
});

// ✅ Combine MotionProps and HTMLAttributes
type DivMotionProps = HTMLAttributes<HTMLDivElement> & MotionProps;

const NoticeIcon = ({ className, ...props }: DivMotionProps) => {
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
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
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

        <AnimatePresence mode="wait">
          {hovered && (
            <motion.div
              key={techStack[currentTech]}
              className="ml-2 overflow-hidden whitespace-nowrap text-sm font-medium text-gray-300"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.4 }}
            >
              I am learning{' '}
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
