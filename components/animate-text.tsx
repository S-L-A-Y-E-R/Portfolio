"use client";

import { AnimatePresence, motion } from "framer-motion";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
