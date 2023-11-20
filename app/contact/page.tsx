"use client";

import { motion } from "framer-motion";
import SideText from "./_components/side-text";
import { ContactForm } from "./_components/form";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const sideTextVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const formVariants = {
  hidden: { x: 20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function YourComponent() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="md:h-[90vh] h-full flex items-center"
    >
      <div className="flex md:flex-row gap-8 md:gap-0 flex-col container mx-auto py-7 md:py-0">
        <motion.div
          variants={sideTextVariants}
          className="basis-[48%] self-center"
        >
          <SideText />
        </motion.div>
        <motion.div variants={formVariants} className="basis-[48%]">
          <ContactForm />
        </motion.div>
      </div>
    </motion.section>
  );
}
