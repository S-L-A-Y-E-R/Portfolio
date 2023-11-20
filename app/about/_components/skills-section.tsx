"use client";

import { skills } from "./skills-array";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const staggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
      },
    }),
  };

  return (
    <section className="py-7">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold  mb-7">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r 
            from-blue-300 via-blue-400 to-blue-500"
          >
            My Skills
          </span>
        </h1>
        <AnimatePresence>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col justify-center items-center p-5 space-y-3 border rounded-lg"
                variants={staggerVariants}
                initial="hidden"
                animate="visible"
                custom={index}
              >
                {skill.icon}
                <p className="text-sm opacity-80">{skill.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
